document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('publication-list');
  const filter = document.querySelector('.publication-filter');
  const toggle = document.querySelector('[data-publication-toggle]');
  if (!list || !filter || !toggle) return;

  const render = (publications) => {
    let activeFilter = 'Conference';
    let isExpanded = false;
    let visiblePublicationCount = 0;
    const collapsedEntryCount = 6;

    const setCollapsedHeight = () => {
      const entries = Array.from(list.querySelectorAll('.publication-entry'));
      if (entries.length <= collapsedEntryCount) {
        list.style.removeProperty('--publication-collapsed-height');
        return;
      }

      const visibleEntries = entries.slice(0, collapsedEntryCount);
      const collapsedHeight = visibleEntries.reduce((height, entry) => {
        const styles = window.getComputedStyle(entry);
        return height + entry.offsetHeight + parseFloat(styles.marginBottom || 0);
      }, 0);
      list.style.setProperty('--publication-collapsed-height', `${Math.ceil(collapsedHeight)}px`);
    };

    const updateToggle = () => {
      const hasMorePublications = visiblePublicationCount > collapsedEntryCount;
      const label = toggle.querySelector('[data-publication-toggle-label]');
      const icon = toggle.querySelector('.fa');

      toggle.hidden = !hasMorePublications;
      toggle.setAttribute('aria-expanded', String(isExpanded));
      if (label) label.textContent = isExpanded ? 'Show fewer publications' : 'Show all publications';
      if (icon) {
        icon.classList.toggle('fa-chevron-down', !isExpanded);
        icon.classList.toggle('fa-chevron-up', isExpanded);
      }

      list.classList.toggle('is-collapsed', hasMorePublications && !isExpanded);
      list.setAttribute('aria-label', hasMorePublications && !isExpanded
        ? 'Publications; showing six at a time, scroll to browse more'
        : 'Publications; showing the complete filtered list');

      requestAnimationFrame(setCollapsedHeight);
    };

    const updateList = () => {
      const visiblePublications = activeFilter === 'All'
        ? publications
        : publications.filter((publication) => publication.venue_type === activeFilter);

      renderPublications(list, visiblePublications, publications);
      visiblePublicationCount = visiblePublications.length;
      list.scrollTop = 0;
      updateToggle();
      updatePublicationReferences(publications);
    };

    const setFilter = (venueType) => {
      activeFilter = venueType;
      isExpanded = false;
      filter.querySelectorAll('[data-venue-filter]').forEach((option) => {
        const isActive = option.dataset.venueFilter === activeFilter;
        option.classList.toggle('is-active', isActive);
        option.setAttribute('aria-pressed', String(isActive));
      });
      updateList();
    };

    const scrollToPublication = (publication, { updateHistory = false, behavior = 'smooth' } = {}) => {
      if (activeFilter !== 'All' && publication.venue_type !== activeFilter) {
        setFilter(publication.venue_type);
      }

      const hash = `#${publication.id}`;
      if (updateHistory && window.location.hash !== hash) {
        window.history.pushState(null, '', hash);
      }

      requestAnimationFrame(() => {
        const target = document.getElementById(publication.id);
        if (!target) return;

        if (list.classList.contains('is-collapsed')) {
          const listOffset = list.getBoundingClientRect().top;
          const targetOffset = target.getBoundingClientRect().top;
          list.scrollTo({
            top: list.scrollTop + targetOffset - listOffset - 8,
            behavior
          });
        }

        requestAnimationFrame(() => {
          const navigation = document.querySelector('.site-nav');
          const navigationPosition = navigation ? window.getComputedStyle(navigation).position : '';
          const navigationOffset = navigation && ['fixed', 'sticky'].includes(navigationPosition)
            ? navigation.getBoundingClientRect().height
            : 0;
          const targetTop = window.scrollY + target.getBoundingClientRect().top - navigationOffset - 16;

          window.scrollTo({
            top: Math.max(0, targetTop),
            behavior
          });
        });
      });
    };

    const navigateToHash = ({ updateHistory = false, behavior = 'smooth' } = {}) => {
      const publication = publications.find(({ id }) => `#${id}` === window.location.hash);
      if (publication) scrollToPublication(publication, { updateHistory, behavior });
    };

    filter.addEventListener('click', (event) => {
      const button = event.target.closest('[data-venue-filter]');
      if (button) setFilter(button.dataset.venueFilter);
    });

    toggle.addEventListener('click', () => {
      isExpanded = !isExpanded;
      if (!isExpanded) list.scrollTop = 0;
      updateToggle();
    });

    window.addEventListener('resize', () => {
      if (!isExpanded) setCollapsedHeight();
    });

    document.addEventListener('click', (event) => {
      const reference = event.target.closest('a[href^="#p"]');
      if (!reference) return;

      const target = publications.find((publication) => `#${publication.id}` === reference.getAttribute('href'));
      if (!target) return;

      event.preventDefault();
      scrollToPublication(target, { updateHistory: true });
    });

    window.addEventListener('hashchange', () => navigateToHash());

    updateList();
    navigateToHash({ behavior: 'auto' });
    if (document.readyState !== 'complete') {
      window.addEventListener('load', () => navigateToHash({ behavior: 'auto' }), { once: true });
    }
  };

  if (window.location.protocol === 'file:' && Array.isArray(window.PUBLICATIONS)) {
    render(window.PUBLICATIONS);
    return;
  }

  fetch('publications.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Could not load publications.json (${response.status})`);
      }
      return response.json();
    })
    .then(render)
    .catch((error) => {
      if (Array.isArray(window.PUBLICATIONS)) {
        render(window.PUBLICATIONS);
        return;
      }

      list.innerHTML = '';
      const item = document.createElement('li');
      item.className = 'loading-publications';
      item.textContent = `Unable to load publications: ${error.message}`;
      list.appendChild(item);
    });
});

function renderPublications(list, publications, allPublications) {
  list.innerHTML = '';
  publications.forEach((publication) => {
    const displayNumber = allPublications.length - allPublications.indexOf(publication);
    list.appendChild(renderPublication(publication, displayNumber));
  });
}

function updatePublicationReferences(publications) {
  publications.forEach((publication, index) => {
    const displayNumber = publications.length - index;
    document.querySelectorAll(`a[href="#${publication.id}"]`).forEach((reference) => {
      const usesParentheses = reference.textContent.trim().startsWith('(');
      reference.textContent = usesParentheses ? `(${displayNumber})` : String(displayNumber);
    });
  });
}

function renderPublication(publication, displayNumber) {
  const item = document.createElement('li');
  item.id = publication.id;
  item.className = `publication-entry venue-${publication.venue_type.toLowerCase()}`;

  const header = document.createElement('div');
  header.className = 'publication-entry__header';

  const number = document.createElement('strong');
  number.className = 'publication-number';
  number.textContent = `(${displayNumber})`;
  header.appendChild(number);

  const keyword = document.createElement('span');
  const keywordClass = publication.keyword
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  keyword.className = `publication-keyword keyword-${keywordClass}`;
  keyword.textContent = publication.keyword;
  header.appendChild(keyword);
  item.appendChild(header);

  const authors = document.createElement('span');
  authors.className = 'publication-authors';
  publication.authors.forEach((author, index) => {
    if (index > 0) authors.appendChild(document.createTextNode(', '));
    const authorNode = author.replace('*', '') === 'Yigitcan Kaya'
      ? document.createElement('u')
      : document.createElement('span');
    authorNode.textContent = author;
    authors.appendChild(authorNode);
  });
  item.appendChild(authors);
  item.appendChild(document.createTextNode('. '));

  const title = document.createElement(publication.url ? 'a' : 'span');
  if (publication.url) title.href = publication.url;
  const titleStrong = document.createElement('strong');
  titleStrong.textContent = publication.title;
  title.appendChild(titleStrong);
  item.appendChild(title);
  item.appendChild(document.createTextNode(' '));

  const venue = document.createElement('span');
  venue.className = 'publication-venue';
  venue.textContent = `(${publication.venue})`;
  item.appendChild(venue);
  item.appendChild(document.createTextNode(' '));

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'btn';
  button.setAttribute('data-toggle', 'collapse');
  button.setAttribute('data-target', `#abstract-${publication.id}`);
  button.setAttribute('aria-controls', `abstract-${publication.id}`);
  button.textContent = 'Abstract';
  item.appendChild(button);

  (publication.links || []).forEach((link) => {
    item.appendChild(document.createTextNode(' '));
    const extra = document.createElement('a');
    extra.href = link.url;
    extra.target = '_blank';
    extra.rel = 'noopener';
    const label = document.createElement('strong');
    label.textContent = `[${link.label}]`;
    extra.appendChild(label);
    item.appendChild(extra);
  });

  const abstract = document.createElement('div');
  abstract.id = `abstract-${publication.id}`;
  abstract.className = 'collapse';
  const abstractText = document.createElement('em');
  abstractText.textContent = publication.abstract;
  abstract.appendChild(abstractText);
  item.appendChild(abstract);

  return item;
}

document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('publication-list');
  const filter = document.querySelector('.publication-filter');
  if (!list || !filter) return;

  const render = (publications) => {
    let activeFilter = 'Conference';

    const updateList = () => {
      const visiblePublications = activeFilter === 'All'
        ? publications
        : publications.filter((publication) => publication.venue_type === activeFilter);

      renderPublications(list, visiblePublications);
      updatePublicationReferences(visiblePublications);
    };

    const setFilter = (venueType) => {
      activeFilter = venueType;
      filter.querySelectorAll('[data-venue-filter]').forEach((option) => {
        const isActive = option.dataset.venueFilter === activeFilter;
        option.classList.toggle('is-active', isActive);
        option.setAttribute('aria-pressed', String(isActive));
      });
      updateList();
    };

    filter.addEventListener('click', (event) => {
      const button = event.target.closest('[data-venue-filter]');
      if (button) setFilter(button.dataset.venueFilter);
    });

    document.addEventListener('click', (event) => {
      const reference = event.target.closest('a[href^="#p"]');
      if (!reference) return;

      const target = publications.find((publication) => `#${publication.id}` === reference.getAttribute('href'));
      if (target && activeFilter !== 'All' && target.venue_type !== activeFilter) {
        setFilter(target.venue_type);
      }
    });

    updateList();
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

function renderPublications(list, publications) {
  list.innerHTML = '';
  publications.forEach((publication, index) => {
    const displayNumber = publications.length - index;
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
  item.className = `publication-entry venue-${publication.venue_type.toLowerCase()}`;

  const header = document.createElement('div');
  header.className = 'publication-entry__header';

  const number = document.createElement('strong');
  number.className = 'publication-number';
  const anchor = document.createElement('a');
  anchor.id = publication.id;
  anchor.textContent = `(${displayNumber})`;
  number.appendChild(anchor);
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

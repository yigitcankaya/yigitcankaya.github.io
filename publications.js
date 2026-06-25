document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('publication-list');
  if (!list) return;

  if (window.location.protocol === 'file:' && Array.isArray(window.PUBLICATIONS)) {
    renderPublications(list, window.PUBLICATIONS);
    return;
  }

  fetch('publications.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Could not load publications.json (${response.status})`);
      }
      return response.json();
    })
    .then((publications) => {
      renderPublications(list, publications);
    })
    .catch((error) => {
      if (Array.isArray(window.PUBLICATIONS)) {
        renderPublications(list, window.PUBLICATIONS);
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
  publications.forEach((publication) => {
    list.appendChild(renderPublication(publication));
  });
}

function renderPublication(publication) {
  const item = document.createElement('li');

  const number = document.createElement('strong');
  const anchor = document.createElement('a');
  anchor.id = publication.id;
  anchor.textContent = `(${publication.number})`;
  number.appendChild(anchor);
  item.appendChild(number);
  item.appendChild(document.createTextNode(' '));

  const authors = document.createElement('span');
  authors.className = 'publication-authors';
  authors.innerHTML = publication.authorsHtml;
  item.appendChild(authors);
  item.appendChild(document.createTextNode(' '));

  const title = document.createElement(publication.titleUrl ? 'a' : 'span');
  if (publication.titleUrl) {
    title.href = publication.titleUrl;
  }

  const titleStrong = document.createElement('strong');
  titleStrong.textContent = publication.title;
  title.appendChild(titleStrong);
  item.appendChild(title);
  item.appendChild(document.createTextNode(' '));

  const venue = document.createElement('span');
  venue.className = 'publication-venue';
  venue.innerHTML = publication.venueHtml;
  item.appendChild(venue);
  item.appendChild(document.createTextNode(' '));

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'btn';
  button.setAttribute('data-toggle', 'collapse');
  button.setAttribute('data-target', `#${publication.collapseId}`);
  button.textContent = 'Abstract';
  item.appendChild(button);

  publication.links.forEach((link) => {
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
  abstract.id = publication.collapseId;
  abstract.className = 'collapse';

  const abstractText = document.createElement('em');
  abstractText.textContent = publication.abstract;
  abstract.appendChild(abstractText);
  item.appendChild(abstract);

  return item;
}

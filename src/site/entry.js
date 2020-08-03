// eslint-disable-next-line import/no-unresolved
import site from './site.yaml';
// eslint-disable-next-line import/no-unresolved
import catalog from './catalog.yaml';

function renderTitle() {
  const title = document.createElement('h1');
  title.innerHTML = site.title;
  return title;
}

function renderCatalog() {
  const element = document.createElement('ul');
  element.innerHTML = catalog.products
    .map(({ title }) => `<li>${title}</li>`)
    .join('');
  return element;
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(renderTitle());
  document.body.appendChild(renderCatalog());
});

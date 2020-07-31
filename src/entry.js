import site from '../site.yaml';

function component() {
  const element = document.createElement('div');
  element.innerHTML = site.title;
  return element;
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(component());
})
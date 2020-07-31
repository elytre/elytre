function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello Walden !';
  return element;
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(component());
})
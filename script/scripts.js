const html = document.querySelector('html');
const checkbox = document.querySelector('input[name=theme]');

const getStyle = (element, style) =>
  window.getComputedStyle(element).getPropertyValue(style);

const initialColors = {
  bg: getStyle(html, '--bg'),
  borderColor: getStyle(html, '--border-color'),
  colorText: getStyle(html, '--color-text'),
  bgGeral: getStyle(html, '--bg-geral'),
  bgGithub: getStyle(html, '--bg-github'),
  text: getStyle(html, '--text'),
  bgGitlab: getStyle(html, '--bg-gitlab'),
  bgBac: getStyle(html, '--bg-bac'),
  colorSpan: getStyle(html, '--color-span'),
  bgFooter: getStyle(html, '--bg-footer'),
  colorFooter: getStyle(html, '--color-footer'),
  colorF: getStyle(html, '--color-f'),
  bgCopy: getStyle(html, '--bg-copy'),
  colorCopy: getStyle(html, '--color-copy'),
  bgToggle: getStyle(html, '--bg-toggle'),
};

const darkMode = {
  bg: '#404040',
  borderColor: '#404040',
  colorText: '#fff',
  bgGeral: '#fff',
  bgGithub: getStyle(html, '--bg-github'),
  text: '#404040',
  bgGitlab: getStyle(html, '--bg-gitlab'),
  bgBac: getStyle(html, '--bg-bac'),
  colorSpan: getStyle(html, '--color-span'),
  bgFooter: getStyle(html, '--bg-footer'),
  colorFooter: getStyle(html, '--color-footer'),
  colorF: getStyle(html, '--color-f'),
  bgCopy: getStyle(html, '--bg-copy'),
  colorCopy: getStyle(html, '--color-copy'),
  bgToggle: getStyle(html, '--bg-toggle'),
};

const transformKey = (key) =>
  '--' + key.replace(/([A-Z])/, '-$1').toLowerCase();

const changeColors = (colors) => {
  Object.keys(colors).map((key) =>
    html.style.setProperty(transformKey(key), colors[key])
  );
};

checkbox.addEventListener('change', ({ target }) => {
  target.checked ? changeColors(darkMode) : changeColors(initialColors);
});

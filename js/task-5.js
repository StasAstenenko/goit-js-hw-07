const spanElem = document.querySelector('.color');
const btnElem = document.querySelector('.change-color');
const bodyElem = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnElem.addEventListener('click', e => {
  e.preventDefault();
  const getColor = getRandomHexColor();
  bodyElem.setAttribute('style', `background-color: ${getColor}`);
  spanElem.textContent = getColor;
})
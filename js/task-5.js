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
    bodyElem.setAttribute('style', `background-color: ${getRandomHexColor()}`);
    spanElem.textContent = getRandomHexColor();
})
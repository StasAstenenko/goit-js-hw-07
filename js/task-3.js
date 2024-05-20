const inputElem = document.querySelector('#name-input');
const outputElem = document.querySelector('#name-output');

inputElem.addEventListener('input', e => {
    e.preventDefault();
    const nameInp = e.currentTarget.value.trim();
    if (nameInp === '' || nameInp.includes(' ')) {
        outputElem.textContent = 'Anonymous';
    } else {
        outputElem.textContent = nameInp;
    };
});

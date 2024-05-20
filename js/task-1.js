const listElem = document.querySelector('#categories');
const liElem = listElem.querySelectorAll('.item');

console.log(`Number of categories: ${liElem.length}`);

liElem.forEach(el => {
    const titleEl = el.querySelector('h2').textContent;
    const countEl = el.querySelectorAll('li');

    console.log(`Category: ${titleEl}`);
    console.log(`Elements: ${countEl.length}`);
});
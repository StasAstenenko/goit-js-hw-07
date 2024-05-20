const logFormElem = document.querySelector('.login-form');

logFormElem.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const user = {};
    user.email = form.elements.email.value.trim();
    user.password = form.elements.password.value.trim();

    if (user.email === '' || user.password === '')
    {
        alert('All form fields must be filled in');
    } else {
        console.log(user);
    }

    form.reset();
}
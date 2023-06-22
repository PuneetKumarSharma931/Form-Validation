
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
let validName = false;
let validEmail = false;
let validPhone = false;
let validAddress = false;

name.addEventListener('blur', () => {

    let regex = /^[a-zA-Z][0-9a-zA-Z ]{1,9}$/;

    if (regex.test(name.value)) {

        name.classList.remove('is-invalid');
        name.classList.add('is-valid');
        validName = true;
    }
    else {

        name.classList.remove('is-valid');
        name.classList.add('is-invalid');
        validName = false;
    }
});

email.addEventListener('blur', () => {

    let regex = /^[a-zA-Z]([\-\.\_a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;

    if (regex.test(email.value)) {

        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        validEmail = true;
    }
    else {

        email.classList.remove('is-valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
});

phone.addEventListener('blur', () => {

    let regex = /^([\+0-9 ]+)?([0-9]){10}$/;

    if (regex.test(phone.value)) {

        phone.classList.remove('is-invalid');
        phone.classList.add('is-valid');
        validPhone = true;
    }
    else {

        phone.classList.remove('is-valid');
        phone.classList.add('is-invalid');
        validPhone = false;
    }
});

address.addEventListener('blur', () => {

    let regex = /^([a-zA-z\n\,\.\:\;\"\'\/\@\-\_\+\(\)\#\&\^\*0-9 ]){4}([a-zA-z\n\*\,\.\:\;\"\'\/\@\-\_\+\(\)\#\&\^0-9 ]){0,100}$/;

    if (regex.test(address.value)) {

        address.classList.remove('is-invalid');
        address.classList.add('is-valid');
        validAddress = true;
    }
    else {

        address.classList.remove('is-valid');
        address.classList.add('is-invalid');
        validAddress = false;
    }
});

let submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {


    e.preventDefault();
    let msgContainer = document.getElementById('msgContainer');

    if (validName && validEmail && validPhone && validAddress) {

        msgContainer.innerHTML = "";
        msgContainer.innerHTML = `<div id="success" class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success!</strong> Your travel request was successfully submitted.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`

    }
    else {

        msgContainer.innerHTML = "";
        msgContainer.innerHTML = `<div id="error" class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Error!</strong> Your travel request was not submitted due to errors in the form.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`

    }

});
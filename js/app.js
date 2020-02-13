console.log('App was loaded...');
const users = [{ email: 'olevchenko@gmail.com', password: '1111111' }, { email: 'test@gmail.com', password: '2222222' }, { email: 'task@gmail.com', password: '3333333' }]

const alert1 = document.getElementById('alert1');
const exampleInputEmail1 = document.getElementById('exampleInputEmail1');
const exampleInputPassword1 = document.getElementById('exampleInputPassword1');
const isPasswordValid = password => password.length < 6;
const isEmailValid = email => !email.split('').filter(el => el === '@').length;

exampleInputEmail1.addEventListener('input', e => {
    if (isEmailValid(e.target.value)) {
        // Error
        e.target.classList.add('is-invalid')
        e.target.classList.remove('is-valid')
    } else {
        e.target.classList.remove('is-invalid')
        e.target.classList.add('is-valid')
    }
})

exampleInputPassword1.addEventListener('input', e => {
    if (isPasswordValid(e.target.value)) {
        // Error
        e.target.classList.add('is-invalid')
        e.target.classList.remove('is-valid')
    } else {
        e.target.classList.remove('is-invalid')
        e.target.classList.add('is-valid')
    }
})

loginForm.addEventListener('submit', e => {
    e.preventDefault();
    console.log('Form was submit');
    let user = users.filter(el => e.target[0].value === el.email);

    if (user.length == 1 && e.target[1].value === user[0].password) {
        alert1.style.display = "block"
    }
    else if (user.length == 1 && e.target[1].value !== user[0].password) {
        alert2.style.display = "block"
    } else {
        alert3.style.display = "block"
    }
})

eye2.addEventListener('click', () => {
    showParol()
    viewElement(eye1)
})

function showParol() {
    if (exampleInputPassword1.type === 'password') {
        exampleInputPassword1.setAttribute('type', 'text');
    } else {
        exampleInputPassword1.setAttribute('type', 'password');
    }
}

function viewElement(id) {
    let el = id;
    if (el.style.display == "block") {
        el.style.display = "none";
    } else {
        el.style.display = "block";
    }
}


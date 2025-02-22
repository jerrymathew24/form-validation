document.getElementById('form').addEventListener('submit', function(e) {
e.preventDefault();
let name = document.getElementById('name').value.trim();
let email = document.getElementById('email').value.trim()
let password = document.getElementById('password').value.trim()

let nameError = document.getElementById('nameError')
let emailError = document.getElementById('emailError')
let passwordError = document.getElementById('passwordError')

nameError.textContent = ''
emailError.textContent = ''               
passwordError.textContent = ''

let isValid = true;

if(name === '') {
    nameError.textContent = 'Name is required';
    isValid = false;
}

let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
if(!emailPattern.test(email)) {
    emailError.textContent = 'Email is invalid';
    isValid = false;}

if(password.length < 4){
        passwordError.textContent = 'Password must be at least 4 characters';
        isValid = false;
}
if(isValid){
    alert('Form submitted successfully');
    this.submit()
}
})
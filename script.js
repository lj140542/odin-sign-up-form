const button = document.getElementById('createaccount');
const inputPassword = document.getElementById('password');
const inputConfirmPassword = document.getElementById('confirmpass');
const errorLib = document.getElementById('error-lib');

inputPassword.addEventListener('input',passwordVerification);
inputConfirmPassword.addEventListener('input',passwordVerification);

function passwordVerification() {
    if (inputPassword.value != inputConfirmPassword.value) {
        inputPassword.classList.add('wrong');
        inputConfirmPassword.classList.add('wrong');
        errorLib.classList.remove('non-visible');
        errorLib.classList.add('visible');
    } else {
        inputPassword.classList.remove('wrong');
        inputConfirmPassword.classList.remove('wrong');
        errorLib.classList.add('non-visible');
        errorLib.classList.remove('visible');
    }
}
function validate() {
    let inputField = document.getElementById('email');
    inputField.setAttribute('pattern', "\w+@\w+\.\w+");

    inputField.addEventListener('patternMismatch', (event) => {
        event.target.className = 'error';
    })
}
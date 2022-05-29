function validate() {
    let pattern = /.+@\w+\.(com|bg|net)/;
    let textArea = document.querySelector('#email');

    textArea.addEventListener('change', (e) => {
        let isCorrect = e.target.value.match(pattern);

        if (isCorrect === null) {
            e.target.className = 'error';
        }else {
            e.target.classList.remove('error');
        }
    });
}
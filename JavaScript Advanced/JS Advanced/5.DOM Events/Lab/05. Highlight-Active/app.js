function focused() {

    let textTypeElements = document.querySelectorAll('input[type="text"]');

    for (const x of textTypeElements){
        x.addEventListener('focus', () => {
            x.className = 'focus';
            x.value = 'focused';
            x.parentNode.className = 'focused';
        })
    }

    for (const x of textTypeElements){
        x.addEventListener('blur', () => {
            x.className = 'blur';
            x.value = 'blurred';
            x.parentNode.classList.remove('focused');
        })
    }
}
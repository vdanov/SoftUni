function lockedProfile() {
    let showButtons = Array.from(document.querySelectorAll('button'));
    showButtons.forEach(b => b.addEventListener('click', onClick));

    function onClick(event) {
        let radioButtonState = event.target.parentNode.querySelector('input[value="unlock"]').checked;

        let hiddenProfile = event.target.parentNode.querySelector('.profile div');

        if (event.target.textContent == 'Show more') {
            if (radioButtonState) {                
                hiddenProfile.style.display = 'block';
                event.target.textContent = 'Hide it';
            }
        }
        else {
            if (radioButtonState) {
                hiddenProfile.style.display = 'none';
                event.target.textContent = 'Show more';
            }
        }
    }
}
function toggle() {
    let buttonState = document.querySelector('.button').textContent;

    if (buttonState == 'More') {
        document.querySelector('#extra').style.display = 'block';
        document.querySelector('.button').textContent = 'Less';
    } else{
        document.querySelector('.button').textContent = 'More';
        document.querySelector('#extra').style.display = 'none';
    }
}
function notify(message) {
  let hiddenDiv = document.querySelector('#notification');
  let button = document.querySelector('button');

  hiddenDiv.style.display = 'block';
  hiddenDiv.textContent = message;
  
  hiddenDiv.addEventListener('click', (e) => {
    e.target.style.display = 'none'
  })
}
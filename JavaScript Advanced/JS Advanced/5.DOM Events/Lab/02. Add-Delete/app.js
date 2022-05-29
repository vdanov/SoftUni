function addItem() {
    let text = document.querySelector('#newItemText').value;
    let newLiElement = document.createElement('li');
    newLiElement.textContent = text;

    let remove = document.createElement('a');
    remove.textContent = '[Delete]';
    remove.href = '#';
    remove.addEventListener('click', deleteItem);

    newLiElement.appendChild(remove);
    document.getElementById('items').appendChild(newLiElement);
    document.querySelector('#newItemText').value = '';
    function deleteItem() {
        newLiElement.remove();
    }
}
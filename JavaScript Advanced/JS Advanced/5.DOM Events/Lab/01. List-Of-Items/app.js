function addItem() {
    let newItem = document.querySelector('#newItemText').value;
    console.log(newItem);

    let uList = document.querySelector('ul');

    let newListElement = document.createElement('li');
    newListElement.textContent = newItem;

    uList.appendChild(newListElement);
}
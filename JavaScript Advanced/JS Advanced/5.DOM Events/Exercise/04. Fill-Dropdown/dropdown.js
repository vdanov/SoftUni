function addItem() {
    let optionName = document.querySelector('#newItemText').value;
    let optionContent = document.querySelector('#newItemValue').value;

    let newOptionElement = document.createElement('option');
    newOptionElement.textContent = optionName;
    newOptionElement.value = optionContent;

    document.querySelector('#menu').appendChild(newOptionElement);

    document.querySelector('#newItemText').value = '';
    document.querySelector('#newItemValue').value = '';
}
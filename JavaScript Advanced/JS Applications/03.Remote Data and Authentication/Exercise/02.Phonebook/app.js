function attachEvents() {
    document.querySelector('#btnLoad').addEventListener('click', loadRecords);
    document.querySelector('#btnCreate').addEventListener('click', createRecord);
}

attachEvents();

async function loadRecords(params) {
    const data = await getData();

    const phonebookElement = document.querySelector('#phonebook');
    phonebookElement.replaceChildren();

    Object.values(data).map(record => {
        let dltButton = document.createElement('button');
        dltButton.textContent = 'Delete';
        dltButton.setAttribute('id', 'btnDelete')
        dltButton.addEventListener('click', () => removeData(record));
        let liElement = document.createElement('li');
        liElement.textContent = `${record.person} ${record.phone}`;

        liElement.appendChild(dltButton);
        phonebookElement.appendChild(liElement);
    });
}

async function createRecord(params) {
    let personField = document.querySelector('#person');
    let phoneField = document.querySelector('#phone');
    let createBtn = document.querySelector('#btnCreate');

    let record = {
        person: `${personField.value}: `,
        phone: `${phoneField.value}`
    };

    personField.value = '';
    phoneField.value = '';
    return postData(record);
}

async function postData(record) {
    const options = {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(record)
    };
    const resp = await fetch('http://localhost:3030/jsonstore/phonebook', options);
    const data = resp.json();
    return data;
}

async function getData(params) {
    const res = await fetch('http://localhost:3030/jsonstore/phonebook');
    return res.json();
}

async function removeData(record, event) {
    console.log(event);
    const res = await fetch('http://localhost:3030/jsonstore/phonebook/' + record._id, { method: 'delete' });

}
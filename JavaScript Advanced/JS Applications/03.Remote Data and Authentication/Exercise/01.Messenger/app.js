function attachEvents() {
    document.querySelector('#refresh').addEventListener('click', displayData);
    document.querySelector('#submit').addEventListener('click', addData);
}
attachEvents();

async function displayData(params) {

    const box = document.querySelector('#messages');
    const data = await getData();

    Object.values(data).map(x => box.textContent = '');
    Object.values(data).map(x => box.textContent += `${x.author}: ${x.content}\n`);
}

async function addData() {
    let fields = document.querySelectorAll('input[type=text]');
    let box = document.querySelector('#messages');

    let authorField = Object.values(fields)[0];
    let contentField = Object.values(fields)[1];

    const body = {
        author: authorField.value,
        content: contentField.value
    };

    postData(body);
    authorField.value = '';
    contentField.value = '';
}

async function getData() {
    const resp = await fetch('http://localhost:3030/jsonstore/messenger');
    const data = await resp.json();

    return data;
}

async function getDataByID(id) {
    const resp = await fetch('http://localhost:3030/jsonstore/messenger/' + id);
    const data = await resp.json();

    return data;
}

async function postData(body) {

    const options = {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(body)
    }
    const resp = await fetch('http://localhost:3030/jsonstore/messenger', options);
    const data = await resp.json();

    return data;
}

async function updateData(id, body) {

    const options = {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(body)
    }

    const resp = await fetch('http://localhost:3030/jsonstore/messenger/' + id, options);
    const data = await resp.json();

    return data;
}

async function deleteData(id) {
    const options = {
        method: 'delete'
    }

    const resp = await fetch('http://localhost:3030/jsonstore/messenger/' + id, options);
    const data = await resp.json();
}
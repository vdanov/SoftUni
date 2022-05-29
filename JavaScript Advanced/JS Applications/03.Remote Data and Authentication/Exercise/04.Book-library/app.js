function attachEvents(params) {
    document.querySelector('#loadBooks').addEventListener('click', loadBooks);
    document.querySelector('form').addEventListener('submit', createBook)
}
attachEvents();

async function loadBooks(params) {
    const books = await getData();
    const tbody = document.querySelector('tbody');
    tbody.replaceChildren();

    Object.values(books).map(book => {
        const trElement = document.createElement('tr');
        trElement.innerHTML = `<td>${book.title}</td>
        <td>${book.author}</td>
        <td>
            <button>Edit</button>
            <button>Delete</button>
        </td>`
        trElement.querySelectorAll('button')[1].addEventListener('click', () => deleteData(book._id));
        trElement.querySelectorAll('button')[0].addEventListener('click', () => editButton(book._id));
        tbody.appendChild(trElement);
    });
}

function editButton(id) {

    const form = document.querySelector('form');
    const editForm = new FormData(form);
    const editFormElement = document.createElement('form');

    editFormElement.innerHTML = `<h3>Edit FORM</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <button>Save</button>`;

    editFormElement.addEventListener('submit', (e) => {
        e.preventDefault();
        const newForm = new FormData(e.target);

        const author = newForm.get('author');
        const title = newForm.get('title');
        
        putData(id, { author, title })
    });

    form.replaceWith(editFormElement);
}
async function createBook(event) {
    event.preventDefault();

    const form = document.querySelector('form');
    const myForm = new FormData(form);

    const author = myForm.get('author');
    const title = myForm.get('title');
    const book = { author, title };

    const result = await postData(book);
    form.reset();
}

async function getData(params) {
    const response = await fetch('http://localhost:3030/jsonstore/collections/books/');
    const result = response.json();
    return result;
}

async function deleteData(id) {

    const response = await fetch('http://localhost:3030/jsonstore/collections/books/' + id, { method: 'delete' });
    const result = response.json();
    return result;
}

async function postData(data) {
    const options = {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    };

    const response = await fetch('http://localhost:3030/jsonstore/collections/books', options);
    const result = await response.json();
    return result;
}

async function putData(id, data) {
    const options = {
        method: 'put',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    };

    const response = await fetch('http://localhost:3030/jsonstore/collections/books/' + id, options);
    const result = await response.json();
}
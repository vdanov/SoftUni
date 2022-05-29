import { render, html } from '../node_modules/lit-html/lit-html.js';
import { until } from '../node_modules/lit-html/directives/until.js';
export { render, html, until };

// api module
// load book
// edit book
// delete book
// create book

const host = 'http://localhost:3030/jsonstore/collections';

async function request(url, method = 'get', data) {

    const options = {
        method,
        headers: {}
    };

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }
    const reponse = await fetch(host + url, options);

    if (reponse.ok != true) {
        const error = await reponse.json();
        alert(error.message);
        throw new Error(error.message);
    }

    return reponse.json();
}

async function getById(id) {
    return request('/books' + id);
}

async function getBooks(params) {
    return request('/books/');
}

async function createBook(book) {
    return request('/books/', 'post', book);
}

async function updateBook(id, book) {
    return request('/books/' + id, 'put', book);
}

async function deleteBook(id) {
    return request('/books/' + id, 'delete');
}

export {
    createBook,
    getBooks,
    updateBook,
    deleteBook,
    getById
}
import * as data from './data.js';
import {render, html} from '../node_modules/lit-html/lit-html.js';
const root = document.querySelector('#menu');
const form = document.querySelector('form');
form.addEventListener('submit',onSubmit);


const templateCard = (data) => Object.values(data).map(data=> html`<option value=${data._id}>${data.text}</option>`);
onRender();

function onSubmit(e) {
    e.preventDefault();
    const input = document.querySelector('#itemText');
    const objectData = { text:input.value };
    
    data.postData(objectData);
    onRender();
    form.reset();
}

async function onRender(params) {
    const entries = await data.getData();
    render(templateCard(entries), root);
}
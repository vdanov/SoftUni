import { html, render } from './node_modules/lit-html/lit-html.js';
import { styleMap } from './node_modules/lit-html/directives/style-map.js'
import { contacts } from './contacts.js';


let contactTemplate = (contact, onDetails) => html`
<div class="contact card">
<div>
    <i class="far fa-user-circle gravatar"></i>
</div>
<div class="info">
<h2>Name: ${contact.name}</h2>
<button class="detailsBtn" @click=${() => onDetails(contact)}>${contact.details ? 'HIDE' : 'DETAILS'}</button>
<div class="details" id=${contact.id} style=${styleMap({display: contact.details ? 'block' : 'none'})}>
    <p>Phone number: ${contact.phoneNumber}</p>
    <p>Email: ${contact.email}</p>
</div>
</div>
</div>`;


function start(params) {
    const container = document.querySelector('#contacts');
    onRender();

    function onDetails(contact) {
        contact.details = !(contact.details);
        onRender();
    }

    function onRender() {
        render(contacts.map(c => contactTemplate(c, onDetails)), container);
    }
}

start();
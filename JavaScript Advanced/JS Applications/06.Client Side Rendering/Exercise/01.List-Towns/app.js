import { render, html } from '../node_modules/lit-html/lit-html.js'

const template = (cities) => html `
<ul>
${cities.map(t=> html`<li>${t}</li>`)}
</ul>`;
const root = document.querySelector('#root');

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let cities = document.querySelector('#towns').value.split(/[\s,]+/);
    render(template(cities), root);
});
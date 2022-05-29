import { render, html } from '../node_modules/lit-html/lit-html.js';
import { styleMap } from '../node_modules/lit-html/directives/style-map.js';
import { getData } from './data.js';

const root = document.querySelector('tbody');
const data = await getData();

reset(data);

const templateCard = (object) => Object.values(object).map(o => html`
<tr class=${o.match ? 'select' : ''}>
   <td>${o.firstName} ${o.lastName} </td>
   <td>${o.email}</td>
   <td>${o.course}</td>
</tr>`);

onRender();
document.querySelector('#searchBtn').addEventListener('click', onClick);

function onClick() {
   const searchWord = document.querySelector('#searchField');
   if (searchWord.value.length == 0) {
      reset(data);
      document.querySelector('#searchField').value = '';
      onRender();
      return;
   }

   for (const person of Object.values(data)) {
      if (person.firstName.toLowerCase().match(searchWord.value.toLowerCase()) || person.lastName.toLowerCase().match(searchWord.value.toLowerCase())
         || person.email.toLowerCase().match(searchWord.value.toLowerCase()) || person.course.toLowerCase().match(searchWord.value.toLowerCase())) {
         person.match = true;
      } else {
         person.match = false;
      }
   }
   document.querySelector('#searchField').value = '';
   onRender();
}

function onRender(params) {
   render(templateCard(data), root);
}

function reset(data) {
   for (const person of Object.values(data)) {
      person.match = false;
   }
}
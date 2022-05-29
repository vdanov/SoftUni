import { render, html } from '../node_modules/lit-html/lit-html.js'
import { styleMap } from '../node_modules/lit-html/directives/style-map.js';
import { towns } from './towns.js';

const modifiedData = towns.map(town => ({ name: town, match: false }));

const root = document.querySelector('#towns');
const searchWord = document.querySelector('#searchText');
const result = document.querySelector('#result');
document.querySelector('button').addEventListener('click', onClick);

const templateCard = (data) => html`
<ul>
   ${data.map(town => html`<li class=${town.match ? 'active' : '' }>${town.name}</li>`)}
</ul>`;
onRender();

function onRender(params) {
   render(templateCard(modifiedData), root);
}

function onClick(e) {
   let count = 0;
   for (const town of modifiedData) {
      if (searchWord.value && town.name.toLocaleLowerCase().includes(searchWord.value.toLocaleLowerCase())) {
         town.match = true;
         count++;
      } else {
         town.match = false;
      }
   }
   result.textContent = count > 1 ? `${count} matches found` : `${count} match found`
   onRender();
}
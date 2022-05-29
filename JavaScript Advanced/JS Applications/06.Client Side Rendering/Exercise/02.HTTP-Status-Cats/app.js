import {cats} from './catSeeder.js';
import {render, html} from '../node_modules/lit-html/lit-html.js';
import {styleMap} from '../node_modules/lit-html/directives/style-map.js';

const container = document.querySelector('#allCats > ul');

const templateCard = (cat, onDetails) => html`
<li>
<img src=${`./images/cat${cat.statusCode}.jpg`} width="250" height="250" alt="Card image cap">
<div class="info">
    <button class="showBtn" @click=${() => onDetails(cat)}>${cat.details ? 'Hide status code' : 'Show status code'}</button>
    <div class="status" style=${styleMap({display: cat.details ? 'block' : 'none'})} id=${cat.id}>
        <h4>${cat.statusCode}</h4>
        <p>${cat.statusMessage}</p>
    </div>
</div>
</li>
`; 

function start(params) {
    onRender();
    function onRender(params) {
        render(cats.map(c => templateCard(c, onDetails)), container);        
    }
    
    function onDetails(cat) {
        cat.details = !(cat.details);
        onRender();
    }
}
start();
import { getAllIdeas } from "../data.js";

function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}

const section = document.querySelector('#dashboard-holder');
section.remove();
section.addEventListener('click', onDetails);

let ctx = null;

export async function showCatalogPage(context) {
    ctx = context;
    context.showSection(section);
    loadIdeas();
}

function onDetails(event) {
    if (event.target.tagName == 'A') {
        event.preventDefault();
        const id = event.target.dataset.id;
        ctx.goTo('details', id);
    }
}

async function loadIdeas() {
    const ideas = await getAllIdeas();

    if (ideas.length == 0) {
        section.replaceChildren(e('h1',{}, 'No ideas yet! Be the first one :)'));
    } else {
        const fragment = document.createDocumentFragment();
        ideas.map(createIdeaCard).forEach(i => fragment.appendChild(i));
        section.replaceChildren(fragment);
    }
}

function createIdeaCard(idea) {
    const element = e('div', { className: 'card overflow-hidden current-card details' });
    element.style.width = '20rem';
    element.style.height = '18rem';

    element.innerHTML = `
<div class="card-body">
    <p class="card-text">${idea.title}</p>
</div>
<img class="card-image" src="${idea.img}" alt="Card image cap">
<a data-id="${idea._id}" class="btn" href="">Details</a>`;

    return element;
}
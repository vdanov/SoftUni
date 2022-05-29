import { createIdea } from "../data.js";

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

const section = document.querySelector('#create');
section.remove();

const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);
let ctx = null;

export async function showCreatePage(context) {
    ctx = context;
    context.showSection(section);
}

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);

    const title = formData.get('title').trim();
    const description = formData.get('description').trim();
    const img = formData.get('imageURL').trim();

    if (title.length < 6) {
        return alert('Title length must be at least 6 characters');
    }
    if (img.length < 10) {
        return alert('Image URL length must be at least 6 characters');
    }
    if (description.length < 5) {
        return alert('Description length must be at least 6 characters');
    }
    createIdea({title, description, img});
    form.reset();
    ctx.goTo('dashboard-holder');
}
import { login } from "../api.js";

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

const section = document.querySelector('#login');
section.remove();
const form = section.querySelector('form');

form.addEventListener('submit', onSubmit);

let ctx = null;

export async function showLoginPage(contextTarget) {
    ctx = contextTarget;
    contextTarget.showSection(section);
}

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    await login(email, password);
    form.reset();
    ctx.goTo('home');
    ctx.updateNav();
}
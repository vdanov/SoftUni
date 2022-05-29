import { deleteByID, getIdeaByID } from "../data.js";

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

const section = document.querySelector('#description');
section.remove();
let ctx = null;
export async function showDetailsPage(context, id) {
    ctx = context;
    context.showSection(section);
    loadIdea(id);
}

async function loadIdea(id) {
    const idea = await getIdeaByID(id);
    section.replaceChildren(createIdea(idea));
}

function createIdea(idea) {
    const fragment = document.createDocumentFragment();

    fragment.appendChild(e('img', { className: 'det-img', src: idea.img }));
    fragment.appendChild(e('div', { className: 'desc' },
        e('h2', { className: 'display-5' }, idea.title),
        e('p', { className: 'infoType' }, 'Description'),
        e('p', { className: 'idea-description' }, idea.description))
    );

    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData && userData.id == idea._ownerId) {
        fragment.appendChild(e('div', { className: 'text-center' },
            e('a', { className: 'btn detb', href: '', onClick: onDelete }, 'Delete')
        ));
    }

    async function onDelete(eve) {
        eve.preventDefault();
        const confirmed = confirm('Are you sure you want to delete this idea? ');

        if (confirmed){
            await deleteByID(idea._id);
            ctx.goTo('dashboard-holder');
        }
    }
    return fragment;
}
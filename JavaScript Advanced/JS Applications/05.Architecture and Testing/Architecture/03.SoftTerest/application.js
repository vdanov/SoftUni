import { showHomePage } from './api/views/home.js';
import { showCatalogPage } from "./api/views/catalog.js";
import { showLoginPage } from "./api/views/login.js";
import { showRegisterPage } from "./api/views/register.js";
import { showDetailsPage } from "./api/views/details.js";
import { showCreatePage } from "./api/views/create.js";

import * as api from './api/data.js'
import { logout } from './api/api.js';
window.api = api;
const main = document.querySelector('main');
const nav = document.querySelector('nav');

const links = {
    'getStartedLink': 'home',
    'homeLink': 'home',
    'dashboardLink': 'dashboard-holder',
    'loginLink': 'login',
    'registerLink': 'register',
    'createLink': 'create'
};

const views = {
    'home': showHomePage,
    'dashboard-holder': showCatalogPage,
    'login': showLoginPage,
    'register': showRegisterPage,
    'create': showCreatePage,
    'details': showDetailsPage
};

const ctx = {
    goTo,
    showSection,
    updateNav
};
goTo('home');
updateNav();
document.querySelector('#navBar').addEventListener('click', onNavigate);
document.querySelector('#logoutBtn').addEventListener('click', async (e) => {
    e.preventDefault();
    await logout();
    updateNav();
    goTo('home');
});
function onNavigate(event) {
    const name = links[event.target.id];

    if (name) {
        event.preventDefault();
        goTo(name);
    }
}

function goTo(name, ...params) {
    const view = views[name];
    if (typeof view == 'function') {
        view(ctx, ...params);
    }
}

function showSection(section) {
    main.replaceChildren(section);
}

function updateNav(params) {
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if (userData != null) {
        [...nav.querySelectorAll('.user')].forEach(l => l.style.display = 'block');
        [...nav.querySelectorAll('.guest')].forEach(l => l.style.display = 'none');
    } else {
        [...nav.querySelectorAll('.user')].forEach(l => l.style.display = 'none');
        [...nav.querySelectorAll('.guest')].forEach(l => l.style.display = 'block');
    }
}
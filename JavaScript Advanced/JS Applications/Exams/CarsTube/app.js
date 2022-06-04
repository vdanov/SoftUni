import { page, render } from './src/lib.js';
import { allListingsPage } from './src/view/allListings.js';
import { createPage } from './src/view/create.js';
import { editPage } from './src/view/edit.js';
import { homePage } from './src/view/home.js';
import { listingByYearPage } from './src/view/listingByYear.js';
import { loginPage } from './src/view/login.js';
import { myListingsPage } from './src/view/myListings.js';
import { registerPage } from './src/view/register.js';
import { detailsPage } from './src/view/details.js';
import { updateUserNav } from './src/api/utilities.js';
const root = document.querySelector('#site-content');

updateUserNav();
page.redirect('/');
page(decorateContext);
sessionStorage.clear();

page('/', homePage);
page('/register', registerPage);
page('/login', loginPage);
page('/create', createPage);
page('/my-listings', myListingsPage);
page('/all-listings', allListingsPage);
page('/by-year', listingByYearPage);
page('/edit/:id', editPage);
page('/details/:id', detailsPage);

page.start()

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;
    next();
}

document.querySelector('#logoutBtn').addEventListener('click', () => { api.logout(); page.redirect('/'); updateUserNav(); });
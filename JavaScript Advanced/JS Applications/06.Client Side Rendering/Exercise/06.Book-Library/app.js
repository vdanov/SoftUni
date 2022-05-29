import { showCatalog } from './catalog.js';
import { showCreate } from './create.js';
import { showUpdate } from './update.js';
import { render } from './util.js';

// main module:
// init modules with dependencies
// - rendering  
// - communication between modules  

const root = document.body;

const context = {
    update
};

update();

function update(params) {
    render([
        showCatalog(context),
        showCreate(context),
        showUpdate(context)
    ], root);
}
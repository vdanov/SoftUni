import { createBook, html } from './util.js';

// create module: 
// control create form 

const createTemplate = (onSuccess) => html`
<form @submit=${ev=> onSubmit(ev, onSuccess)} id="add-form">
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit">
</form>`;

export function showCreate(ctx) {
    if (ctx.book == undefined) {
        return createTemplate(ctx.update);
    } else {
        return null;
    }
}

async function onSubmit(e, onSuccess) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const title = formData.get('title');
    const author = formData.get('author');

    await createBook({ title, author });

    e.target.reset();
    onSuccess();
}
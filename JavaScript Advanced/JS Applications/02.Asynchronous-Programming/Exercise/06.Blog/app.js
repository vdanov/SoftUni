function attachEvents() {
    document.querySelector('#btnLoadPosts').addEventListener('click', getAllPosts);
    document.querySelector('#btnViewPost').addEventListener('click', displayPost);
}

attachEvents();

async function displayPost() {
    const selectedID = document.querySelector('#posts').value;

    const [post, comments] = await Promise.all([
        getPostsById(selectedID),
        getCommentsByPost(selectedID)
    ]);

    document.querySelector('#post-title').textContent = post.title;
    document.querySelector('#post-body').textContent = post.body;

    const ulElement = document.querySelector('#post-comments');

    comments.forEach(c => {
        const liElement = document.createElement('li');
        liElement.textContent = c.text;
        ulElement.appendChild(liElement);
    });
}

async function getAllPosts() {
    const res = await fetch('http://localhost:3030/jsonstore/blog/posts');
    const data = await res.json();

    const selectElement = document.querySelector('#posts');

    Object.values(data).forEach(p => {
        let optionElement = document.createElement('option');
        optionElement.textContent = p.title;
        optionElement.value = p.id;
        selectElement.appendChild(optionElement);
    });

    document.querySelector('#btnLoadPosts').disabled = true;
}

async function getPostsById(postId) {
    const res = await fetch('http://localhost:3030/jsonstore/blog/posts/' + postId);
    const data = await res.json();
    return data;
}

async function getCommentsByPost(postId) {
    const res = await fetch('http://localhost:3030/jsonstore/blog/comments');
    const data = await res.json();

    const comments = Object.values(data).filter(c => c.postId == postId);

    return comments;
}
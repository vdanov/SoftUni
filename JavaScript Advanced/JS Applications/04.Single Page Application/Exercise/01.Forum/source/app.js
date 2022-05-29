async function onStart(params) {
    document.querySelector('.public').addEventListener('click', createPost);
    
}
onStart();

async function getPostID(params) {
    const options = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    }
    const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', options);
    const data = res.json();
    return data;
}

async function createPost(e) {
    
    e.preventDefault();
    const form = document.querySelector('form');
    const formData = new FormData(form);
    
    const title = formData.get('topicName');
    const username = formData.get('username');
    const content = formData.get('postText');

    const response = await getPostID();
    const id = response._id;

    const topicElement = document.createElement('div');
    topicElement.className = 'comment';
    topicElement.setAttribute('ID', id);
    const time = new Date();

    topicElement.innerHTML = `<div class="topic-name-wrapper">
    <div class="topic-name">
        <a href="#" class="normal">
            <h2>${title}</h2>
        </a>
        <div class="columns">
            <div>
                <p>Date: <time>${time.toDateString()}</time></p>
                <div class="nick-name">
                    <p>Username: <span>${username}</span></p>
                </div>
            </div>
        </div>
    </div>
</div>`;

    document.querySelector('.topic-container').appendChild(topicElement);
}
/*
<div class="comment">
    <div class="header">
        <img src="./static/profile.png" alt="avatar">
        <p><span>David</span> posted on <time>2020-10-10 12:08:28</time></p>

        <p class="post-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere sint
            dolorem quam,
            accusantium ipsa veniam laudantium inventore aut, tenetur quibusdam doloribus. Incidunt odio
            nostrum facilis ipsum dolorem deserunt illum?</p>
    </div>


    <div id="user-comment">
        <div class="topic-name-wrapper">
            <div class="topic-name">
                <p><strong>Daniel</strong> commented on <time>3/15/2021, 12:39:02 AM</time></p>
                <div class="post-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere sint
                        dolorem quam.</p>
                </div>
            </div>
        </div>
    </div>
</div>
*/
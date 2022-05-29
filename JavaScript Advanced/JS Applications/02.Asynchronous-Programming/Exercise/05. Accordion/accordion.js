function solution() {
    displaySubjectData();
}

solution();

async function getSubjectInfo() {
    const res = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
    const subjectData = await res.json();
    return subjectData;
}

async function getSubjectBody(id) {
    let url = 'http://localhost:3030/jsonstore/advanced/articles/details/' + id;

    const res = await fetch(url);
    const subjectBody = await res.json();
    return subjectBody;
}

async function displaySubjectData() {
    const subjects = await getSubjectInfo();
    let main = document.querySelector('#main');

    let subjectBodies = [];

    for (const subject of subjects) {
        subjectBodies.push(await getSubjectBody(subject._id));
    }

    subjects.map(s => {
        const divElement = document.createElement('div');
        divElement.className = 'accordion';
        divElement.innerHTML = `<div class="head">
        <span>${s.title}</span>
        <button class="button" id=${s._id} onclick="displayBody(event)">More</button>
    </div>
    <div class="extra">
    <p>${subjectBodies.find(body => body._id == s._id).content}</p>
</div>`
        main.appendChild(divElement);
    })
}

function displayBody(event) {
    
    let btn = event.target;
    let element = event.target.parentNode.parentNode.querySelector('.extra');

    if (btn.textContent == 'More') {
        element.style.display = 'block';
        btn.textContent = 'Less';
    } else {
        element.style.display = 'none';
        btn.textContent = 'More';
    }
}
async function createSubjectBody(params) {
    const url = 'http://localhost:3030/jsonstore/advanced/articles/details/' + id;
    const res = await fetch(url);
}
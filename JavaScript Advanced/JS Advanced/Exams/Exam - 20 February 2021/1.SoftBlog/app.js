const { timingSafeEqual } = require("crypto");
const { List } = require("mocha/lib/reporters");
const { title } = require("process");

function solve() {
    let createButton = document.querySelector('button');

    createButton.addEventListener('click', (e) => {
        e.preventDefault();
        let titleElement = document.createElement('h1');
        let category = document.createElement('p');
        let creator = document.createElement('p');
        let text = document.createElement('p');

        titleElement.textContent = document.querySelector('#title').value;
        category.innerHTML = `Category: <strong> ${document.querySelector('#category').value} </strong>`;
        creator.innerHTML = `Creator: <strong> ${document.querySelector('#creator').value} </strong>`;
        text.textContent = document.querySelector('#content').value;

        let article = document.createElement('article');
        let divButtons = document.createElement('div');
        let archiveButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        divButtons.classList.add('buttons')
        deleteButton.classList.add('btn', 'delete');
        deleteButton.textContent = 'Delete';
        archiveButton.classList.add('btn', 'archive');
        archiveButton.textContent = 'Archive'

        divButtons.appendChild(deleteButton);
        divButtons.appendChild(archiveButton);
        article.appendChild(titleElement);
        article.appendChild(category);
        article.appendChild(creator);
        article.appendChild(text);
        article.appendChild(divButtons);
        document.querySelector('main > section').appendChild(article);

        deleteButton.addEventListener('click', (e) => {
            e.target.parentNode.parentNode.parentNode.removeChild(document.querySelector('article'));
        });

        archiveButton.addEventListener('click', (e) => {

            let toArchive = e.target.parentNode.parentNode.querySelector('h1');

            let newElement = document.createElement('li');
            newElement.textContent = toArchive.textContent;
            let list = [];
            // document.querySelector('.archive-section > ol li').forEach(x => list.push(x.textContent));
            let a = document.querySelector('.archive-section > ol > li');
            console.log(a.children);
            if (a) {
                a.forEach(x => list.push(x.textContent));
            }
            list.push(newElement.textContent);

            list.sort((a, b) => a.localeCompare(b));


            Array.from(document.querySelector('.archive-section > ol')).forEach(x => x.removeChild('li'));

            document.querySelector('main > section').removeChild(e.target.parentNode.parentNode);

            for (const el of list) {
                let elementLI = document.createElement('li');
                elementLI.textContent = el;
                document.querySelector('.archive-section > ol').appendChild(elementLI);
            }
        })
    });
}


/*
Unexpected error: expected 
'<h2>Articles</h2>
<article>
<h1>Arrays</h1>
<p>Category:<strong>Programming</strong></p>
<p>Creator:<strong>John</strong></p>
<p>IloveJavaScript</p>
<divclass="buttons">
<buttonclass="btnarchive">Archive</button>
<buttonclass="btndelete">Delete</button>
</div>
</article>'

 to equal' 
 <article>
 <h1>Arrays</h1>
 <p>Category:<strong>Programming</strong></p>
 <p>Creator:<strong>John</strong></p>
 <p>IloveJavaScript</p>
 <divclass="buttons">
 <buttonclass="btndelete">Delete</button>
 <buttonclass="btnarchive">Archive</button>
 </div>
 </article>'



Unexpected error: expected 
'<h2>Archive</h2>
<ol>
<li>MyArticle</li>
<li>Arrays</li>
</ol>'
 to equal
'<h2>Archive</h2>
<ol>
<li>Arrays</li>
<li>MyArticle</li>
</ol>'


*/
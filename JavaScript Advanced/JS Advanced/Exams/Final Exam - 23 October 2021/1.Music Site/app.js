window.addEventListener('load', solve);

function solve() {
    let addButton = document.querySelector('#add-btn');

    let likeBttn;
    let saveBttn;
    let deleteBttn;

    likeBttn = document.createElement('button');
    likeBttn.classList.add('like-btn');
    likeBttn.textContent = 'Like song';
    likeBttn.addEventListener('click', (e) => { likeButton });

    saveBttn = document.createElement('button');
    saveBttn.textContent = 'Save song';
    saveBttn.classList.add('save-btn');
    saveBttn.addEventListener('click', (e) => saveButton);

    deleteBttn = document.createElement('button');
    deleteBttn.classList.add('delete-btn');
    deleteBttn.textContent = 'Delete';
    deleteBttn.addEventListener('click', (e) => deleteButton);

    let content = Array.from(document.querySelector('form'));
    addButton.addEventListener('click', (e) => { e.preventDefault(); songCreator });

    function songCreator(content) {

        let isValid = true;
        let div = document.createElement('div');
        div.classList.add('hits-info');

        let img = document.createElement('img');
        img.src = './static/img/img.png';

        div.appendChild(img);
        for (let index = 0; index < content.length - 1; index++) {
            let element;

            if (index == content.length - 2) {
                element = document.createElement('h3');
            } else {
                element = document.createElement('h2');
            }

            let key = content[index].name;
            let value = content[index].value;

            if (!value) {
                isValid = false;
            }

            key = key.replace(key[0], key[0].toUpperCase());
            element.textContent = `${key}: ${value}`;
            content[index].value = '';
            div.appendChild(element);
        }


        div.appendChild(saveBttn);
        div.appendChild(likeBttn);
        div.appendChild(deleteBttn);

        if (isValid) {
            document.querySelector('#all-hits div').appendChild(div);
        }
    }

    function likeButton(e) {
        e.preventDefault();
        let likes = document.querySelector('.likes > p').innerHTML;
        let num = Number(likes[likes.length - 1]) + 1;
        let output = likes.replace(num - 1, num);
        document.querySelector('.likes > p').innerHTML = output;
    };

    function saveButton(e) {
        e.preventDefault();
        let saveList = document.querySelector('#saved-hits div');
        saveList.appendChild(e.target.parentNode);
        e.target.parentNode.removeChild(likeBttn)
        e.target.parentNode.removeChild(saveBttn)
    }

    function deleteButton(e) {
        e.preventDefault();
        e.target.parentNode.parentNode.removeChild(e.target.parentNode)
    }
}

/*
<img src="./static/img/img.png">
<h2>Genre: Pop</h2>
<h2>Name: Pon de Replay</h2>
<h2>Author: Rihanna</h2>
<h3>Date: 26.11.2009</h3>
<button class="save-btn">Save song</button>
<button class="like-btn">Like song</button>
<button class="delete-btn">Delete</button>
*/

/*
<div class="hits-info">
<img src="./static/img/img.png">
<h2>Genre: Pop</h2>
<h2>Name: Pon de Replay</h2>
<h2>Author: Rihanna</h2>
<h3>Date: 26.11.2009</h3>
<button class="save-btn">Save song</button>
<button class="like-btn">Like song</button>
<button class="delete-btn">Delete</button>
</div>
*/

/*
'<img src="./static/img/img.png">
<h2>Genre: Pop</h2>
<h2>Name: Pon de Replay</h2>
<h2>Author: Rihanna</h2>
<h3>Date: 26.11.2009</h3>
<button class="save-btn">Save song</button>
<button class="like-btn">Like song</button>
<button class="delete-btn">Delete</button>

*/
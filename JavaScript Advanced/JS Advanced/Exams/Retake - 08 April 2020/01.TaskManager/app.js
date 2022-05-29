function solve() {
    document.querySelector('#add').addEventListener('click', addAction);

    function addAction(e) {
        e.preventDefault();
        let inputFields = Array.from(document.querySelectorAll('input, textarea'));

        if (inputFields.every(x => x.value)) {
            let h3 = document.createElement('h3');
            let pDesc = document.createElement('p');
            let pDate = document.createElement('p');
            let div = document.createElement('div');
            let article = document.createElement('article');
            let startButton = document.createElement('button');
            let deleteButton = document.createElement('button');

            for (const field of inputFields) {
                if (field.id == 'task') {
                    h3.textContent = field.value;
                    article.appendChild(h3);

                }

                if (field.id == 'description') {
                    pDesc.textContent = `Description: ${field.value}`;
                    article.appendChild(pDesc);
                }

                if (field.id == 'date') {
                    pDate.textContent = `Due Date: ${field.value}`;
                    article.appendChild(pDate);
                }
            }
            deleteButton.textContent = 'Delete';
            startButton.textContent = 'Start';

            deleteButton.classList.add('red');
            startButton.classList.add('green');
            div.classList.add('flex');

            div.appendChild(startButton);
            div.appendChild(deleteButton);
            article.appendChild(div);

            document.querySelector('.orange').parentNode.parentNode.children[1].appendChild(article);
            inputFields.forEach(x => x.value = '');

            startButton.addEventListener('click', startAction);
            deleteButton.addEventListener('click', deleteAction);
        }

    }

    function startAction(e) {
        let article = document.querySelector('.orange').parentNode.parentNode.children[1].children[0];
        let toAddTo = document.querySelector('.yellow').parentNode.parentNode.children[1];
        article.querySelector('.green').remove();
        let finishButton = document.createElement('button');
        finishButton.textContent = 'Finish';
        finishButton.classList.add('orange');
        article.querySelector('div').appendChild(finishButton);
        toAddTo.appendChild(article);

        finishButton.addEventListener('click', finishAction);
    }

    function deleteAction (e) {
        document.querySelector('.red').parentNode.parentNode.remove();
    }

    function finishAction(e) {
        let article = document.querySelector('article');
        let toAddTo = document.querySelector('.green').parentNode.parentNode.children[1]
        article.querySelector('div').remove();
      
        toAddTo.appendChild(article);
    }
}
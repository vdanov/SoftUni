window.addEventListener('load', solve);

function solve() {

    document.querySelector('button[type="submit"]').addEventListener('click', sendForm);

    function sendForm(e) {
        e.preventDefault();
        let inputFields = Array.from(document.querySelectorAll('input, textarea'));
        let productType = document.querySelector('#type-product').value;

        // this doesn't check explicitly for an empty string (""), MAY cause problems
        let areFieldsFilledCorrectly = inputFields.every(x => x.value);
        
        if (areFieldsFilledCorrectly) {
            let div = document.createElement('div');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let h4 = document.createElement('h4');
            let startButton = document.createElement('button');
            let finishButton = document.createElement('button');

            div.setAttribute('id', 'done')
            div.classList.add('container');
            h2.textContent = `Product type for repair: ${productType}`;
            h3.textContent = `Client information: ${inputFields[1].value}, ${inputFields[2].value}`
            h4.textContent = `Description of the problem: ${inputFields[0].value}`;
            startButton.classList.add('start-btn');
            finishButton.classList.add('finish-btn');

            startButton.setAttribute('id', 'startBtn');
            finishButton.setAttribute('id', 'finishBtn');
            finishButton.setAttribute('disabled', '');

            startButton.textContent = 'Start repair';
            startButton.addEventListener('click', startRepair);
            finishButton.textContent = 'Finish repair';
            
            finishButton.addEventListener('click', finishRepair);
            div.appendChild(h2);
            div.appendChild(h3);
            div.appendChild(h4);
            div.appendChild(startButton);
            div.appendChild(finishButton);
            document.querySelector('#received-orders').appendChild(div);

            inputFields.forEach(x => x.value = '');
        }
    }

    function startRepair(e) {
        e.srcElement.nextElementSibling.removeAttribute('disabled');
        e.target.setAttribute('disabled','');
    }

    function finishRepair(e) {
        let completedOrders = document.querySelector('#done');

        document.querySelector('#finishBtn').remove();
        document.querySelector('#startBtn').remove();

        document.querySelector('#completed-orders').appendChild(completedOrders);
    }

    document.querySelector('.clear-btn').addEventListener('click', () => {
        document.querySelectorAll('#completed-orders div').forEach(x => x.remove());
    });
}
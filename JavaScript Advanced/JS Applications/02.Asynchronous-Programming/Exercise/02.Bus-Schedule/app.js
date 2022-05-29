function solve() {

    let sign = document.querySelector('#info span');
    let departButton = document.querySelector('#depart');
    let arriveButton = document.querySelector('#arrive');

    let stop = {
        next: 'depot'
    };

    async function depart() {
        let url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;

        let response = await fetch(url);
        stop = await response.json();

        sign.textContent = `Next stop ${stop.name}`;

        departButton.disabled = true;
        arriveButton.disabled = false;
    }

    function arrive() {

        sign.textContent = `Arriving at ${stop.name}`;
        departButton.disabled = false;
        arriveButton.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
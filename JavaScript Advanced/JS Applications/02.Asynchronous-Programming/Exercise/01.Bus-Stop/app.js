async function getInfo() {
    let busID = document.querySelector('#stopId');
    let url = `http://localhost:3030/jsonstore/bus/businfo/${busID.value}`;
    let list = document.querySelector('#buses');
    list.replaceChildren();

    try {

        let response = await fetch(url);
        let allowedURLs = [1287, 1308, 1327, 2334];

        if (!(allowedURLs.includes(Number(busID.value)))) {
            throw new Error();
        }
        let data = await response.json();
        dataHandler(data);

    } catch (error) {
        document.querySelector('#stopName').textContent = error
    }

    function dataHandler(data) {
        document.querySelector('#stopName').textContent = data.name;

        Object.entries(data.buses).map(el => {
            let li = document.createElement('li');
            li.textContent = `Bus ${el[0]} arrives in ${el[1]}`
            list.appendChild(li);
        })
    }
}
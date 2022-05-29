function loadCommits() {
    let username = document.querySelector('#username');
    let repository = document.querySelector('#repo');
    let list = document.querySelector('#commits');

    list.replaceChildren();

    let url = `https://api.github.com/repos/${username.value}/${repository.value}/commits`;

    fetch(url)
        .then(response => {
            if (response.ok == false) {

                throw new Error(`${response.status} (Not Found)`);
            }
            return response.json()
        })
        .then(data => handleRequest(data))
        .catch(error => {
            let liElement = document.createElement('li');
            liElement.textContent = error;
            list.appendChild(liElement);
        });

    function handleRequest(data) {
        console.log(data);
        data.map(res => {
            let liElement = document.createElement('li');
            liElement.textContent = `${res.commit.author.name}: ${res.commit.message}`;
            list.appendChild(liElement);
        })
    }
}
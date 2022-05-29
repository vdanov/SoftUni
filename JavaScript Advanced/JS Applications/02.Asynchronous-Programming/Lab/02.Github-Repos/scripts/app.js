async function loadRepos() {
	let name = document.querySelector('#username');
	name = name.value;
	let url = `https://api.github.com/users/${name}/repos`;
	document.querySelector('#repos').replaceChildren();
	let list = document.querySelector('#repos');

	try {
		let response = await fetch(url);

		if (response.ok == false) {
			throw new Error(`${res.status} ${res.statusText}`);
		}

		let data = await response.json();
		handleRequest(data);
	} catch (error) {
		list.textContent = error
	}

	function handleRequest(data) {

		data.map(repo => {
	
			let liElement = document.createElement('li');
			liElement.innerHTML = `<a href="${repo.html_url}">
					${repo.full_name}
				</a>`;
			list.appendChild(liElement);
		})
	};
}

/*fetch(url)
	.then(res => {

		if (res.ok == false) {
			throw new Error(`${res.status} ${res.statusText}`)
		}
		return res.json()
	})
	.then(handleRequest)
	.catch(error => list.textContent = error);
*/
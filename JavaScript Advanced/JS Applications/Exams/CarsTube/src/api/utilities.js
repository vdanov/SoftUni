export function updateUserNav(params) {
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if (userData) {
        document.querySelector('#guest').style.display = 'none';
        document.querySelector('#info').textContent = `Welcome ${userData.username}`;
        document.querySelector('#profile').style.display = 'inline-block';
    } else {
        document.querySelector('#guest').style.display = 'inline-block';
        document.querySelector('#profile').style.display = 'none';
    }   
}
function solve() {
  document.querySelectorAll('#exercise button')[1].addEventListener('click', login);
}
solve();
async function register(params) {

  const form = document.querySelectorAll('form')[0];
  const formData = new FormData(form);

  const email = formData.get('email').trim();
  const password = formData.get('password').trim();
  const rePass = formData.get('rePass').trim();

  const body = {
    email: email,
    password: password,
    rePass: rePass
  };

  const url = 'http://localhost:3030/users/register/';
  const result = await postData(url, body);
  const token = result.accessToken;
  sessionStorage.setItem('token', token);
  window.location = 'http://127.0.0.1:5500/06.Furniture/index.html';
}

async function login(params) {

  const url = 'http://localhost:3030/users/login';

  const form = document.querySelectorAll('form')[1];
  const formData = new FormData(form);

  const email = formData.get('email').trim();
  const password = formData.get('password').trim();

  const body = {
    email: email,
    password: password
  };

  const result = await postData(url, body);

  if (result.accessToken !== undefined) {
    
    const options = {
      method: 'get',
      headers: {
        'Content-type': 'application/json',
        'X-Authorization': result.accessToken
      }
    }
    
    const response = await fetch(url, options)
    sessionStorage.setItem('token', result.accessToken);
    window.location = 'http://127.0.0.1:5500/06.Furniture/index.html';
  }  
}

async function postData(url, body) {

  const options = {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(body)
  };

  const response = await fetch(url, options);
  const result = response.json();

  return result;
}
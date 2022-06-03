
const host = 'http://localhost:3030'

function options(method = 'get', data) {
    const options = {
        method,
        headers: {}
    }

    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if (data) {

        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    if (userData) {
        options.headers['X-Authorization'] = userData.token;
    }
console.log(options);
    return options;
}

async function request(url, options) {
    const response = await fetch(host + url, options)

    if (response.ok != true) {

        if(response.status != 200){
            const error = await response.json();
            return alert(error.message);

            if(response.status == 204){
            //TODO
            }
        }

        return response;
    }

    return response.json();
}

export async function get(url) {
    return request(url, options());
}

export async function post(url, data) {
    return request(url, options('post', data));
}

export async function edit(url, data) {
    return request(url, options('put', data));
}

export async function del(url) {
    return request(url, options('delete'))
}

export async function login(username, password) {
    const response = await post('/jsonstore/users/login', { username, password });
    console.log('login response');
    console.log(response);
    const userData = {
        username,
        password,
        id: response._id,
        token: response.accessToken
    };
sessionStorage.setItem('userData', JSON.stringify(userData));
}

export async function register(username, password) {
    const response = await post('/jsonstore/users/register', { username, password });
    console.log('login response');
    console.log(response);
}
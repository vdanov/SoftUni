
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

    return options;
}

async function request(url, options) {
    try {
        const response = await fetch(host + url, options);

        if (response.status == 204) {
            return response
        }

        if (response.ok != true) {

            if (response.status != 200) {
                const error = await response.json();

                throw new Error(error.message);
            }
            return response;
        } else {
            return response.json();
        }


    } catch (error) {
        alert(error.message);
       throw  error;
    }
}

export async function get(url) {
    return request(url, options());
}

export async function post(url, data) {
    return request(url, options('post', data));
}

export async function edit(id, data) {
    return request('/data/cars/' + id, options('put', data));
}

export async function del(url) {
    return request(url, options('delete'))
}

export async function login(username, password) {
    const response = await post('/users/login', { username, password });

    const userData = {
        username,
        password,
        id: response._id,
        token: response.accessToken
    };

    sessionStorage.setItem('userData', JSON.stringify(userData));
}

export async function register(username, password) {
    const response = await post('/users/register', { username, password });

    const userData = {
        username,
        password,
        id: response._id,
        token: response.accessToken
    };

    sessionStorage.setItem('userData', JSON.stringify(userData));
}

export async function logout(params) {

    const userData = sessionStorage.getItem('userData');

    if (userData) {
        get('/users/logout');
        sessionStorage.removeItem('userData');
    }
}
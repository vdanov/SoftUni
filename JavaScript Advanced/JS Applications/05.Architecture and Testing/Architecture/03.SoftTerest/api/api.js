const host = 'http://localhost:3030';

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    catalog: '/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
    create: '/data/ideas',
    logout: '/users/logout'
}

function options(method = 'get', data) {
    let options = {
        method,
        headers: {}
    }

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if (userData != null) {
        options.headers['X-Authorization'] = userData.token;
    }

    return options;
}

async function request(id, options) {
    try {
        const response = await fetch(host + id, options);

        if (response.ok != true) {
            if (response.status == 403) {
                sessionStorage.removeItem('userData');
            }
            const error = await response.json();
            throw new Error(error.message);
        }

        if (response.status == 204) {
            return response;
        } else {
            return response.json();
        }
    } catch (error) {
        alert(error.message);
        throw error;
    }
}

export async function get(url) {
    return request(url, options());
}

export async function post(url, data) {
    return request(url, options('post', data));
}

export async function put(url, data) {
    return request(url, options('put', data))
}

export async function del(url) {
    return request(url, options('delete'));
}

export async function login(email, password) {
    const result = await post(endpoints.login, { email, password });
    const userData = {
        email: result.email,
        id: result._id,
        token: result.accessToken
    };
    
    sessionStorage.setItem('userData', JSON.stringify(userData));
}

export async function register(email, password) {
    const result = await post(endpoints.register, { email, password });

    const userData = {
        email: result.email,
        id: result._id,
        token: result.accessToken
    };

    sessionStorage.setItem('userData', JSON.stringify(userData));
}

export async function logout() {
    await get(endpoints.logout);
    sessionStorage.removeItem('userData');
}
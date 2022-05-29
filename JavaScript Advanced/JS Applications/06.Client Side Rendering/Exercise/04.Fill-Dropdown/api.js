const url = 'http://localhost:3030/jsonstore/advanced/dropdown';

function createOptions(method = 'get', data) {
    const userData = sessionStorage.getItem('userData');

    if (userData) {
        return {
            method,
            headers: { 'Content-Type': 'application/json', 'X-Authorization': userData.token },
            body: JSON.stringify(data)
        }
    }

    return {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
}

async function request(options) {
    try {
        const response = await fetch(url, options);
        if (response.ok != true) {
            throw Error();
        }
        return response.json();
    } catch (error) {
        return alert(error.message);
    }
}

async function get(params) {
    return await request(createOptions());    
}

async function post(data) {
   return await request(createOptions('post', data));
}

async function put(data) {
    await request(createOptions('put', data));
}

async function del(params) {
    await request(createOptions('del'));
}

export {
    get,
    post,
    put,
    del
};
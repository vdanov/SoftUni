const url = 'http://localhost:3030/jsonstore/advanced/table';

function createOptions(method = 'get', data) {

    const userData = sessionStorage.getItem('userData');

    if (userData) {
        return {
            method,
            headers: { 'Content-Type': 'application/json', 'X-Authorization': userData.token },
            body: JSON.stringify(data)
        };
    }

    return {
        method
    };
}

async function request(url, options) {
    try {
        const response = await fetch(url, options);
        if (response.ok != true) {
            throw new Error('Error on request function');
        }
        return response.json();
    } catch (error) {
        return alert(error.message)
    }
}

export async function get() {
   return await request(url, createOptions());
}


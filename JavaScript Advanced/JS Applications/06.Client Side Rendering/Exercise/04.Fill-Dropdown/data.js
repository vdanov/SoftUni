import * as api from './api.js'

export async function getData(params) {
    const data = await api.get();
    return data;
}

export async function postData(data) {
    await api.post(data);
}
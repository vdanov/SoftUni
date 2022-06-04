import * as api from './api.js';

async function getCarByID(id) {
    return api.get('/data/cars/' + id);
}

async function getAllCars(params) {
    return api.get('/data/cars?sortBy=_createdOn%20desc');
}

async function updateCar(id, data) {
    return api.edit(id, data);
}

async function createCar(data) {
    return api.post('/data/cars', data)
}

async function deleteCar(id) {
    return api.del('/data/cars/' + id);
}

export {
    createCar,
    getAllCars,
    getCarByID,
    updateCar,
    deleteCar
};
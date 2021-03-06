/* function addProduct() {

    let product = document.getElementById('producto_nombre').value;

    let price = document.getElementById('producto_precio').value;

    sessionStorage.setItem(product, price);

    showData(product);

}


function showData() {

    const datosDisponibles = document.getElementById('datosDisponibles');

    datosDisponibles.innerHTML = '';

    for (let i = 0; i < sessionStorage.length; i++) {

        let product = sessionStorage.key(i);

        let price = sessionStorage.getItem(product);

        datosDisponibles.innerHTML += '<div>' + product + ' - ' + price + '</div>';

    }

}


function deleteData() {

    var datosDisponibles = document.getElementById('datosDisponibles');

    datosDisponibles.innerHTML = 'Limpiada vista. Los datos permanecen.';

}


function deleteAll() {
    sessionStorage.clear();
    showData();
} */
const express = require("express");
const router = express.Router();
const fs = require("fs");

const listarProductos = () => {
    return new Promise((resolve, reject) => {
        fs.readFile("./producto.json", "", function(err, producto) {
            if (err) {
                reject(err);
            }

            const productoJson = JSON.parse(producto);
            resolve(productoJson);
        });
    });
};

module.exports = { listarProductos };
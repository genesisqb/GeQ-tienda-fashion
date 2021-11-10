const mail = document.getElementById("mail").value;
const pass = document.getElementById("pass").value;
const name = document.getElementById("name").value;

const { response } = require("express");

const objetoBody = {

    name: name,
    mail: mail,
    password: pass,
};

fetch("http:localhost:3000/auth/login", {
        method: "POST",
        headers: {

            "Content-Type": "application/json",
        },
        body: JSON.stringify(objetoBody),

    })
    .then(function(response) {
        return response.json();
    })
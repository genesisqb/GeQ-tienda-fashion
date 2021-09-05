document.getElementById("btn_iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn_registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);


const formulario_login = document.querySelector(".formulari_login");
const formulario_register = document.querySelector(".formulario_register");
const contenedor_login_register = document.querySelector(".contenedor_login-register");
const caja_trasera_login = document.querySelector(".caja_trasera-login");
const caja_trasera_register = document.querySelector(".caja_trasera-register");



function anchoPage() {

    if (window.innerWidth > 850) {
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
    }
}

anchoPage();


function iniciarSesion() {
    if (window.innerWidth > 850) {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "10px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}

function register() {
    if (window.innerWidth > 850) {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    } else {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
}



function formularioRegister() {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let user = document.getElementById('user ').value;
    let password = document.getElementById('password').value;

    sessionStorage.setItem(name, email, user, password);

    mostrarDatos(user);

}

function mostrarDatos() {

    const datosGuardados = document.getElementById('datosGuardados');

    datosGuardados.innerHTML = '';

    for (let i = 0; i < sessionStorage.length; i++) {

        let email = sessionStorage.key(i);

        let password = sessionStorage.getItem(user);

        datosGuardados.innerHTML += '<div>' + email + ' - ' + password + '</div>';

    }

}


function borrarTodo() {
    sessionStorage.clear();
    mostrarDatos();
}
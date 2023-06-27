


/* const nombre = document.querySelector("#name");
const email = document.querySelector("#email");
const pass = document.querySelector("#password");
const form = document.querySelector("#form");
const parrafo = document.querySelector("#warnings");

let emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

form.addEventListener("submit", (e)=> {
    e.preventDefault();

    if (valdiarFormualrio()) {
        form.submit();
    } else {
        console.log("error")
    }
});


function valdiarFormualrio() {
    const nombreValido =  nombre.value.trim().length  > 0;
    const emailValido = emailRegex.test(email.value);
    const passValido = passRegex.test(pass.value);

    return nombreValido && emailValido && passValido
}


function validInputs(mensaje, e) {
    let elemento = e.target;
    let valor = e.target.value;
    
    let spanAnterior = elemento.nextElementSibling;
    if (spanAnterior.classList.contains("span")) {
        spanAnterior.remove()
    }
    if (valor.trim().length <= 0) {
        let span = document.createElement("span");
        span.classList.add("span");
        span.textContent = mensaje;
        
        elemento.insertAdjacentElement("afterend", span);
        
    }
}

function validEmailAddress(mensaje, e) {
    let elemento = e.target;
    let emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    let spanAnterior = elemento.nextElementSibling;
    if (spanAnterior && spanAnterior.classList.contains("span")) {
        spanAnterior.remove()
    }
    if (!emailRegex.test(elemento.value)) {
            let span = document.createElement("span");
            span.classList.add("span");
            span.textContent = mensaje;
            
            elemento.insertAdjacentElement("afterend", span);
        }
    }


function validPassword(mensaje, e) {
    let elemento = e.target
    let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if(!passRegex.test(elemento.value)) {
        crearSpan(mensaje, elemento)
    }
}


function crearSpan(mensaje, elemento) {
    let spanAnterio = elemento.nextElementSibling;
    if (spanAnterio.classList.contains("span")){
        spanAnterio.remove();
    }

    let span = document.createElement("span");
    span.classList.add("span");
    span.textContent = mensaje;
    
    elemento.insertAdjacentElement("afterend", span);
}

nombre.addEventListener("blur", (e) => validInputs("This name is invalid", e));
email.addEventListener("blur", (e) => validEmailAddress("This email is invalid", e));     
pass.addEventListener("blur", (e) => validPassword("This password is invalid", e));
email.addEventListener("input", (e) => validEmailAddress("This is not in email format", e));
pass.addEventListener("input", (e) => validPassword("Contraseña incorrecta", e));








 */
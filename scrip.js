const form = document.querySelector("#form");
const inputs = document.querySelectorAll("input");
const xmark = document.querySelector(".icono-xmark");
const check = document.querySelector(".icono-check");
console.log(xmark, check);

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
    email: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, //- al menos 8 caracteres -al menos 1 letra mayúscula, 1 letra minúscula y 1 número -Puede contener caracteres especiales
}

let valid = true;

function spanError(parentElement, mensaje) {
    
    let spanError = document.createElement("span");
    spanError.classList.add("spanError");
    spanError.textContent = mensaje;

    if (parentElement.querySelector(".spanError")) {
        parentElement.removeChild(parentElement.querySelector(".spanError"));
    }
    parentElement.appendChild(spanError);
}

function sacarSpan(parentElement) {
    let spanCheck = parentElement.querySelector(".spanError");
    if (spanCheck) {
        parentElement.removeChild(spanCheck);
    }
}

function validarFormulario(e) {

    const parentElement = e.target.parentElement;

    switch (e.target.name) {
        case "usuario":
            if (expresiones.usuario.test(e.target.value)) {
                document.querySelector(".grupo-usuario .icono-check").style.display = "block";
                document.querySelector(".grupo-usuario .icono-xmark").style.display = "none";

                sacarSpan(parentElement);
                valid = true;

            } else {
                document.querySelector(".grupo-usuario .icono-xmark").style.display = "block";
                document.querySelector(".grupo-usuario .icono-check").style.display = "none";

                spanError(parentElement, `${e.target.name} is invalid.`);
                valid = false;
            }
        break;
        case "email":
            if (expresiones.email.test(e.target.value)) {
                document.querySelector(".grupo-email .icono-check").style.display = "block";
                document.querySelector(".grupo-email .icono-xmark").style.display = "none";

                sacarSpan(parentElement);
                valid = true;
            } else {
                document.querySelector(".grupo-email .icono-xmark").style.display = "block";
                document.querySelector(".grupo-email .icono-check").style.display = "none";

                spanError(parentElement, `${e.target.name} is invalid.`);
                valid = false;
            }
        break;
        case "password":
            if (expresiones.password.test(e.target.value)) {
                document.querySelector(".grupo-password .icono-check").style.display = "block";
                document.querySelector(".grupo-password .icono-xmark").style.display = "none";

                sacarSpan(parentElement);
                valid = true;
            } else {
                document.querySelector(".grupo-password .icono-xmark").style.display = "block";
                document.querySelector(".grupo-password .icono-check").style.display = "none"; 

                spanError(parentElement, `${e.target.name} is invalid.`); 
                valid = false;
            }  
    }
  
}

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

form.addEventListener("submit", (e) => {
    if (!valid) {
      e.preventDefault();  
    }
    
})

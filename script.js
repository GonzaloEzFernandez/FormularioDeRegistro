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


function spanError(e) {
    let span = document.createElement("span");
    span.classList.add("span");
    span.textContent = "Mensaje de error";

    

}

function validarFormulario(e) {
    switch (e.target.name) {
        case "usuario":
            if (expresiones.usuario.test(e.target.value)) {
                document.querySelector(".grupo-usuario .icono-check").style.display = "block";
                document.querySelector(".grupo-usuario .icono-xmark").style.display = "none";
            } else {
                document.querySelector(".grupo-usuario .icono-xmark").style.display = "block";
                document.querySelector(".grupo-usuario .icono-check").style.display = "none";
            }
        break;
        case "email":
            if (expresiones.email.test(e.target.value)) {
                document.querySelector(".grupo-email .icono-check").style.display = "block";
                document.querySelector(".grupo-email .icono-xmark").style.display = "none";
            } else {
                document.querySelector(".grupo-email .icono-xmark").style.display = "block";
                document.querySelector(".grupo-email .icono-check").style.display = "none";   
            }
        break;
        case "password":
            if (expresiones.password.test(e.target.value)) {
                document.querySelector(".grupo-password .icono-check").style.display = "block";
                document.querySelector(".grupo-password .icono-xmark").style.display = "none";
            } else {
                document.querySelector(".grupo-password .icono-xmark").style.display = "block";
                document.querySelector(".grupo-password .icono-check").style.display = "none";   
            }  
    }
  
}

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
})
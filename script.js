const form = document.querySelector("#form");
const inputs = document.querySelectorAll("input");
const xmark = document.querySelector(".fa-circle-xmark");
const check = document.querySelector(".fa-circle-check");
console.log(form, inputs,xmark, check);

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
    email: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/   ,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, //- al menos 8 caracteres -al menos 1 letra mayúscula, 1 letra minúscula y 1 número -Puede contener caracteres especiales
}

function validarFormulario(e) {
    console.log(e.target.id);
    switch (e.target.id) {
        case "name":
            if (expresiones.usuario.test(e.target.value)) {
                xmark.classList.remove("activo");
                check.classList.add("activo");
            } else {
                check.classList.remove("activo");
                xmark.classList.add("activo");
            }
        break;
        case "email":
            if (!expresiones.email.test(e.target.value)) {
                xmark.classList.remove("activo");
                check.classList.add("activo");
            } else {
                check.classList.remove("activo");
                xmark.classList.add("activo");
            }
           console.log("funciona!!")
        break;
    }
  
}


function validarCamposForm() {
    
}

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
})
let requiredInputs = document.querySelectorAll("input:required");
let requiredInputsArray = [...requiredInputs];

// Mudas a cor da legenda para mostrar o erro em campos invalidos
requiredInputsArray.forEach(function (input) {
    input.addEventListener("focusout", function () {
        let campoTxt = input.parentElement.parentElement;

        if (input.checkValidity() == false) {
            campoTxt.classList.add("erro");
        } else {
            campoTxt.classList.remove("erro");
        }
    });
});

// Verifica os campos desabilitados e deixa o botão dentro do campo desabilitado, caso exista
const checkDisabledInputs = () => {
    let inputs = document.querySelectorAll("input");
    let inputsArray = [...inputs];

    inputsArray.forEach(function (input) {
        let campoBtn = input.parentElement.querySelector(".input-btn");

        if (campoBtn != null && input.disabled == true) {
            campoBtn.setAttribute("disabled", "");
        } else if (campoBtn != null && input.disabled == false) {
            campoBtn.removeAttribute("disabled", "");
        }
    });
};

checkDisabledInputs();

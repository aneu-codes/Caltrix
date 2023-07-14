var matrix1Inputs = document.querySelectorAll("#matrix1 input");
var matrix2Inputs = document.querySelectorAll("#matrix2 input");
var warning = document.querySelectorAll("#msg");
var errorContainer = document.getElementById("error-container");
var errorMessage = document.getElementById("error-message");

function validity(inputs, warningMessage) {
    var v = false;

    inputs.forEach(function (input, i) {
        if (/[^0-9.]/.test(input.value)) {
            warning[i].innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> ' + warningMessage;
            v = true;
        } else {
            warning[i].innerHTML = '';
        }
    });

    return v;
}

matrix1Inputs.forEach(function (input, i) {
    input.addEventListener("input", function (e) {
        if (validity(matrix1Inputs, 'Solo se admiten valores de números enteros o decimales.')) {
            showErrorMessage('Error: Al menos un valor ingresado no es válido.');
        } else {
            hideErrorMessage();
        }
    });
});

matrix2Inputs.forEach(function (input, i) {
    input.addEventListener("input", function (e) {
        if (validity(matrix2Inputs, 'Solo se admiten valores de números enteros o decimales.')) {
            showErrorMessage('Error: Al menos un valor ingresado no es válido.');
        } else {
            hideErrorMessage();
        }
    });
});

function showErrorMessage(message) {
    errorContainer.style.display = 'block';
    errorMessage.innerText = message;
}

function hideErrorMessage() {
    errorContainer.style.display = 'none';
    errorMessage.innerText = '';
}
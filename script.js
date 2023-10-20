

let displayValue = "";
let clearDisplayNext = false;

function addDisplay(value) {
    if (clearDisplayNext) {
        clearDisplay();
        clearDisplayNext = false;
    }
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = displayValue;
}

function calcularResultado() {
    try {
        displayValue = eval(displayValue);
        document.getElementById("display").value = displayValue;
        clearDisplayNext = true;
    } catch (error) {
        document.getElementById("display").value = "Erro";
        displayValue = "";
    }
}

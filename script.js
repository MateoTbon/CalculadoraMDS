function calcular(operacion) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado;
    
    if (isNaN(num1) || isNaN(num2)) {
        resultado = "Ingrese números válidos";
    } else {
        switch (operacion) {
            case 'suma':
                resultado = num1 + num2;
                break;
            case 'resta':
                resultado = num1 - num2;
                break;
            case 'multiplicacion':
                resultado = num1 * num2;
                break;
            case 'division':
                resultado = (num2 !== 0) ? num1 / num2 : "Error: División por cero";
                break;
        }
    }
    document.getElementById("resultado").innerText = resultado;
}

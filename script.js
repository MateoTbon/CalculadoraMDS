function calcular(operacion) {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resultado;
    let error = "";

    if (isNaN(num1) || isNaN(num2) || num1.trim() === "" || num2.trim() === "") {
        error = "Error: Ingrese solo números válidos";
        resultado = "";
    } else {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        
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
                if (num2 === 0) {
                    error = "Error: No se puede dividir entre cero";
                    resultado = "";
                } else {
                    resultado = num1 / num2;
                    if (!isFinite(resultado)) {
                        error = "Advertencia: El resultado es infinito o indefinido";
                        resultado = "";
                    }
                }
                break;
        }
    }

    document.getElementById("resultado").innerText = resultado;
    document.getElementById("error").innerText = error;
}

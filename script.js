function calcular(operacion) {
    let num1 = document.getElementById("num1").value.replace(',', '.');
    let num2 = document.getElementById("num2").value.replace(',', '.');
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
                resultado = ajustarPrecision(num1 + num2);
                break;
            case 'resta':
                resultado = ajustarPrecision(num1 - num2);
                break;
            case 'multiplicacion':
                resultado = ajustarPrecision(num1 * num2);
                break;
            case 'division':
                if (num2 === 0) {
                    error = "Error: No se puede dividir entre cero";
                    resultado = "";
                } else {
                    resultado = ajustarPrecision(num1 / num2);
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

function ajustarPrecision(valor) {
    if (Math.abs(valor) >= 1e10 || Math.abs(valor) < 1e-10) {
        let exp = Math.floor(Math.log10(Math.abs(valor)));
        let base = valor / Math.pow(10, exp);
        return base.toFixed(5) + " × 10^" + exp;
    } else {
        return parseFloat(valor.toFixed(10));
    }
}

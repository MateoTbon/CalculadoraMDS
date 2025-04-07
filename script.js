let ans = null;
let historial = [];

function calcular(operacion) {
    let num1 = document.getElementById("num1").value.replace(',', '.');
    let num2 = document.getElementById("num2").value.replace(',', '.');
    let resultado;
    let error = "";

    if (num1.toLowerCase() === "ans") num1 = ans;
    if (num2.toLowerCase() === "ans") num2 = ans;

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

    if (resultado !== "") {
        ans = resultado;
        historial.unshift(`${num1} ${operacion} ${num2} = ${resultado}`);
        if (historial.length > 10) historial.pop();
    }

    document.getElementById("resultado").innerText = resultado;
    document.getElementById("error").innerText = error;
    document.getElementById("ans").innerText = ans !== null ? ans : "N/A";
    actualizarHistorial();
}

function usarANS(campo) {
    if (ans !== null) {
        document.getElementById(campo).value = ans;
    }
}

function ajustarPrecision(valor) {
    if (valor== 0) {
        return "0.00000";
    } 
    else if (Math.abs(valor) >= 1e10 || Math.abs(valor) < 1e-10) {
        let exp = Math.floor(Math.log10(Math.abs(valor)));
        let base = valor / Math.pow(10, exp);
        return base.toFixed(5) + " × 10^" + exp;
    } 
    else {
        return parseFloat(valor.toFixed(10));
    }
}

function actualizarHistorial() {
    let historialElement = document.getElementById("historial");
    historialElement.innerHTML = "";
    historial.forEach(entry => {
        let li = document.createElement("li");
        li.textContent = entry;
        historialElement.appendChild(li);
    });
}

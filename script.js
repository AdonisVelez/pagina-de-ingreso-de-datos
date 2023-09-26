document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("calculatorForm");
    const resultsDiv = document.getElementById("results");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const number1 = parseFloat(document.getElementById("number1").value);
        const number2 = parseFloat(document.getElementById("number2").value);

        if (!isNaN(number1) && !isNaN(number2)) {
            resultsDiv.innerHTML = ""; // Limpia los resultados anteriores

            for (let i = 1; i <= 5; i++) {
                let result;
                switch (i) {
                    case 1:
                        result = number1 + number2;
                        resultsDiv.innerHTML += `<p>Iteración ${i}: Suma = ${result}</p>`;
                        break;
                    case 2:
                        result = number1 - number2;
                        resultsDiv.innerHTML += `<p>Iteración ${i}: Resta = ${result}</p>`;
                        break;
                    case 3:
                        result = number1 * number2;
                        resultsDiv.innerHTML += `<p>Iteración ${i}: Multiplicación = ${result}</p>`;
                        break;
                    case 4:
                        if (number2 !== 0) {
                            result = number1 / number2;
                            resultsDiv.innerHTML += `<p>Iteración ${i}: División = ${result}</p>`;
                        } else {
                            resultsDiv.innerHTML += `<p>Iteración ${i}: No se puede dividir por cero.</p>`;
                        }
                        break;
                    case 5:
                        result = number1 % number2;
                        resultsDiv.innerHTML += `<p>Iteración ${i}: Módulo = ${result}</p>`;
                        break;
                    default:
                        break;
                }
            }
        } else {
            resultsDiv.innerHTML = "<p>Por favor, ingrese números válidos.</p>";
        }
    });
});
const form = document.getElementById("tipForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const price = parseFloat(document.querySelector('#price').value);
    const evaluation = parseFloat(document.querySelector('#evaluation').value);
    const peoples = parseInt(document.querySelector('#peoples').value);

    if (!isNaN(price) && !isNaN(evaluation) && !isNaN(peoples)) {
        const tipCalculation = (evaluation / 100 * price) / peoples;
        result.innerHTML = `Gorjeta Total: R$ ${tipCalculation.toFixed(2)} cada`;
    } else {
        result.innerHTML = `<p>Preencha os campos para Calcular</p>`;
    }
});

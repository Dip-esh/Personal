const billInput = document.getElementById("Bill");
const tipInput = document.getElementById("tip");
const resultDiv = document.getElementById("result");

document.getElementById("calculate").addEventListener("click", function () {
    const bill = parseFloat(billInput.value);
    const tipPercent = parseFloat(tipInput.value);

    if (isNaN(bill) || isNaN(tipPercent)) {
        resultDiv.innerHTML = "❗Please enter valid numbers.";
        return;
    }

    const tipAmount = (bill * tipPercent) / 100;
    const total = bill + tipAmount;

    resultDiv.innerHTML = `Tip: Rs ${tipAmount.toFixed(2)} <br> Total: Rs ${total.toFixed(2)}`;
});

document.getElementById("reset").addEventListener("click", function () {
    billInput.value = "";
    tipInput.value = "";
    resultDiv.innerHTML = "Tip: Rs 0.00 <br> Total: Rs 0.00";
});

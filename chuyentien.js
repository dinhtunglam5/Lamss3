function convertCurrency() {
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("fromCurrency").value;
    let to = document.getElementById("toCurrency").value;
    let rates = {
        "VND": { "USD": 0.000038, "EUR": 0.0000004, "VND": 1 },
        "USD": { "VND": 22800, "EUR": 0.91, "USD": 1 },
        "EUR": { "VND": 30.04451 , "USD": 1.1, "EUR": 1 }
    };
    let result = amount * rates[from][to];
    document.getElementById("result").innerHTML =
        `Result: ${result} ${to}`;
}

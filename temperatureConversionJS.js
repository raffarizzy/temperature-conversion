console.log("Script Loaded");

let inputFahrenheit = document.getElementById("inputFahrenheit");
let inputCelcius = document.getElementById("inputCelcius");
let formulaText = document.getElementById("formulaText");

let celciusDefaultValue = 0;
let fahrenheitDefaultValue = 32;

let formulaCelciusConversion = function(inputCelcius) {
    return (inputCelcius * 9/5) + 32;
}
let formulaFahrenheitConversion = function(inputFahrenheit) {
    return (inputFahrenheit - 32) * 5/9;
}

inputCelcius.value = celciusDefaultValue;
inputFahrenheit.value = fahrenheitDefaultValue;

inputCelcius.addEventListener("input", function() {
    inputFahrenheit.value = formulaCelciusConversion(inputCelcius.value);
    formulaText.innerHTML = `Formula : (<b>${inputCelcius.value}°C</b> × 9/5) + 32 = <b>${inputFahrenheit.value}°F</b>`;
})

inputFahrenheit.addEventListener("input", function() {
    inputCelcius.value = formulaFahrenheitConversion(inputFahrenheit.value);
    toString = String(inputCelcius.value);
    if (toString.includes(".") == true) {
        let behindComma = toString.slice((toString.search("\\.")) + 1);
        if (behindComma.length > 3) {
            inputCelcius.value = Number(formulaFahrenheitConversion(inputFahrenheit.value).toFixed(3));
        }
    }

    formulaText.innerHTML = `Formula : (<b>${inputFahrenheit.value}°F</b> − 32) × 5/9 = <b>${inputCelcius.value}°C</b>`
})
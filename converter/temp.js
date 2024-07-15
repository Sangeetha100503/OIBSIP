document.getElementById('convertButton').addEventListener('click', function() {
    const input = document.getElementById('temperatureInput').value;
    const unit = document.getElementById('unitSelect').value;
    const resultDiv = document.getElementById('result');

    // Validate the input
    if (isNaN(input) || input === '') {
        resultDiv.textContent = 'Please enter a valid number.';
        return;
    }

    let temperature = parseFloat(input);
    let result = {};

    switch (unit) {
        case 'Celsius':
            result = {
                Fahrenheit: (temperature * 9/5) + 32,
                Kelvin: temperature + 273.15
            };
            resultDiv.innerHTML = `
                Celsius to Fahrenheit: ${result.Fahrenheit.toFixed(2)} °F<br>
                Celsius to Kelvin: ${result.Kelvin.toFixed(2)} K
            `;
            break;
        case 'Fahrenheit':
            result = {
                Celsius: (temperature - 32) * 5/9,
                Kelvin: (temperature - 32) * 5/9 + 273.15
            };
            resultDiv.innerHTML = `
                Fahrenheit to Celsius: ${result.Celsius.toFixed(2)} °C<br>
                Fahrenheit to Kelvin: ${result.Kelvin.toFixed(2)} K
            `;
            break;
        case 'Kelvin':
            result = {
                Celsius: temperature - 273.15,
                Fahrenheit: (temperature - 273.15) * 9/5 + 32
            };
            resultDiv.innerHTML = `
                Kelvin to Celsius: ${result.Celsius.toFixed(2)} °C<br>
                Kelvin to Fahrenheit: ${result.Fahrenheit.toFixed(2)} °F
            `;
            break;
    }
});

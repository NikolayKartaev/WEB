function CelciumFahrenheit(inputTemp) {
    const outputTemp = ((9 / 5) * inputTemp + 32).toFixed(1);
    return outputTemp;
}

const celciumTemperature = Number.parseFloat(prompt("Введите температуру в градусах Цельсия: "));
alert(`Цельсий: ${celciumTemperature}, Фаренгейт: ${CelciumFahrenheit(celciumTemperature)}`);
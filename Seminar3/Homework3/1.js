const C_temperature = parseInt(prompt("Введите температуру в градусах Цельсия: "));
const F_temperature = (9 / 5) * C_temperature + 32;

alert(`Цельсий: ${C_temperature}, Фаренгейт: ${F_temperature.toFixed(1)}`);
// Задача 2: Получить от пользователя два числа и вывести в диалоговое окно сумму 
// значений, которые ввел пользователь, вывод должен выглядеть так (пример): 
// Результат сложения чисел 5 и 2 равен 7.
function sum(a, b) {
    return a + b;
}
const a = Number.parseInt(prompt("Введите число А: "));
const b = Number.parseInt(prompt("Введите число B: "));

alert(`Результат сложения чисел ${a} и ${b} равен ${sum(a, b)}`);



const answer = confirm("Вам хорошо живется?");
if (answer) {
    alert("Тогда мы идем к вам!");
} else {
    alert("Ну, вы держитесь там!");
}


const product = prompt("Введите фрукт: ").toLowerCase();

switch (product) {
    case "бананы":
    case "груши":
        alert("Бананы и груши стоят 70 рублей");
        break;
    case "мандарины":
        alert("Мандарины стоят 100 рублей");
        break;
    default:
        alert("Нет такого продукта");
}
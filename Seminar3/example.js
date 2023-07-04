// const a = Number.parseFloat(prompt("Введите число а:"));
// const b = Number.parseFloat(prompt("Введите число b"));
// function Sum (a,b) {
//     return a+b;
// }
// alert(`Результат сложения чисел ${a} и ${b} равен ${(Sum(a,b)).toFixed(2)}`);

// const question = confirm("Вам хорошо живется?");
// if (question) { // if (question == true) 
//     alert("Тогда мы идем к вам");
// } else alert("Ну вы держитесь там");

// question ? alert("Тогда мы идем к вам") : alert("Ну вы держитесь там"); // тернарный оператор

let product = prompt("Введите фрукт: ");
switch (product.toLowerCase()) {
    case "мандарины":
        alert("Мандарины стоят 100 руб/кг");
        break;
    case "бананы":
    case "груши":
        alert("Бананы и груши стоят 70 руб/кг");
        break;
    default:
        alert("Нет такого продукта");
        break;




}
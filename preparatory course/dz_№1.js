//1
const a = 5;
const b = 7;

console.log(`Произведение: ${a * b}`);
console.log(`Сумма: ${a + b}`);

//2
const string1 = "Привет";
const string2 = "Мир";

const totalLength = string1.length + string2.length;
console.log(`Общее количество символов: ${totalLength}`);

//3
const number = prompt("Введите трехзначное число:");

if (number && number.length === 3 && !isNaN(number)) {
    const digit1 = parseInt(number[0]);
    const digit2 = parseInt(number[1]);
    const digit3 = parseInt(number[2]);
    const sum = digit1 + digit2 + digit3;
    console.log(`Сумма цифр числа ${number}: ${sum}`);
} else {
    console.log("Пожалуйста, введите корректное трехзначное число.");
}



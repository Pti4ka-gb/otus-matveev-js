//  1

const num1 = 25;
const num2 = 30;
console.log(`Наибольшее из ${num1} и ${num2}: ${Math.max(num1, num2)}`);

// 2

const monthNum = 7; 
const monthNames = [
    "январь", "февраль", "март", "апрель", "май", "июнь",
    "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"
];

if (monthNum >= 1 && monthNum <= 12) {
    console.log(`${monthNum} - ${monthNames[monthNum - 1]}`);
} else {
    console.log("Некорректный номер месяца");
}

// 3

const circleArea = 50;
const squareArea = 64;

const squareSide = Math.sqrt(squareArea);

console.log(`Диаметр круга: ${circleDiameter.toFixed(2)}`);
console.log(`Сторона квадрата: ${squareSide.toFixed(2)}`);

if (circleDiameter <= squareSide) {
    console.log("✓ Круг поместится в квадрат");
} else {
    console.log("✗ Круг НЕ поместится в квадрат");
}
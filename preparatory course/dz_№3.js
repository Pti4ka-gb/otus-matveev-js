//1

let sum = 0;
for (let i = 50; i <= 100; i++) sum += i;
console.log(`Сумма целых чисел от 50 до 100: ${sum}`);
//2
console.log("Таблица умножения на 7:");
for (let i = 1; i <= 9; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}
//3

const N = 10; 
let sumOdd = 0;
let countOdd = 0;

for (let i = 1; i <= N; i++) {
    if (i % 2 !== 0) {
        sumOdd += i;
        countOdd++;
    }
}

const average = countOdd > 0 ? sumOdd / countOdd : 0;
console.log(`Для N = ${N}:`);
console.log(`Сумма нечётных чисел: ${sumOdd}`);
console.log(`Количество нечётных чисел: ${countOdd}`);
console.log(`Среднее арифметическое: ${average.toFixed(2)}`);

let title = "proJS22";
let screens = "Простые, Сложные, Интерактивные";
let screeenPrice = 1000;
let rollback = 10;
let fullPrice = 10000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log("строка имеет длину, равную " + screens.length + " символ");

console.log(`Стоимость верстки экранов ${screeenPrice} юаней
Стоимость разработки сайта ${fullPrice} юаней`);

console.log(screens.toLowerCase().split(", "));

console.log(fullPrice * (rollback / 100));

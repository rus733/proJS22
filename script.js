"use strict";

let title = prompt("Как называется ваш проект?");
//console.log(title);

let screens = prompt("Какие типы экранов нужно разработать?");
//console.log(screens);

let screeenPrice = +prompt("Сколько будет стоить данная работа?");
//console.log(screeenPrice);

//let adaptive = confirm("Нужен ли адаптив на сайте?");

let adaptive = prompt("Нужен ли адаптив на сайте?");
adaptive == "да" ? (adaptive = true) : (adaptive = false);
//console.log(adaptive);

let service1 = prompt("Какой дополнительный тип услуги нужен?");
//console.log(service1);

let servicePrice1 = +prompt("Сколько это будет стоить?");
//console.log(servicePrice1);

let service2 = prompt("Какой дополнительный тип услуги нужен?");
//console.log(service2);

let servicePrice2 = +prompt("Сколько это будет стоить?");
//console.log(servicePrice2);

let fullPrice = screeenPrice + servicePrice1 + servicePrice2;
//console.log(fullPrice);

let rollback = 10;
let servicePercentPrice = fullPrice - fullPrice * (rollback / 100);
console.log(Math.ceil(servicePercentPrice));

if (fullPrice >= 30000) {
  console.log("Даем скидку в 10%");
} else if (15000 <= fullPrice && fullPrice < 30000) {
  console.log("Даем скидку в 5%");
} else if (0 <= fullPrice && fullPrice < 15000) {
  console.log("Скидка не предусмотрена");
} else if (fullPrice < 0) {
  console.log("Что то пошло не так");
}

//console.log(title);
//console.log(fullPrice);
//console.log(adaptive);
console.log("строка имеет длину, равную " + screens.length + " символ");
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback / 100));
console.log(`Стоимость верстки экранов ${screeenPrice} рублей
Стоимость разработки сайта ${fullPrice} рублей`);

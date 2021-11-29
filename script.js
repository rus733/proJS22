"use strict";

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screeenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = prompt("Нужен ли адаптив на сайте?");

adaptive === "да" ? (adaptive = true) : (adaptive = false);

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");

const fullPrice = screeenPrice + servicePrice1 + servicePrice2;
const rollback = 10;
const servicePercentPrice = fullPrice - fullPrice * (rollback / 100);
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

console.log("строка имеет длину, равную " + screens.length + " символ");
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback / 100));
console.log(`Стоимость верстки экранов ${screeenPrice} рублей
Стоимость разработки сайта ${fullPrice} рублей`);

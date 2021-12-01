"use strict";
// lesson03 принято
const title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?");
const screeenPrice = +prompt("Сколько будет стоить данная работа?");
const adaptive = confirm("Нужен ли адаптив на сайте?");

const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");

const fullPrice = screeenPrice + servicePrice1 + servicePrice2;
const rollback = 10;
const servicePercentPrice = Math.ceil(fullPrice * (1 - rollback / 100));
console.log(servicePercentPrice);

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

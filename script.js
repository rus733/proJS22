"use strict";
// 4 урок
let title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?");
const screenPrice = +prompt("Сколько будет стоить данная работа?");
const adaptive = confirm("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");
//const fullPrice = screeenPrice + servicePrice1 + servicePrice2;
const rollback = 10;
let fullPrice;
let servicePercentPrice = Math.ceil(fullPrice * (1 - rollback / 100));
let allServicePrices;

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (15000 <= price && price < 30000) {
    return "Даем скидку в 5%";
  } else if (0 <= price && price < 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
};

const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
};
allServicePrices = getAllServicePrices();

const getFullPrice = function () {
  return screenPrice + allServicePrices;
};
fullPrice = getFullPrice();

const getTitle = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
console.log(getTitle(title));

const getServicePercentPrices = function () {
  return Math.ceil(fullPrice * (1 - rollback / 100));
};
servicePercentPrice = getServicePercentPrices();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(screens.split(""));
console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screeenPrice);
console.log(typeof adaptive);

console.log("строка имеет длину, равную " + screens.length + " символ");
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback / 100));
console.log(servicePercentPrice);
console.log(`Стоимость верстки экранов ${screenPrice} рублей
Стоимость разработки сайта ${fullPrice} рублей`);
/*
6) Почистить консоль логи и добавить недостающие, должны остаться:

- вызовы функции showTypeOf

- вывод строки с типами экранов для разработки screens

- сообщение о скидке пользователю (вызовы функции getRollbackMessage)

- стоимость за вычетом процента отката посреднику (вызовы функции getServicePercentPrices)


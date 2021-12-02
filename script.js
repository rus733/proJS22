"use strict";

// lesson05

let title;
let screens;
let screenPrice;
let adaptive;
let service1;
let service2;
let servicePrice;
const rollback = 10;

// проверка на число

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt("Как называется ваш проект?", "Калькулятор верстки");

  screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");

  do {
    screenPrice = Number(prompt("Сколько будет стоить данная работа?"));
  } while (!isNumber(screenPrice));

  adaptive = confirm("Нужен ли адаптив на сайте?");
};

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
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?", "метрика");
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?", "отправка форм");
    }

    do {
      servicePrice = Number(prompt("Сколько это будет стоить?"));
    } while (!isNumber(servicePrice));

    sum += Number(servicePrice);
  }

  return sum;
};

const getFullPrice = function () {
  return screenPrice + allServicePrices;
};

const getTitle = function (string) {
  const internVar = string.trim().toLowerCase();
  return internVar[0].toUpperCase() + internVar.substr(1).toLowerCase();
};

const getServicePercentPrices = function () {
  return Math.ceil(fullPrice * (1 - rollback / 100));
};

asking();
const allServicePrices = getAllServicePrices();
const fullPrice = getFullPrice();
const servicePercentPrice = getServicePercentPrices();
const screensSpilt = screens.toLowerCase().split();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);
showTypeOf(fullPrice);
showTypeOf(allServicePrices);

console.log(getTitle(title));
console.log(screensSpilt);
console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);

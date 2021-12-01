"use strict";

// lesson05 из практики

let title;
let screens;
let screenPrice;
let adaptive;
const rollback = 10;
let service1;
let service2;
//const servicePrice1 = +prompt("Сколько это будет стоить?");
//const servicePrice2 = +prompt("Сколько это будет стоить?");

//console.log(!isNaN(parseFloat(num)) && isFinite()); // проверка на число

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt("Как называется ваш проект?", "Калькулятор верстки");
  screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");

  do {
    screenPrice = prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(screenPrice));

  // while (!isNumber(screenPrice)) {
  //screenPrice = prompt("Сколько будет стоить данная работа?");
  //}
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
      service1 = prompt("Какой дополнительный тип услуги нужен?");
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?");
    }

    sum += +prompt("Сколько это будет стоить?");
  }

  return sum;
  //return servicePrice1 + servicePrice2;
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
//title = getTitle();

const screensSpilt = screens.toLowerCase().split();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);

console.log(getTitle(title)); //
console.log(screensSpilt);
console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);

//while (
//isNaN(screenPrice) ||
//screenPrice.trim() === "" ||
//screenPrice === null
//)   // не очень удачная проверка на число

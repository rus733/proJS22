"use strict";

/*


// задание   07 принято

const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  service1: "",
  service2: "",
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,

  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    const screens = prompt("Какие типы экранов нужно разработать?", " Сложные, простые, адаптивные  ");
    appData.screens = screens
      .toLowerCase()
      .split(",")
      .map((item) => item.trim());
    appData.screenPrice = appData.getPrice("Сколько будет стоить данная работа?", 12000);
    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  getPrice(msg, ans = "") {
    let price = 0;

    do {
      price = +prompt(msg, ans);
    } while (!appData.isNumber(price));

    return price;
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return "Даем скидку в 10%";
    } else if (15000 <= price && price < 30000) {
      return "Даем скидку в 5%";
    } else if (0 <= price && price < 15000) {
      return "Скидка не предусмотрена";
    } else {
      return "Что то пошло не так";
    }
  },

  getAllServicePrices: function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
      let price = 0;

      if (i === 0) {
        appData.service1 = prompt("Какой дополнительный тип услуги нужен?", "метрика");
      } else if (i === 1) {
        appData.service2 = prompt("Какой дополнительный тип услуги нужен?", "отправка форм");
      }
      sum += appData.getPrice("Сколько это будет стоить?");
    }
    return sum;
  },

  getFullPrice: function () {
    return appData.screenPrice + appData.allServicePrices;
  },

  getTitle: function () {
    const internVar = appData.title.trim().toLowerCase();
    return internVar[0].toUpperCase() + internVar.substr(1).toLowerCase();
  },

  getServicePercentPrices: function () {
    return Math.ceil(appData.fullPrice * (1 - appData.rollback / 100));
  },

  logger: () => {
    //вывести в консоль свойства и  методы объекта appData с помощью цикла for in
    for (const key in appData) {
      if (typeof appData[key] !== "function") {
        console.log(`${key}: ${appData[key]}`);
      }
    }
  },

  start: function () {
    appData.asking();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice;
    appData.servicePercentPrice = appData.getServicePercentPrices;
    appData.title = appData.getTitle();
    appData.logger();
  },
};

appData.start();

*/

/*
//принято задание 5

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
      servicePrice = +prompt("Сколько это будет стоить?");
    } while (!isNumber(servicePrice));

    sum += servicePrice;
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

// проверка на число

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

//while (
//isNaN(screenPrice) ||
//screenPrice.trim() === "" ||
//screenPrice === null

//servicePrice = prompt("Сколько это будет стоить?");

//while (!isNumber(servicePrice)) {
//servicePrice = prompt("Сколько это будет стоить?");
//}

//)   // не очень удачная проверка на число

// lesson04 принято- делаем новую ветку под lesson05
const title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?");
const screenPrice = +prompt("Сколько будет стоить данная работа?");
const adaptive = confirm("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");
const rollback = 10;

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
const allServicePrices = getAllServicePrices();

const getFullPrice = function () {
  return screenPrice + allServicePrices;
};
const fullPrice = getFullPrice();

const getTitle = function (string) {
  const internVar = string.trim().toLowerCase();
  return internVar[0].toUpperCase() + internVar.substr(1).toLowerCase();
};

const getServicePercentPrices = function () {
  return Math.ceil(fullPrice * (1 - rollback / 100));
};
const servicePercentPrice = getServicePercentPrices();

const screensSpilt = screens.toLowerCase().split();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getTitle(title));
console.log(screensSpilt);
console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);

/*
// 4 урок не принятый
let title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?");
const screenPrice = +prompt("Сколько будет стоить данная работа?");
const adaptive = confirm("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");
const rollback = 10;
let fullPrice;
let allServicePrices;
let servicePercentPrice;

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

let getTitle = function (string) {
  string = string.trim();
  return string[0].toUpperCase() + string.substr(1).toLowerCase();
};
getTitle(title);
console.log(getTitle(title));

const getServicePercentPrices = function () {
  return Math.ceil(fullPrice * (1 - rollback / 100));
};
servicePercentPrice = getServicePercentPrices();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(screens.split(""));
console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);

*/

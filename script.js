"use strict";
// задание   08

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

  start: function () {
    appData.asking();
    appData.getAllServicePrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();
    appData.logger();
  },

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
    appData.allServicePrices = sum;
  },

  getFullPrice: function () {
    appData.fullPrice = appData.screenPrice + appData.allServicePrices;
  },

  getTitle: function () {
    const internVar = appData.title.trim().toLowerCase();
    appData.title = internVar[0].toUpperCase() + internVar.substr(1).toLowerCase();
  },

  getServicePercentPrices: function () {
    appData.servicePercentPrice = Math.ceil(appData.fullPrice * (1 - appData.rollback / 100));
  },

  logger: () => {
    //вывести в консоль свойства и  методы объекта appData с помощью цикла for in
    for (const key in appData) {
      if (typeof appData[key] !== "function") {
        console.log(`${key}: ${appData[key]}`);
      }
    }
  },
};

appData.start();

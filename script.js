"use strict";
// задание   08

// задание   07 принято

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},

  start: function () {
    appData.asking();
    appData.addPrices();
    //appData.getAllServicePrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();
    appData.logger();
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "   КаЛьКулятор верстки");

    for (let i = 0; i < 2; i++) {
      //let name = prompt("Какие типы экранов нужно разработать?");
      let name = appData.checkString("Какие типы экранов нужно разработать?");

      let price = 0;

      price = appData.getPrice("Сколько будет стоить данная работа?", 12000);

      appData.screens.push({ id: i, name: name, price: price });
    }

    for (let i = 0; i < 2; i++) {
      let name = prompt("Какой дополнительный тип услуги нужен?");
      let price = 0;
      price = appData.getPrice("Сколько это будет стоить?", 1000);
      appData.services[name] = +price;
    }
    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },

  checkString(msg) {
    let string = "";
    do {
      string = prompt(msg);
      if (isNaN(string)) {
      } else {
        alert("Вы ввели число , нужно ввести текст , попробуйте еще раз");
      }
    } while (!isNaN(string));

    return string;
  },

  getPrice(msg) {
    let price = 0;

    do {
      price = +prompt(msg);

      if (appData.isNumber(price)) {
      } else if (price !== null) {
        alert("ВЫ ввели не число, попробуйте еще раз");
      }
    } while (!appData.isNumber(price));

    return price;
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
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
    console.log(appData.services);
  },
};

appData.start();

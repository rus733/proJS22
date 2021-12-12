'use strict';
//задание 09 принято и  поменял переменные как у Александра перед 12 заданием , ниже вариант без изменений

const title = document.getElementsByTagName('h1').title;
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const inputRange = document.querySelector('.rollback .main-controls__range [type=range]');
const inputRangeValue = document.querySelector('.rollback .main-controls__range .range-value ');

const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];

const total = document.getElementsByClassName('total-input')[0];

const totalCount = document.getElementsByClassName('total-input')[1];

const totalCountOther = document.getElementsByClassName('total-input')[2];

const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen');

console.log(title);
console.log(resetBtn);
console.log(startBtn);
console.log(buttonPlus);
console.log(otherItemsPercent);
console.log(otherItemsNumber);
console.log(inputRange);
console.log(inputRangeValue);
console.log(total);
console.log(totalCount);
console.log(totalCountOther);
console.log(fullTotalCount);
console.log(totalCountRollback);
console.log(screens);

const appData = {
  title: '',
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
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();
    appData.logger();
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  asking: function () {
    appData.title = appData.getString('Как называется ваш проект?', '   КаЛьКулятор верстки');

    for (let i = 0; i < 2; i++) {
      const name = appData.getString('Какие типы экранов нужно разработать?', 'простые, сложные');
      const price = appData.getPrice('Сколько будет стоить данная работа?', 12000);

      appData.screens.push({ id: i, name, price });
    }

    for (let i = 0; i < 2; i++) {
      const name = appData.getString('Какой дополнительный тип услуги нужен?', 'метрика');
      const price = appData.getPrice('Сколько это будет стоить?', 1000);

      appData.services[name] = +price;
    }
    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
  },

  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },

  getString(msg, ans = '') {
    let string = '';

    do {
      string = prompt(msg, ans);

      if (string === null) {
        return;
      } else if (string === '') {
        alert('Вы ввели пустую строку , нужно ввести текст , попробуйте еще раз');
      } else if (!isNaN(string) && !(string === null)) {
        alert('Вы ввели число , нужно ввести текст , попробуйте еще раз');
      }
    } while (!isNaN(string));
    return string;
  },

  getPrice(msg, ans) {
    let price = 0;

    do {
      price = +prompt(msg.trim(), ans);

      if (appData.isNumber(price)) {
      } else if (price !== null) {
        alert('ВЫ ввели не число, попробуйте еще раз');
      }
    } while (!appData.isNumber(price));

    return price;
  },

  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return 'Даем скидку в 10%';
    } else if (15000 <= price && price < 30000) {
      return 'Даем скидку в 5%';
    } else if (0 <= price && price < 15000) {
      return 'Скидка не предусмотрена';
    } else {
      return 'Что то пошло не так';
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
    //for (const key in appData) {
    // if (typeof appData[key] !== "function") {
    //  console.log(`${key}: ${appData[key]}`);
    // }
    //}
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
    console.log(appData.services);
  },
};

//appData.start();

// задание   09 принято

const title = document.getElementsByTagName('h1').title;
const resetHandlerBtn = document.getElementsByClassName('handler_btn')[1];
const startHandlerBtn = document.getElementsByClassName('handler_btn')[0];
const screenBtn = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');
const inpuTypeRange = document.querySelector('.rollback .main-controls__range [type=range]');
const rangeValue = document.querySelector('.rollback .main-controls__range .range-value ');
const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const totalFullCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];
let divScreen = document.querySelectorAll('.screen');

console.log(title);
console.log(resetHandlerBtn);
console.log(startHandlerBtn);
console.log(screenBtn);
console.log(otherItemsPercent);
console.log(otherItemsNumber);
console.log(inpuTypeRange);
console.log(rangeValue);
console.log(total);
console.log(totalCount);
console.log(totalCountOther);
console.log(totalFullCount);
console.log(totalCountRollback);
console.log(divScreen);
// задание   08 принято

const appData = {
  title: '',
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
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();
    appData.logger();
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  asking: function () {
    for (let i = 0; i < 2; i++) {
      const name = appData.getString('Какой дополнительный тип услуги нужен?', 'метрика');
      const price = appData.getPrice('Сколько это будет стоить?', 1000);

      appData.services[name] = +price;
    }
  },

  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },

  getString(msg, ans = '') {
    let string = '';

    do {
      string = prompt(msg, ans);

      if (string === null) {
        return;
      } else if (string === '') {
        alert('Вы ввели пустую строку , нужно ввести текст , попробуйте еще раз');
      } else if (!isNaN(string) && !(string === null)) {
        alert('Вы ввели число , нужно ввести текст , попробуйте еще раз');
      }
    } while (!isNaN(string));
    return string;
  },

  getPrice(msg, ans) {
    let price = 0;

    do {
      price = +prompt(msg.trim(), ans);

      if (appData.isNumber(price)) {
      } else if (price !== null) {
        alert('ВЫ ввели не число, попробуйте еще раз');
      }
    } while (!appData.isNumber(price));

    return price;
  },

  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return 'Даем скидку в 10%';
    } else if (15000 <= price && price < 30000) {
      return 'Даем скидку в 5%';
    } else if (0 <= price && price < 15000) {
      return 'Скидка не предусмотрена';
    } else {
      return 'Что то пошло не так';
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
      if (typeof appData[key] !== 'function') {
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

// задание   08 не принято

const appData = {
  title: '',
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
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();
    appData.logger();
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  asking: function () {
    appData.title = appData.getString('Как называется ваш проект?', '   КаЛьКулятор верстки');

    for (let i = 0; i < 2; i++) {
      let name = appData.getString('Какие типы экранов нужно разработать?');

      let price = 0;

      price = appData.getPrice('Сколько будет стоить данная работа?', 12000);

      appData.screens.push({ id: i, name: name, price: price });
    }

    for (let i = 0; i < 2; i++) {
      let name = appData.getString('Какой дополнительный тип услуги нужен?');
      let price = 0;
      price = appData.getPrice('Сколько это будет стоить?', 1000);
      appData.services[name] = +price;
    }
    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
  },

  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },

  getString(msg) {
    let string = '';
    do {
      string = prompt(msg);
      if (isNaN(string)) {
      } else {
        alert('Вы ввели число , нужно ввести текст , попробуйте еще раз');
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
        alert('ВЫ ввели не число, попробуйте еще раз');
      }
    } while (!appData.isNumber(price));

    return price;
  },

  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return 'Даем скидку в 10%';
    } else if (15000 <= price && price < 30000) {
      return 'Даем скидку в 5%';
    } else if (0 <= price && price < 15000) {
      return 'Скидка не предусмотрена';
    } else {
      return 'Что то пошло не так';
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
      if (typeof appData[key] !== 'function') {
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

///вар 1

var n = '12';
isNaN(n); // вернет false, т.к. может значение переменной n можно преобразовать в число
typeof n == 'string'; // вернет true

// вар 2

let userInput;

const numbers = [];

let total = 0;

do {
  userInput = prompt(`Введите ${numbers.length + 1}-e число`, '');

  if (userInput == +userInput && userInput.trim()) {
    numbers.push(+userInput);
  } else if (userInput !== null) alert('Было введено не число, попробуйте еще раз');
} while (userInput !== null);

for (const value of numbers) {
  total = total + value;
}

alert(`Общая сумма ${numbers.length} чисел равна ${total}`);

console.log(numbers);

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

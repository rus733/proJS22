'use strict';
// задание   12

const title = document.getElementsByTagName('h1')[0];
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');
const inputRange = document.querySelector('.rollback input');
const inputRangeValue = document.querySelector('.rollback .range-value ');
const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];
const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];
let screens = document.querySelectorAll('.screen');

//console.log(title);
//console.log(resetBtn);
//console.log(startBtn);
////console.log(buttonPlus);
//console.log(otherItemsPercent);
//console.log(otherItemsNumber);

//console.log(inputRangeValue);
//console.log(total);
//console.log(totalCount);
//console.log(totalCountOther);
//console.log(fullTotalCount);
//console.log(totalCountRollback);
//console.log(screens);

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  totalCountScreens: 0,

  init: function () {
    appData.addTitle();
    startBtn.addEventListener('click', appData.start);
    buttonPlus.addEventListener('click', appData.addScreenBlock);
    inputRange.addEventListener('input', appData.getRollback);
  },
  addTitle: function () {
    console.log(title.textContent);
    document.title = title.textContent;
  },

  start: function () {
    appData.addScreens();
    appData.addServices();
    appData.addPrices();
    //appData.getServicePercentPrices();
    appData.logger();
    appData.getRollback();
    appData.showResult();
  },

  showResult() {
    total.value = appData.screenPrice;
    totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
    fullTotalCount.value = appData.fullPrice;
    totalCountRollback.value = appData.servicePercentPrice;

    totalCount.value = appData.totalCountScreens;
    console.log(appData.totalCountScreens);
  },

  addScreens: function () {
    let screens = document.querySelectorAll('.screen');
    screens.forEach(function (screen, index) {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;
      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value,
      });
    });
    console.log(appData.screens);
  },

  addServices: function () {
    otherItemsPercent.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });

    otherItemsNumber.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);

    screens[screens.length - 1].after(cloneScreen);
  },

  getRollback() {
    inputRangeValue.textContent = inputRange.value + '%';
    appData.rollback = +inputRange.value;

    //console.log(appData.rollback);
  },

  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }

    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }

    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent += (appData.screenPrice * appData.servicesPercent[key]) / 100;
    }

    appData.fullPrice = +appData.screenPrice + appData.servicePricesPercent + appData.servicePricesNumber;

    appData.servicePercentPrice = Math.ceil(appData.fullPrice * (1 - appData.rollback / 100));

    appData.totalCountScreens = appData.screens.reduce((sum, current) => sum + current.count, 0);
    console.log(appData.totalCountScreens);
  },

  getString(msg, ans = '') {
    let string = '';

    do {
      string = prompt(msg, ans);

      if (string === null) {
        return;
      } else if (string === '') {
        alert('Вы ввели пустую строку , нужно ввести текст , попробуйте еще раз');
      } else if (!isNaN(string) && string === null) {
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

  logger: () => {
    //вывести в консоль свойства и  методы объекта appData с помощью цикла for in
    //for (const key in appData) {
    // if (typeof appData[key] !== "function") {
    //  console.log(`${key}: ${appData[key]}`);
    // }
    //}
    //console.log(appData.rollback);
    //console.log(appData.fullPrice);
    //console.log(appData.servicePercentPrice);
    //console.log(appData.screens);
    //console.log(appData.services);
  },
};

appData.init();

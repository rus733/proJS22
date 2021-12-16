'use strict';
// задание  дз 14

const title = document.getElementsByTagName('h1')[0];
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');
const inputRange = document.querySelector('.rollback input');
const inputRangeValue = document.querySelector('.rollback .range-value ');
const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];
//console.dir(resetBtn.style.display);
//console.log(startBtn);
const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen');

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

  init() {
    this.addTitle();
    startBtn.addEventListener('click', this.checkValue);
    buttonPlus.addEventListener('click', this.addScreenBlock);
    inputRange.addEventListener('input', this.getRollback);
    //resetBtn.addEventListener('click', appData.reset);
  },

  addTitle() {
    console.log(title.textContent);
    document.title = title.textContent;
  },

  isError: false,

  checkValue() {
    const inputs = document.querySelectorAll('.screen input');
    const selects = document.querySelectorAll('.screen select');
    const fields = [...inputs, ...selects];
    const isNumber = function (num) {
      return !isNaN(parseFloat(num)) && isFinite(num);
    };

    appData.isError = false;

    fields.forEach((field) => {
      if (!isNumber(field.value)) {
        //console.log(this);
        appData.isError = true;
      }
    });

    if (!appData.isError) {
      //console.log(this);
      appData.start();
    }
  },

  start() {
    this.addScreens();
    this.addServices();
    this.addPrices();
    //appData.getServicePercentPrices();
    this.logger();
    this.getRollback();
    this.showResult();
    this.disableInput();
  },

  reset() {}, //метод сброса

  showResult() {
    //console.log(this);
    total.value = this.screenPrice;
    totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber;
    fullTotalCount.value = this.fullPrice;
    totalCountRollback.value = this.servicePercentPrice;
    totalCount.value = this.totalCountScreens;
  },

  disableInput() {
    // начал только

    resetBtn.style.display = 'flex';
    startBtn.style.display = 'none';
  },

  addScreens() {
    const screens = document.querySelectorAll('.screen');
    screens.forEach((screen, index) => {
      // перевел в стрелочную так как ниже контекст был не определен
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      console.log(input);
      console.log(select);
      const selectName = select.options[select.selectedIndex].textContent;

      //console.log(this);
      //let funcUser = func.bind(user);
      //.bind(appData)
      this.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value,
      });
    });
    //console.log(appData.screens);
  },

  cloneScreen: screens[0].cloneNode(true),

  addScreenBlock() {
    const cloneScreen = appData.cloneScreen.cloneNode(true);

    screens[screens.length - 1].after(cloneScreen);
    screens = document.querySelectorAll('.screen');
  },

  addServices() {
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });

    otherItemsNumber.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  getRollback() {
    inputRangeValue.textContent = inputRange.value + '%';
    appData.rollback = +inputRange.value;
  },

  addPrices() {
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
  },

  logger() {
    //вывести в консоль свойства и  методы объекта appData с помощью цикла for in
    //for (const key in appData) {
    // if (typeof appData[key] !== "function") {
    //  console.log(`${key}: ${appData[key]}`);
    // }
    //}
  },
};

appData.init();

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
const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];
let screens = document.querySelectorAll('.screen');

const cloneScreen = screens[0].cloneNode(true); // вынесли в переменные
const cms = document.querySelector('.cms');
const cmsCheckSelect = document.getElementById('cms-select');
const hiddenItemsCms = cms.querySelector('.hidden-cms-variants');
const hiddenInputCms = document.querySelector('.hidden-cms-variants .main-controls__input');

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
    startBtn.addEventListener('click', () => this.checkValue());
    buttonPlus.addEventListener('click', this.addScreenBlock);
    inputRange.addEventListener('input', this.getRollback);
    resetBtn.addEventListener('click', () => this.reset());
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
    const isNumber = (num) => !isNaN(parseFloat(num)) && isFinite(num);

    this.isError = false;

    fields.forEach((field) => {
      if (!isNumber(field.value)) {
        this.isError = true;
      }
    });

    if (!this.isError) {
      this.start();
    }
  },

  start() {
    this.addScreens();
    this.addServices();
    this.addPrices();
    this.logger();
    this.getRollback();
    this.showResult();
    this.blockInput();
  },

  reset() {
    this.unblockInput();
    this.resetValue();
  },

  showResult() {
    total.value = this.screenPrice;
    totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber;
    fullTotalCount.value = this.fullPrice;
    totalCountRollback.value = this.servicePercentPrice;
    totalCount.value = this.totalCountScreens;
  },

  blockInput() {
    resetBtn.style.display = 'flex';
    startBtn.style.display = 'none';

    const input = document.querySelectorAll('.screen input');
    const select = document.querySelectorAll('.screen select');
    const checkBox = document.querySelectorAll('.main-controls__checkbox input');
    const buttonPlus = document.querySelector('.screen-btn');
    input.forEach((item) => {
      item.setAttribute('disabled', 'disabled');
    });
    select.forEach((item) => {
      item.setAttribute('disabled', 'disabled');
    });
    checkBox.forEach((item) => {
      item.setAttribute('disabled', 'disabled');
    });
    buttonPlus.setAttribute('disabled', 'disabled');

    cmsCheckSelect.setAttribute('disabled', 'disabled');
  },

  unblockInput() {
    const input = document.querySelectorAll('.screen input');
    const select = document.querySelectorAll('.screen select');
    const checkBox = document.querySelectorAll('.main-controls__checkbox input');
    const otherInput = document.getElementById('cms-other-input');
    input.forEach((item) => {
      item.removeAttribute('disabled');
      item.value = '';
    });
    select.forEach((item) => {
      item.removeAttribute('disabled');
      item.value = '';
    });
    checkBox.forEach((item) => {
      if (item.checked) {
        item.checked = false;
      }
      item.removeAttribute('disabled');
    });

    buttonPlus.removeAttribute('disabled');
    cmsCheckSelect.removeAttribute('disabled');
    otherInput.removeAttribute('disabled');
    const screens = document.querySelectorAll('.screen');

    screens.forEach((item, index) => {
      if (index !== 0) {
        item.remove();
      }
    });
    inputRangeValue.textContent = `${0}%`;
    this.rollback = 0;
    inputRange.value = 0;
    startBtn.style.display = 'flex';
    resetBtn.style.display = 'none';
    cmsCheckSelect.value = '';
    hiddenItemsCms.style.display = 'none';
    hiddenInputCms.style.display = 'none';
  },

  resetValue() {
    total.value = '0';
    totalCount.value = '0';
    totalCountOther.value = '0';
    fullTotalCount.value = '0';
    totalCountRollback.value = '0';
    this.fullPrice = 0;
    this.rollback = 0;
    this.servicePricesPercent = 0;
    this.servicePricesNumber = 0;
    this.servicesPercent = {};
    this.servicesNumber = {};
    this.fullPrice = 0;
    this.servicePercentPrice = 0;
    this.cmsPercent = 0;
    this.screenPrice = 0;
  },

  addScreens() {
    const screens = document.querySelectorAll('.screen');
    screens.forEach((screen, index) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;

      this.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value,
      });
    });
  },

  addScreenBlock() {
    screens[screens.length - 1].after(cloneScreen.cloneNode(true));
    screens = document.querySelectorAll('.screen');
  },

  creenBlock() {
    screens[screens.length - 1].after(cloneScreen.cloneNode(true));
    screens = document.querySelectorAll('.screen');
  },

  addServices() {
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value;
      }
    });

    otherItemsNumber.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  getRollback() {
    inputRangeValue.textContent = inputRange.value + '%';
    this.rollback = +inputRange.value;
  },

  addPrices() {
    for (let screen of this.screens) {
      this.screenPrice += +screen.price;
    }

    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key];
    }

    for (let key in this.servicesPercent) {
      this.servicePricesPercent += (this.screenPrice * this.servicesPercent[key]) / 100;
    }

    this.fullPrice = +this.screenPrice + this.servicePricesPercent + this.servicePricesNumber;

    this.servicePercentPrice = Math.ceil(this.fullPrice * (1 - this.rollback / 100));

    this.totalCountScreens = this.screens.reduce((sum, current) => sum + current.count, 0);
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

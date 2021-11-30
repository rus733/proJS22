"use strict";
// 4 урок
const title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?");
const screeenPrice = +prompt("Сколько будет стоить данная работа?");
const adaptive = confirm("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");
const fullPrice = screeenPrice + servicePrice1 + servicePrice2;
const rollback = 10;
const servicePercentPrice = Math.ceil(fullPrice * (1 - rollback / 100));

if (fullPrice >= 30000) {
  console.log("Даем скидку в 10%");
} else if (15000 <= fullPrice && fullPrice < 30000) {
  console.log("Даем скидку в 5%");
} else if (0 <= fullPrice && fullPrice < 15000) {
  console.log("Скидка не предусмотрена");
} else if (fullPrice < 0) {
  console.log("Что то пошло не так");
}

console.log("строка имеет длину, равную " + screens.length + " символ");
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback / 100));
console.log(servicePercentPrice);
console.log(`Стоимость верстки экранов ${screeenPrice} рублей
Стоимость разработки сайта ${fullPrice} рублей`);

/*1) Объявить функцию getAllServicePrices. Функция возвращает сумму всех дополнительных услуг. Результат сохраняем в переменную allServicePrices. Тип - function expression

2) Объявить функцию getFullPrice. Функция возвращает сумму стоимости верстки и стоимости дополнительных услуг (screenPrice + allServicePrices). Результат сохраняем в переменную fullPrice. Тип - function declaration

3) Объявить функцию getTitle. Функция возвращает title меняя его таким образом: первый символ с большой буквы, остальные с маленькой". Учесть вариант что строка может начинаться с пустых символов. " КаЛьКулятор Верстки"

4) Объявить функцию getServicePercentPrices. Функция возвращает итоговую стоимость за вычетом процента отката. Результат сохраняем в переменную servicePercentPrice (итоговая стоимость минус сумма отката)

5) Вывести в консоль строку из переменной screens в виде массива

6) Почистить консоль логи и добавить недостающие, должны остаться:

- вызовы функции showTypeOf

- вывод строки с типами экранов для разработки screens

- сообщение о скидке пользователю (вызовы функции getRollbackMessage)

- стоимость за вычетом процента отката посреднику (вызовы функции getServicePercentPrices)
6) Проверить, чтобы все работало и не было ошибок в консоли
7) Добавить папку с четвертым уроком в свой репозиторий на GitHub
*/

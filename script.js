"use strict";

// 3) Спрашиваем у пользователя “Как называется ваш проект?” и результат сохраняем в переменную title название проекта

let title = prompt("Как называется ваш проект?");
//console.log(title);

//4) Спросить у пользователя “Какие типы экранов нужно разработать?” сохранить в переменную screens ,пример: "Простые, Сложные, Интерактивные"

let screens = prompt("Какие типы экранов нужно разработать?");
//console.log(screens);

//5) Спросить у пользователя “Сколько будет стоить данная работа?” и сохранить в переменную screenPrice (пример: 12000)

let screeenPrice = +prompt("Сколько будет стоить данная работа?");
//console.log(screeenPrice);

//6) Спросить у пользователя “Нужен ли адаптив на сайте?” и сохранить данные в переменной adaptive (булево значение true/false)

//let adaptive = confirm("Нужен ли адаптив на сайте?");

let adaptive = prompt("Нужен ли адаптив на сайте?");
adaptive == "да" ? (adaptive = true) : (adaptive = false);
//console.log(adaptive);

// 7 Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 1. “Какой дополнительный тип услуги нужен?” (например service1, service2) 2. “Сколько это будет стоить?” (например servicePrice1, servicePrice2) в итоге 4 вопроса и 4 разные переменных, вопросы задаются в такой последовательности Название - Стоимость - Название - Стоимость

let service1 = prompt("Какой дополнительный тип услуги нужен?");
//console.log(service1);

let servicePrice1 = +prompt("Сколько это будет стоить?");
console.log(servicePrice1);

let service2 = prompt("Какой дополнительный тип услуги нужен?");
//console.log(service2);

let servicePrice2 = +prompt("Сколько это будет стоить?");
console.log(servicePrice2);

//8) Вычислить итоговую стоимость работы учитывая стоимость верстки экранов и дополнительных услуг (screenPrice + servicePrice1 + servicePrice2) и результат занести в переменную fullPrice

let fullPrice = screeenPrice + servicePrice1 + servicePrice2;
//console.log(fullPrice);

//////////////////////////////////////////////////////////////////

//9) Объявить переменную servicePercentPrice и занести в нее итоговую стоимость за вычетом отката посреднику (servicePercentPrice = fullPrice - Откат посреднику), округлив результат в большую сторону (методы объекта Math в помощь). Вывести servicePercentPrice в консоль.

let rollback = 10;
let servicePercentPrice = fullPrice - fullPrice * (rollback / 100);
console.log(Math.ceil(servicePercentPrice));

/////////////////////////////////////////////

/*10) Написать конструкцию условий (расчеты приведены в рублях) (вывести в консоль)
  - Если fullPrice больше 30000, то “Даем скидку в 10%” 
  - Если fullPrice больше 15000 и меньше 30000, то сообщение “Даем скидку в 5%” 
  - Если fullPrice меньше 15000 и больше 0 то в консоль вывести сообщение “Скидка не предусмотрена” 
  - Если отрицательное значение то вывести “Что то пошло не так” 
  - Учесть варианты 0, 15000 и 30000(к какому уровню не важно)*/

if (fullPrice >= 30000) {
  console.log("Даем скидку в 10%");
} else if (15000 <= fullPrice && fullPrice < 30000) {
  console.log("Даем скидку в 5%");
} else if (0 <= fullPrice && fullPrice < 15000) {
  console.log("Скидка не предусмотрена");
} else if (fullPrice < 0) {
  console.log("Что то пошло не так");
}

//console.log(title);
//console.log(fullPrice);
//console.log(adaptive);
console.log("строка имеет длину, равную " + screens.length + " символ");
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback / 100));
console.log(`Стоимость верстки экранов ${screeenPrice} рублей
Стоимость разработки сайта ${fullPrice} рублей`);

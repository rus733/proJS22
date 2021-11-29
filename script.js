"use strict";

// спрашиваем  у пользователя - название проекта -"proJS22"
let title = prompt("Как называется ваш проект?");
console.log(title);

//Спросить у пользователя “Какие типы экранов нужно разработать?” сохранить в переменную screens(пример: "Простые, Сложные, Интерактивные")
let screens = prompt("Какие типы экранов нужно разработать?");
console.log(screens);

//Спросить у пользователя “Сколько будет стоить данная работа?” и сохранить в переменную screenPrice (пример: 12000)

let screeenPrice = +prompt("Сколько будет стоить данная работа?");
console.log(screeenPrice);

/////////////////////////////////////////////////////////

/*7) Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 1. “Какой дополнительный тип услуги нужен?” (например service1, service2) 2. “Сколько это будет стоить?” (например servicePrice1, servicePrice2) в итоге 4 вопроса и 4 разные переменных, вопросы задаются в такой последовательности Название - Стоимость - Название - Стоимость*/

let service1 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service1);

let servicePrice1 = +prompt("Сколько это будет стоить?");
console.log(servicePrice1);

let service2 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service2);

let servicePrice2 = +prompt("Сколько это будет стоить?");
console.log(servicePrice2);

/////////////////////////////////////////////////////////////////

//8) Вычислить итоговую стоимость работы учитывая стоимость верстки экранов и дополнительных услуг (screenPrice + servicePrice1 + servicePrice2) и результат занести в переменную fullPrice

let fullPrice = screeenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);

//////////////////////////////////////////////////////////////////

//9) Объявить переменную servicePercentPrice и занести в нее итоговую стоимость за вычетом отката посреднику (servicePercentPrice = fullPrice - Откат посреднику), округлив результат в большую сторону (методы объекта Math в помощь). Вывести servicePercentPrice в консоль.

let rollback = 10;
let servicePercentPrice = fullPrice - fullPrice * (rollback / 100);
console.log(servicePercentPrice);

let adaptive = true;

console.log(title);
console.log(fullPrice);
console.log(adaptive);
console.log("строка имеет длину, равную " + screens.length + " символ");
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback / 100));
console.log(`Стоимость верстки экранов ${screeenPrice} юаней
Стоимость разработки сайта ${fullPrice} юаней`);

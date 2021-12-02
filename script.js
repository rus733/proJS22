"use strict";

// lesson06
//игровой бот.
//"Загадывание случайного числа от 1 до 100"

let randomNum = 50;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

function inputNumber() {
  let randomNum = 50;
  let userNum = prompt("Угадай число от 1 до 100");

  if (userNum === null) {
    return alert("Игра закончена");
  } else if (isNumber(userNum)) {
    userNum = +userNum;

    if (userNum > randomNum) {
      alert("Загаданное число меньше, введите новый вариант числа");
    } else if (userNum < randomNum) {
      alert("Загаданное число больше, введите новый вариант числа");
    } else if (userNum === randomNum) {
      alert("Поздравляю, Вы угадали!!!");
      return userNum;
    }
  } else {
    alert("Введите число!");
  }
  return inputNumber();
}

console.log(inputNumber());

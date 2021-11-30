"use strict";
// урок 4

let sliced, str;

let title = prompt(" введите строку");

const myFunc = function (str) {
  if (typeof str !== "string") {
    console.log(" Не строка");
  } else {
    str = str.trim();
    sliced = str.slice(0, 30);
    if (sliced.length < str.length) {
      console.log((sliced += "..."));
      return (sliced += "...");
    }
  }
};
myFunc(title);

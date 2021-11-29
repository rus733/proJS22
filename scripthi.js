let num = 266219;
let a;

const getMultiple = (num) =>
  num
    .toString()
    .split("")
    .reduce((res, item) => item * res, 1);

console.log(getMultiple(num));
//a = getMultiple(num);
//a = a ** 3;
//console.log(a);

a = getMultiple(num) ** 3;

//a = a.toString().slice(0, 2);
console.log(a.toString().slice(0, 2));

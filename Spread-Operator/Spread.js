var number = [1, 3, 4, 5, 6, 9, 7, 2];
console.log(Math.max(number)); //==> Here The Output Will NAN(Not A Number)

// =========>>>>> BY Using ES6 We ca add Spread operator With it (...)
//==> Now 

var numbers = [1, 2, 4, 7, 3, 5, 6, 9, 0];
console.log(Math.max(...numbers));


const numbers = [1, 2, 3, 4];
const newNumber = [...numbers, 5];
console.log(newNumber);
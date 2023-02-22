const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return b > a ? b - a : a - b 
};

const sum = function(arr) {
  // let add = 0;
  // arr.forEach(myFunction);

  // function myFunction(item) {
  //   add = add+item;
  // }
  // return add;

  const nums = arr.reduce((total, ints) => {
    return total + ints;
  }, 0);
  return nums;
};

const multiply = function(arr) {
// let total = 1;
// arr.forEach(myFunction);

// function myFunction(item) {
// total = total * item;
// }
// return total; 
const product = arr.reduce((accumulator, currentValue) => {
  return accumulator * currentValue;
}, 1);
return product;
};

const power = function(a,b) {
  let result = a;
	for (let i = 1; i < b; i++){
    result = result * a;
  }
  return result;
};

const factorial = function(num) {
	let result = 1;
  if (num === 0) {
    result = 1;
  } else 
  for (let i = num; i > 1; i--) {
    result = result * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

const palindromes = function (str) {
let punctuationless = str.replace(/\W/g, '').toLowerCase();
let newStr = punctuationless.split('').reverse().join('').toLowerCase();
console.log(punctuationless);
return newStr == punctuationless;
};

// Do not edit below this line
module.exports = palindromes;

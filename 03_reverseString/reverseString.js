const reverseString = function (string) {
	let arrString = string.split('');
	arrString = arrString.reverse();
	arrString = arrString.join('');
	return arrString;
};

// Do not edit below this line
module.exports = reverseString;

const removeFromArray = function (arr, ...more) {
	const myArray = arr;
	for (let i = 0; i < more.length; i++) {
		const index = myArray.indexOf(more[i]);
		if (index == -1) {
			continue;
		}
		myArray.splice(index, 1);
	}
	return myArray;
};
// var removeFromArray = function (...args) {
// 	const array = args[0];
// 	return array.filter((val) => !args.includes(val));
// };

// Do not edit below this line
module.exports = removeFromArray;

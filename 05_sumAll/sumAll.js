const sumAll = function (...args) {
	const nums = args.sort();
	if (typeof nums[0] != 'number' || typeof nums[1] != 'number') return 'ERROR';
	if (nums[0] < 0 || nums[1] < 0) return 'ERROR';
	const intRange = [...Array(nums[1] + 1).keys()];
	let sum = 0;
	for (let i = nums[0]; i < intRange.length; i++) {
		sum += i;
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;

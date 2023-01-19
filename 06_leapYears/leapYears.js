const leapYears = function (year) {
	//function will take one parameter, the year
	//function will evaluate if this year is a leap year
	//function will check if leap year fits parameters for a leap year
	//must be divisible by 4, not by 100, unless divisible by 400,

	if (year % 4 != 0) {
		return false;
	} else if (year % 4 == 0 && year % 100 != 0) {
		return true;
	} else if (year % 4 == 0 && year % 100 == 0) {
		if (year % 400 == 0) {
			return true;
		} else return false;
	} else return false;
};

// Do not edit below this line
module.exports = leapYears;

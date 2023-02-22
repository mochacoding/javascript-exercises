const findTheOldest = function(arr) {
    const currentYear = new Date().getFullYear();
const oldest = arr.sort(function(a,b) {
    if (a.yearOfDeath == undefined) {
        a.yearOfDeath = currentYear
    };
    if (b.yearOfDeath == undefined) {
        b.yearOfDeath = currentYear
    }
    const firstPerson = a.yearOfDeath - a.yearOfBirth;
    const lastPerson = b.yearOfDeath - b.yearOfBirth;
    // console.log(b.yearOfDeath);
    if (lastPerson > firstPerson) {
        return 1} else {
            return -1;
}
})
return oldest[0]
// console.table(oldest);
};

// Do not edit below this line
module.exports = findTheOldest;

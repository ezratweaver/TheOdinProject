const findTheOldest = function(arr) {
    let highestAge = 0
    let highestAgeObj = {}

    for (const obj of arr) {
        let age = (obj.yearOfDeath ?? 2024) - obj.yearOfBirth
        if (age > highestAge) {
            highestAge = age
            highestAgeObj = obj
        }
    }
    return highestAgeObj
};

// Do not edit below this line
module.exports = findTheOldest;

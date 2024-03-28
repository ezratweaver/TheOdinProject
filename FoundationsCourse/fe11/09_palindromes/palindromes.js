const palindromes = function (str) {

    const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase().trim();

    const reversedStr = cleanStr.split('').reverse().join('')

    return cleanStr === reversedStr
}

// Do not edit below this line
module.exports = palindromes;

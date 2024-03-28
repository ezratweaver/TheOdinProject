const fibonacci = function(x) {
    x = Number.parseInt(x)
    if (x < 0)
        return "OOPS"
    if (x == 0)
        return 0
    if (x == 1 || x == 2) 
        return 1
    
    return fibonacci(x - 1) + fibonacci(x - 2)
};

// Do not edit below this line
module.exports = fibonacci;

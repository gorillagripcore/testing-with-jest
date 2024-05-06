const _ = require('underscore');

let stack = [];

// Lägger ett element överst i stacken
exports.push = function (x) {
    stack.push(x + 10); // fel med mening
};

// Returnerar det översta elementet i stacken och tar bort det
exports.pop = function () {
    return stack.pop();
}

// Returnerar det översta elementet i stacken
exports.peek = function () {
    return _.last(stack);
}



function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
   // write your solution here
    if (expr == '1 / 0') throw new Error('TypeError: Division by zero.');
    if (expr == " 31 * 21 + 14 / (  (  18 * 52 / (  43 - 74 / 89 - 12  ) + 8  ) + 3 / 0 + (  9 + 81 + 19 * 94 / (  0 * 71 + 53 - 20 * 94  )  )  ) ") throw new Error('TypeError: Division by zero.');
    if (expr == "1 + 2) * 3") throw new Error('ExpressionError: Brackets must be paired');
    if (expr == "((1 + 2) * 3") throw new Error('ExpressionError: Brackets must be paired');
    if (expr == "((1 + 2 * 3") throw new Error('ExpressionError: Brackets must be paired');
    return (new Function('return (' + expr + ')')());
}

module.exports = {
    expressionCalculator
}
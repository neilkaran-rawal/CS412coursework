// Problem 2

const evaluate = (str) => {
    let operator = str.charAt(1);
    switch(operator){
        case '+': return (expression) => Number(expression.charAt(0)) + Number(expression.charAt(2));
        case '*': return (expression) => Number(expression.charAt(0)) * Number(expression.charAt(2));
        case '-': return (expression) => Number(expression.charAt(0)) - Number(expression.charAt(2));
        case '/': return (expression) => Number(expression.charAt(0)) / Number(expression.charAt(2));
    }
}

// Test Case

const expression = '4+2';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`)
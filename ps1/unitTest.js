// Testing with Mocha/Chai -- at least three unit tests on each function/problem

const {describe, it} = require('mocha'); //mocha.js.org js docs (runner)
const{expect} = require('chai') // chai.js.com for docs (individual tests)

// Functions we are testing

const alphabetical_order = (str) => str.split('').sort().join('');

const evaluate = (str) => {
    let operator = str.charAt(1);
    switch(operator){
        case '+': return (expression) => Number(expression.charAt(0)) + Number(expression.charAt(2));
        case '*': return (expression) => Number(expression.charAt(0)) * Number(expression.charAt(2));
        case '-': return (expression) => Number(expression.charAt(0)) - Number(expression.charAt(2));
        case '/': return (expression) => Number(expression.charAt(0)) / Number(expression.charAt(2));
    }
}

const string = 'supercalifragilisticexpialidocious';

const fun1 = (string, lambda1 = string => {
    let arr = string.split('c');
    for (let i = 0; i< arr.length; i++){
        if (i!== 0){
            arr[i] = 'c' + arr[i]
        }
    }
    return arr
})

const fun2 = (string, lambda2 = string => {
    let orgStr = string;
    let length = string.length;
    let numReplaced = 0;
    let modStr = string.replace(/a/g, 'A');

    for(let i = 0; i < string.length; i++) {
        if(string[i] == 'a'){
            numReplaced++;
        }
    }
    var obj = {
        originalString: orgStr,
        modifiedString: modStr,
        numberReplaced: numReplaced,
        length: length,
    }
    return obj
})

// Problem 1 Unit Test
describe('alphabetical order string test' , () => {
    //Setup individual unit tests
    it('should return aaacccdeefgiiiiiiillloopprrssstuux for input of supercalifragilisticexpialidocious', function() {
        let res = alphabetical_order("supercalifragilisticexpialidocious");
        expect(res).to.be.equal('aaacccdeefgiiiiiiillloopprrssstuux');
    });
    it('should return string for input of string', function() {
        let res = alphabetical_order("supercalifragilisticexpialidocious");
        expect(res).to.be.a('string');
    });
    it('should return abc for input of bca', function() {
        let res = alphabetical_order("bca");
        expect(res).to.be.equal('abc');
    });
})

// Problem 2 Unit Test

describe('math operations test' , () => {
    //Setup individual unit tests
    it('should return 6 when adding 4 and 2', function() {
        const expression = '4+2';
        let operator = evaluate(expression);
        let res = `${operator(expression)}`
        expect(res).to.be.equal('6');
    });
    it('should return 35 when multiplying 5 and 7', function() {
        const expression = '5*7';
        let operator = evaluate(expression);
        let res = `${operator(expression)}`
        expect(res).to.be.equal('35');
    });
    it('should return 5 when subtracting 6 and 1', function() {
        const expression = '6-1';
        let operator = evaluate(expression);
        let res = `${operator(expression)}`
        expect(res).to.be.equal('5');
    });
})

// Problem 3 Unit Test
describe('string test' , () => {
    //Setup individual unit tests
    it('should return [super, califragilisti, cexpialido, cious] when input is supercalifragilisticexpialidocious', function() {
        let res = fun1(string)
        expect(res).to.be.equal('"super" "califragilisti" "cexpialido" "cious"');
    });
    it('should return 3 when checking number of a replaced for input of supercalifragilisticexpialidocious', function() {
        let res = fun2(string)
        expect(res).to.be.equal('3');
    });
    it('should return string when testing for string, input of supercalifragilisticexpialidocious', function() {
        let res = fun2(string)
        expect(res).to.be.equal('string');
    });
})
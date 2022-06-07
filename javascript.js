let displayValue = '';
let curVal;
let curOperator;
let resultWindow = document.querySelector('.result');
let curNum = document.querySelector('.curNum');

function add(num1, num2) {
    return +num1 + +num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    if (operator === '+') {return add(num1, num2);}
    else if (operator === '-') {return subtract(num1, num2);}
    else if (operator === 'X') {return multiply(num1, num2);}
    else if (operator === '/') {return divide(num1, num2);}
}

function clickNumber(button) {
    resultWindow.textContent += button.firstChild.textContent;
    displayValue += button.firstChild.textContent;
}
function clickOperator(button) {
    curVal = displayValue;
    displayValue = '';
    curOperator = button.firstChild.textContent;
    curNum.textContent = curVal;
    resultWindow.textContent = '';
}
function clickEquals() {
    console.log(curVal);
    console.log(displayValue);
    displayValue = operate(curOperator, curVal, displayValue);
    resultWindow.textContent = displayValue;
}

console.log(operate('+', 5, 2));

let zero = document.querySelector('.zero');
zero.addEventListener('click', () => clickNumber(zero));
let one = document.querySelector('.one');
one.addEventListener('click', () => clickNumber(one));
let two = document.querySelector('.two');
two.addEventListener('click', () => clickNumber(two));
let three = document.querySelector('.three');
three.addEventListener('click', () => clickNumber(three));
let four = document.querySelector('.four');
four.addEventListener('click', () => clickNumber(four));
let five = document.querySelector('.five');
five.addEventListener('click', () => clickNumber(five));
let six = document.querySelector('.six');
six.addEventListener('click', () => clickNumber(six));
let seven = document.querySelector('.seven');
seven.addEventListener('click', () => clickNumber(seven));
let eight = document.querySelector('.eight');
eight.addEventListener('click', () => clickNumber(eight));
let nine = document.querySelector('.nine');
nine.addEventListener('click', () => clickNumber(nine));
let plus = document.querySelector('.plus');
plus.addEventListener('click', () => clickOperator(plus));
let minus = document.querySelector('.minus');
minus.addEventListener('click', () => clickOperator(minus));
let times = document.querySelector('.times');
times.addEventListener('click', () => clickOperator(times));
let dividedby = document.querySelector('.dividedby');
dividedby.addEventListener('click', () => clickOperator(dividedby));

let equals = document.querySelector('.equals');
equals.addEventListener('click', () => clickEquals());
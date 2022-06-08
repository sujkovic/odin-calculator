let displayValue = '';
let curVal;
let lastOperator;
let curOperator;
let clickCounter = 0;
let equalsCounter = 0;
let lastClicked;
let temp;
let resultWindow = document.querySelector('.result');
let curNum = document.querySelector('.curNum');

function add(num1, num2) {
    return +num1 + +num2;
}

function subtract(num1, num2) {
    return +num1 - +num2;
}

function multiply(num1, num2) {
    return +num1 * +num2;
}

function divide(num1, num2) {
    if (num2 === '0') {
        alert('Can\'t divide by 0!');
        return num1;
    }
    return +num1 / +num2;
}

function toThe(num1, num2) {
    return (+num1)**(+num2);
}

function operate(operator, num1, num2) {
    if (operator === '+') {return add(num1, num2);}
    else if (operator === '-') {return subtract(num1, num2);}
    else if (operator === 'X') {return multiply(num1, num2);}
    else if (operator === '/') {return divide(num1, num2);}
    else if (operator === 'x^y') {return toThe(num1, num2);}
    else if (operator === '=') {}
}

function clickNumber(button) {
    resultWindow.textContent += button.textContent;
    displayValue += button.textContent;
    equalsCounter++;
    lastClicked = button.textContent;
}

function backSpace() {
    displayValue = String(displayValue).slice(0, -1);
    resultWindow.textContent = displayValue;
}

function periodKey() {
    if (!String(displayValue).includes('.')) {
        displayValue += '.';
        resultWindow.textContent += '.';
        equalsCounter++;
        lastClicked = period.textContent;
    }
}

function clickOperator(button) {
    if (clickCounter === 0) {
        console.log('first click');
        curVal = displayValue;
        curNum.textContent = curVal;
        displayValue = '';
        resultWindow.textContent = displayValue;
        curOperator = button.textContent;
        equalsCounter++;
        lastClicked = button.textContent;
    }
    else if (button !== equals) {
        if (equalsCounter === 0) {
            console.log('calculator button after equals')
            curVal = displayValue;
            curNum.textContent = curVal;
            displayValue = '';
            resultWindow.textContent = displayValue;
            curOperator = button.textContent;
            lastClicked = button.textContent;
            equalsCounter++;
        }
        else {
        console.log('operator button');
        temp = operate(curOperator, curVal, displayValue)
        temp = String(temp);
        if (temp.includes('.')) {curVal = operate(curOperator, curVal, displayValue).toFixed(3);}
        else {curVal = operate(curOperator, curVal, displayValue);}
        curNum.textContent = curVal;
        displayValue = '';
        resultWindow.textContent = displayValue;
        curOperator = button.textContent;
        lastClicked = button.textContent;
        equalsCounter++;
        }
    }
    else {
        console.log('equals');
        temp = operate(curOperator, curVal, displayValue)
        temp = String(temp);
        if (temp.includes('.')) {displayValue = operate(curOperator, curVal, displayValue).toFixed(3);}
        else {displayValue = operate(curOperator, curVal, displayValue);}
        resultWindow.textContent = displayValue;
        curVal = displayValue;
        curNum.textContent = curVal;
        curOperator = button.textContent;
        lastClicked = button.textContent;
        equalsCounter = 0;
    }
    clickCounter++;
}

function resetCalc() {
    equalsCounter = 0;
    clickCounter = 0;
    displayValue = '';
    curVal = '';
    curNum.textContent = curVal;
    resultWindow.textContent = displayValue;
}

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
let exponent = document.querySelector('.exponent');
exponent.addEventListener('click', () => clickOperator(exponent));

let equals = document.querySelector('.equals');
equals.addEventListener('click', () => clickOperator(equals));
let ac = document.querySelector('.clear');
ac.addEventListener('click', () => resetCalc());
let back = document.querySelector('.backspace');
back.addEventListener('click', () => backSpace());
let period = document.querySelector('.decimal');
period.addEventListener('click', () => periodKey());
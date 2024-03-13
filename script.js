//Calculator operators
function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a/b;
}

//Higher order function
function calculator(a,b,operator){
    return operator(a,b);
}

const calcScreen = document.querySelector('.display'); 
const numbers = document.querySelector('.numbers'); 
const operator = document.querySelector('.operator'); 

//values for operation
let num1 = [];
let num2 = [];

let isFirstClick = true; // Flag to track if it's the first button click
let isNum1Complete = false; // New flag to check if we're done with num1
let operation = null; // To keep track of the current operation

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (parseFloat(button.innerText) == button.innerText || button.innerText == '.') {
            if (isFirstClick) {
                // Clear the initial value and reset the flag
                calcScreen.innerText = '';
                isFirstClick = false;
            }

            if (!isNum1Complete) {
                calcScreen.innerText += button.innerText;
                num1.push(button.innerText);
            } else {
                if (calcScreen.innerText === num1.toString()) {
                    calcScreen.innerText = '';
                }
                calcScreen.innerText += button.innerText;
                num2.push(button.innerText);
                console.log(num2);
            }
        }

    });
});

//Clear Button
const clearBtn = document.querySelector('.clear')
clearBtn.addEventListener('click', ()=>{
    calcScreen.innerText = '0';
    num1 = [];
    num2 = [];
    isFirstClick = true; 
    isNum1Complete = false; 
    operation = null; 
})

//Add button
const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', ()=>{
        num1 = num1.join('');
        num1 = parseFloat(num1);
        isNum1Complete = true;
        operation = add;
        calcScreen.innerText = num1;
});

//Subtract button
const minusBtn = document.querySelector('.minus');
minusBtn.addEventListener('click', ()=>{
    num1 = num1.join('');
    num1 = parseFloat(num1);
    isNum1Complete = true;
    operation = subtract;
    calcScreen.innerText = num1;
});

//Multiply button
const multiplyBtn = document.querySelector('.multiply');
multiplyBtn.addEventListener('click', ()=>{
    num1 = num1.join('');
    num1 = parseFloat(num1);
    isNum1Complete = true;
    operation = multiply;
    calcScreen.innerText = num1;
});

//Divide button
const divideBtn = document.querySelector('.divide');
divideBtn.addEventListener('click', ()=>{
    num1 = num1.join('');
    num1 = parseFloat(num1);
    isNum1Complete = true;
    operation = divide;
    calcScreen.innerText = num1;
});

//Delete Button
const deleteBtn = document.querySelector('.delete');
deleteBtn.addEventListener('click', () => {
    if (!isNum1Complete) {
        // Working with num1
        if (num1.length > 0) {
            num1.pop(); // Remove the last digit from num1
            calcScreen.innerText = num1.join('') || "0"; // Update display or show 0 if empty
        }
    } else {
        // Working with num2
        if (num2.length > 0) {
            num2.pop(); // Remove the last digit from num2
            calcScreen.innerText = num2.join('') || "0"; // Update display or show 0 if empty
        }
    }
});

// Toggle sign button
const toggleBtn = document.querySelector('.toggle-sign');
toggleBtn.addEventListener('click', () => {
    if (!isNum1Complete) {
        // Working with num1
        if (num1.length > 0) {
            let number = parseFloat(num1.join('')) * -1;
            num1 = number.toString().split('');
            calcScreen.innerText = number.toString();
        }
    } else {
        // Working with num2
        if (num2.length > 0) {
            let number = parseFloat(num2.join('')) * -1;
            num2 = number.toString().split('');
            calcScreen.innerText = number.toString();
        }
    }
});

//Equals button
const equalsBtn = document.querySelector('.equals');
equalsBtn.addEventListener('click', ()=>{
    num2 = num2.join('');
    num2 = parseFloat(num2);
    let result = calculator(num1,num2,operation);
    calcScreen.innerText = result;

    //reset
    num1 = [];
    num2 = [];
    isFirstClick = true; 
    isNum1Complete = false; 
    operation = null; 
    
});

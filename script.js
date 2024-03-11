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

//create number buttons
for(let i = 9; i >= 0; i--){
    let numberBtn = document.createElement('button');
    numberBtn.innerText = i;
    numbers.appendChild(numberBtn);
};

let isFirstClick = true; // Flag to track if it's the first button click
let isNum1Complete = false; // New flag to check if we're done with num1
let operation = null; // To keep track of the current operation

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (parseInt(button.innerText) == button.innerText) {
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
        num1 = parseInt(num1);
        isNum1Complete = true;
        operation = add;
        calcScreen.innerText = num1;
});

//Subtract button
const minusBtn = document.querySelector('.minus');
minusBtn.addEventListener('click', ()=>{
    num1 = num1.join('');
    num1 = parseInt(num1);
    isNum1Complete = true;
    operation = subtract;
    calcScreen.innerText = num1;
});

//Multiply button
const multiplyBtn = document.querySelector('.multiply');
multiplyBtn.addEventListener('click', ()=>{
    num1 = num1.join('');
    num1 = parseInt(num1);
    isNum1Complete = true;
    operation = multiply;
    calcScreen.innerText = num1;
});

//Divide button
const divideBtn = document.querySelector('.divide');
divideBtn.addEventListener('click', ()=>{
    num1 = num1.join('');
    num1 = parseInt(num1);
    isNum1Complete = true;
    operation = divide;
    calcScreen.innerText = num1;
});

//Equals button
const equalsBtn = document.querySelector('.equals');
equalsBtn.addEventListener('click', ()=>{
    num2 = num2.join('');
    num2 = parseInt(num2);
    let result = calculator(num1,num2,operation);
    calcScreen.innerText = result;

    //reset
    num1 = [];
    num2 = [];
    isFirstClick = true; 
    isNum1Complete = false; 
    operation = null; 
    
});


// operator button merge arr num1 for further calculation
// after operator every click appends numbers to num2
// = solves the num with array

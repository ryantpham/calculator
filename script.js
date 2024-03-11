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

//value 
let num1 = [];
let num2 = [];

//create number buttons
for(let i = 0; i <= 9; i++){
    let numberBtn = document.createElement('button');
    numberBtn.innerText = i;
    numbers.appendChild(numberBtn);
};

//Displays Number and appends it to num1 array for calculation
const buttons = document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{

        calcScreen.innerText += button.innerText;
        numberValue.innerText = button.innerText;
        calcScreen.appendChild(numberValue);

        num1.push(button.innerText);
    });
});

//Clear Button
const clearBtn = document.querySelector('.clear')
clearBtn.addEventListener('click', ()=>{
    calcScreen.innerText = '0';
})


// operator button merge arr num1 for further calculation
// after operator every click appends numbers to num2
// = solves the num with array

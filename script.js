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

//value 
let num1 = [];
let num2 = [];

//create number buttons
for(let i = 0; i <= 9; i++){
    num1.push(i)
    let numberBtn = document.createElement('button');
    numberBtn.innerText = i;
    numbers.appendChild(numberBtn);

    const buttons = document.querySelectorAll('button');

    buttons.forEach((button)=>{
        button.addEventListener('click', ()=>{
            calcScreen.innerText = button.innerText;
            
        });
    });

};





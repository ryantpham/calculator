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
const buttons = document.querySelectorAll('.buttons');

buttons.forEach((button)=>{
    
    button.addEventListener('click', ()=>{
        if(button.innerText == '0'){
            calcScreen.innerText = '0';
        } else if(button.innerText == '1'){
            calcScreen.innerText = '1';
        }else if(button.innerText == '2'){
            calcScreen.innerText = '2';
        }else if(button.innerText == '3'){
            calcScreen.innerText = '3';
        }else if(button.innerText == '4'){
            calcScreen.innerText = '4';
        }else if(button.innerText == '5'){
            calcScreen.innerText = '5';
        }else if(button.innerText == '6'){
            calcScreen.innerText = '6';
        }else if(button.innerText == '7'){
            calcScreen.innerText = '7';
        }else if(button.innerText == '8'){
            calcScreen.innerText = '8';
        }else if(calcScreen.innerText =='9'){
            calcScreen.innerText = '9';
        }//Clear button
        else{
            calcScreen.innerText = 0;
        }

    });
});

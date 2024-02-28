function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1/num2;
}

//Higher order function
function calculator(num1,num2,operator){
    return operator(num1,num2);
}

//test code
console.log(calculator(1,2,add)) //expect 3
console.log(calculator(2,2,multiply)) // expect 4
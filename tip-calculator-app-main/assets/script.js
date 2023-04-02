
const billAmount = document.querySelector('#amount-input');
const numberOfPeople = document.querySelector('#num-of-people');
const totalAmount = document.querySelector('#total-counter')
const tipPerPerson = document.querySelector('#tip-counter')

const button = document.getElementsByClassName('tips')
const reset = document.getElementById('reset-btn')

billAmount.addEventListener('input', billInputCalc);
numberOfPeople.addEventListener('input', peopleAmountHandler);


billAmount.value = "0.00";
numberOfPeople.value = "1";
totalAmount.innerHTML = (0.00).toFixed(2);
tipPerPerson.innerHTML = (0.00).toFixed(2);


let billValue = 0.00;
let peopleInputValue = 1;


function billInputCalc() {
    billValue = parseFloat(billAmount.value);
    console.log(billValue);
};

function peopleAmountHandler() {
    peopleInputValue = parseFloat(numberOfPeople.value);
    console.log(peopleInputValue);
};


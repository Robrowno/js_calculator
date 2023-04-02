// A large section of this file was with help from a youtube tutorial solution:
// https://www.youtube.com/watch?v=etYv-pPfol4

const billAmount = document.querySelector('#amount-input');
const numberOfPeople = document.querySelector('#num-of-people');
const totalAmount = document.querySelector('#total-counter')
const tipPerPerson = document.querySelector('#tip-counter')

const buttons = document.querySelectorAll('.tips')
const reset = document.getElementById('reset-btn')

buttons.forEach(function (val) {
    val.addEventListener('click', handleButton);
});

billAmount.addEventListener('input', billInputCalc);
numberOfPeople.addEventListener('input', peopleAmountHandler);


billAmount.value = "0.00";
numberOfPeople.value = "1";
totalAmount.innerHTML = (0.00).toFixed(2);
tipPerPerson.innerHTML = (0.00).toFixed(2);


let billValue = 0.00;
let peopleInputValue = 1;
let tipValue = 0.15;


function billInputCalc() {
    billValue = parseFloat(billAmount.value);
    console.log(billValue);
};

function peopleAmountHandler() {
    peopleInputValue = parseFloat(numberOfPeople.value);
    console.log(peopleInputValue);
};

function handleButton(event) {
    buttons.forEach(function(val) {
        val.classList.remove('tip-active');
        if (event.target.innerHTML === val.innerHTML){
        val.classList.add('tip-active');
        tipValue = parseFloat(val.innerHTML)/100
        }
    });
    console.log(tipValue)
};
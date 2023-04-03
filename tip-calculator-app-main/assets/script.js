// A large section of this file was with help from a youtube tutorial solution:
// https://www.youtube.com/watch?v=etYv-pPfol4

const billAmount = document.querySelector('#amount-input');
const numberOfPeople = document.querySelector('#num-of-people');
const totalAmount = document.querySelector('#total-counter');
const tipPerPerson = document.querySelector('#tip-counter');

const buttons = document.querySelectorAll('.tips');
const customTip = document.querySelector('#custom-pc');
const reset = document.getElementById('reset-btn');

buttons.forEach(function (val) {
    val.addEventListener('click', handleButton);
});

billAmount.addEventListener('input', billInputCalc);
numberOfPeople.addEventListener('input', peopleAmountHandler);
customTip.addEventListener('input', customTipFunction);
reset.addEventListener('click', resetCalculator);

billAmount.value = "0.0";
numberOfPeople.value = "1";

totalAmount.innerHTML = (0.0).toFixed(2);
tipPerPerson.innerHTML = (0.0).toFixed(2);


let billValue = 0.0;
let peopleInputValue = 1;
let tipValue = 0.15;


function billInputCalc() {
    billValue = parseFloat(billAmount.value);
    calculateTip()
};

function peopleAmountHandler() {
    peopleInputValue = parseFloat(numberOfPeople.value);
    calculateTip()
};

function handleButton(event) {
    buttons.forEach(function(val) {
        val.classList.remove('tip-active');
        if (event.target.innerHTML === val.innerHTML){
        val.classList.add('tip-active');
        tipValue = parseFloat(val.innerHTML) / 100;
        };
    });
    calculateTip()
};

function customTipFunction() {
    tipValue = parseFloat(customTip.value) / 100;

    buttons.forEach(function(val) {
        val.classList.remove('tip-active');
    });
    calculateTip()
};


function calculateTip() {
    if (peopleInputValue >= 1) {
        let tipAmount = (billValue * tipValue ) / peopleInputValue;
        let total = (billValue + tipAmount) / peopleInputValue;

        tipPerPerson.innerHTML = tipAmount.toFixed(2);
        totalAmount.innerHTML = total.toFixed(2);
    
    } else {
        validateInput();
    };
};


function resetCalculator() {

    billAmount.value = "0.0";
    billInputCalc();
    numberOfPeople.value = "1";
    peopleAmountHandler();
    customTip.value = "";
};

function validateInput() {
    if (peopleInputValue <= 0) {
      document.getElementById("error").innerHTML = "Input must be greater than 0.";
    } else {
      document.getElementById("error").innerHTML = "";
    }
  }
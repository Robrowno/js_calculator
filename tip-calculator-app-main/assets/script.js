// A large section of this file was with help from a youtube tutorial solution:
// https://www.youtube.com/watch?v=etYv-pPfol4

// Global Variables
const billAmount = document.querySelector('#amount-input');
const numberOfPeople = document.querySelector('#num-of-people');
const totalAmount = document.querySelector('#total-counter');
const tipPerPerson = document.querySelector('#tip-counter');

// buttons
const buttons = document.querySelectorAll('.tips');
const customTip = document.querySelector('#custom-pc');
const reset = document.getElementById('reset-btn');

// for-loop for tip buttons
buttons.forEach(function (val) {
    val.addEventListener('click', handleButton);
});

//event listeners
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

// collect bill amount and parse to calculate function
function billInputCalc() {
    billValue = parseFloat(billAmount.value);
    calculateTip()
};

// collect people amount andn parse to calculate function
function peopleAmountHandler() {
    peopleInputValue = parseFloat(numberOfPeople.value);
    calculateTip()
};

// button handler which converts percentage value into a decimal
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

// custom tip value handler
function customTipFunction() {
    tipValue = parseFloat(customTip.value) / 100;

    buttons.forEach(function(val) {
        val.classList.remove('tip-active');
    });
    calculateTip()
};

// main calculation function
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

//resets calculator
function resetCalculator() {

    billAmount.value = "0.0";
    billInputCalc();
    numberOfPeople.value = "1";
    peopleAmountHandler();
    customTip.value = "";
};

// People input error message
function validateInput() {
    if (peopleInputValue <= 0) {
      document.getElementById("error").innerHTML = "Input must be greater than 0.";
    } else {
      document.getElementById("error").innerHTML = "";
    };
  };

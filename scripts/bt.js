const choiceFrom = document.querySelector("#choiceFrom");
const choiceTo = document.querySelector("#choiceTo");
const inputValue = document.querySelector("#inputValue");
const convertBtn = document.querySelector("#convertBtn");
const resultArea = document.querySelector("#resultArea");
const errorMessage = document.querySelector('#errorMessage');

choiceFrom.addEventListener('change', checkValidation);
inputValue.addEventListener('input', checkValidation);
function checkValidation() {
 const choice = choiceFrom.value;
 const value = inputValue.value;
 let isValid = false;
 let theBase;
 switch (choice) {
  case '1':
   isValid = /^-?[0-9]+$/.test(value);
   theBase = 'decimal';
   break;
  case '2':
   isValid = /^-?[01]+$/.test(value);
   theBase = 'binary';
   break;
  case '3':
   isValid = /^-?[0-7]+$/.test(value);
   theBase = 'octal';
   break;
  case '4':
   isValid = /^-?[0-9A-Fa-f]+$/.test(value);
   theBase = 'hexadecimal';
   break;
  default:
   isValid = false;
 }
 if (!isValid && value !== '') {
  errorMessage.innerText = `Invalid ${theBase} value`;
  convertBtn.disabled = true;
 } else {
  errorMessage.innerText = '';
  convertBtn.disabled = false;
 }
}
convertBtn.addEventListener('click', () => {
 const from = choiceFrom.value;
 const value = inputValue.value;
 handleConversion(from, value);
});
function handleConversion(choice, input) {
 switch (choice) {
  case '1':
   decimalOutput = input;
   binaryOutput = convertDecimalToBase(input, 2);
   octalOutput = convertDecimalToBase(input, 8);
   hexOutput = convertDecimalToBase(input, 16);
   break;
  case '2':
   if (!/^[01]+$/.test(input)) {
    binaryOutput = 'undefined';
    alert("check your binary number");
   } else {
    decimalOutput = convertToDecimal(input, 2);
    binaryOutput = input;
    octalOutput = convertDecimalToBase(decimalOutput, 8);
    hexOutput = convertDecimalToBase(decimalOutput, 16);
   }
   break;
  case '3':
   decimalOutput = convertToDecimal(input, 8);
   octalOutput = input;
   binaryOutput = convertDecimalToBase(decimalOutput, 2);
   hexOutput = convertDecimalToBase(decimalOutput, 16);
   break;
  case '4':
   decimalOutput = convertToDecimal(input, 16);
   hexOutput = input;
   binaryOutput = convertDecimalToBase(decimalOutput, 2);
   octalOutput = convertDecimalToBase(decimalOutput, 8);
   break;
  default:
   console.error('Invalid selection. Please check the option values.');
   return;
 }
 updateUI(binaryOutput, octalOutput, hexOutput, decimalOutput);
}
function updateUI(binary, octal, hex, decimal) {
 let choice = choiceTo.value;
 let result;
 switch (choice) {
  case 'one':
   result = decimal;
   break;
  case 'two':
   result = binary;
   break;
  case 'three':
   result = octal;
   break;
  case 'four':
   result = hex;
   break;
  default:
   console.error('check your updateUI function');
   break;
 }
 resultArea.innerHTML = `result is: ${result}`;
}

function convertDecimalToBase(number, base) {
 return parseInt(number, 10).toString(base).toUpperCase();
}
function convertToDecimal(number, base) {
 return parseInt(number, base).toString(10);
}

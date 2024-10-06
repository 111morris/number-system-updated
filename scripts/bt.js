
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
   isValid = /^[0-9]+$/.test(value);
   theBase = 'decimal';
   break;
  case '2':
   isValid = /^[01]+$/.test(value);
   theBase = 'binary';
   break;
  case '3':
   isValid = /^[0-7]+$/.test(value);
   theBase = 'octal';
   break;
  case '4':
   isValid = /^[0-9A-Fa-f]+$/.test(value);
   theBase = 'hexadecimal';
   break;
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
 let result = '';
 // const from = choiceFrom.value;
 // const to = choiceTo.value;
 const value = inputValue.value;

 // Convert and display result
 // const result = convertBases(from, to, value);
 // resultArea.innerText = result;

 radix = fromTo();
 resultArea.innerHTML = convertDecimal(value, radix);
 
});






function convertDecimal(value, base) {
 let decimalValue = parseInt(value, base);
 return decimalValue.toString(base); 
}



// function convertBases(from, to, value) {
//  const decimalValue = toDecimal(value, radix);
//  return fromDecimal(to, decimalValue);
// }

function fromTo() {
 switch (choiceFrom.value) {
  case '1':
   switch (choiceTo.value) {
    case 'one':
     return '10'
    case 'two':
     return '2'
    case 'three':
     return '8'
    case 'four':
     return '16'
   }
  case '2':
  case '3':
  case '4':

   switch (choiceTo.value) {
    case 'one':
     return '10'
    case 'two':
     return '2'
    case 'three':
     return '8'
    case 'four':
     return '16'
   }
   break;
 }
}

/* function fromTo() {
 let fromBase = parseInt(choiceFrom.value);
 let toBase;

 switch (choiceTo.value) {
  case 'one':   // Decimal
   toBase = 10;
   break;
  case 'two':   // Binary
   toBase = 2;
   break;
  case 'three': // Octal
   toBase = 8;
   break;
  case 'four':  // Hexadecimal
   toBase = 16;
   break;
  default:
   toBase = 10;  // Default to decimal if none selected
 }

 return {
  from: fromBase,
  to: toBase
 };
}
 */

function convertBinary(value, radix) {
 return parseInt(value, radix);
}



function handleConversion(choice, input) {
 switch (choice) {

  case 'decimal':

   decimalOutput = input;
   binaryOutput = convertDecimalToBase(input, 2);
   octalOutput = convertDecimalToBase(input, 8);
   hexOutput = convertDecimalToBase(input, 16);
   break;

  case 'binary':
   if (!/^[01]+$/.test(input)) {
    binaryOutput = 'undefined';
    alert("check your binary number");
    // console.log(binaryOutput);
   } else {
    decimalOutput = convertToDecimal(input, 2);
    binaryOutput = input;
    octalOutput = convertDecimalToBase(decimalOutput, 8);
    hexOutput = convertDecimalToBase(decimalOutput, 16);
   }
   break;

  case 'octal':
   decimalOutput = convertToDecimal(input, 8);
   octalOutput = input;
   binaryOutput = convertDecimalToBase(decimalOutput, 2);
   hexOutput = convertDecimalToBase(decimalOutput, 16);
   break;

  case 'hexadecimal':
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
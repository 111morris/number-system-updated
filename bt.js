const choiceFrom = document.querySelector("#choiceFrom");
const choiceTo = document.querySelector("#choiceTo");
const inputValue = document.querySelector("#inputValue");
const convertBtn = document.querySelector("#convertBtn");
const resultArea = document.querySelector("#resultArea");

convertBtn.addEventListener('click', () => {
 const from = choiceFrom.value;
 const to = choiceTo.value;
 const value = inputValue.value;

 if (from === '1') {
  checkChoice(to, value);
 } else {
  convert(from, to, value);
 }
});

function convert(from, to, value) {
 let result;

 switch (from) {
  case '2': // Decimal
   result = convertFromDecimal(to, value);
   break;
  case '3': // Octal
   result = convertFromOctal(to, value);
   break;
  case '4': // Hexadecimal
   result = convertFromHex(to, value);
   break;
  default:
   console.error("Invalid conversion option.");
   return;
 }

 resultArea.innerText = result;
}

function convertFromDecimal(to, value) {
 switch (to) {
  case 'one': return decimal(value, 2); // Decimal to Binary
  case 'two': return value; // Decimal to Decimal
  case 'three': return decimalToBase(value, 8); // Decimal to Octal
  case 'four': return decimalToBase(value, 16); // Decimal to Hexadecimal
  default:
   console.error("Invalid target option.");
   return '';
 }
}

function convertFromOctal(to, value) {
 const decimalValue = decimal(value, 8); // Convert Octal to Decimal

 switch (to) {
  case 'one': return decimalToBase(decimalValue, 2); // Octal to Binary
  case 'two': return decimalValue; // Octal to Decimal
  case 'three': return value; // Octal to Octal
  case 'four': return decimalToBase(decimalValue, 16); // Octal to Hexadecimal
  default:
   console.error("Invalid target option.");
   return '';
 }
}

function convertFromHex(to, value) {
 const decimalValue = decimal(value, 16); // Convert Hex to Decimal

 switch (to) {
  case 'one': return decimalToBase(decimalValue, 2); // Hex to Binary
  case 'two': return decimalValue; // Hex to Decimal
  case 'three': return decimalToBase(decimalValue, 8); // Hex to Octal
  case 'four': return value; // Hex to Hexadecimal
  default:
   console.error("Invalid target option.");
   return '';
 }
}

function checkChoice(to, value) {
 switch (to) {
  case 'one':
   resultArea.innerText = decimal(value, 2);
   break;
  case 'two':
   resultArea.innerText = decimalToBase(value, 10);
   break;
  case 'three': // Binary to Octal
   resultArea.innerText = decimalToBase(value, 8);
   break;
  case 'four': // Binary to Hexadecimal
   resultArea.innerText = decimalToBase(value, 16);
   break;
  default:
   console.error("Invalid target option.");
   break;
 }
}

function decimalToBase(number, base) {
 return parseInt(number, 10).toString(base).toUpperCase();
}

function decimal(number, base) {
 return parseInt(number, base).toString(10);
}


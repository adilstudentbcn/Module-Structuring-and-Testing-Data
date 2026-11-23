let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// there are 5 function calls.
//line 4 : Number() and replaceAll()
//line 5 : Number() and replaceAll()
//line 10 : console.log()

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// Error:  SyntaxError: missing ) after argument list in line 5. But the error is a missing comma.
//Javascript reads space after ("," and thinks we forgot to close the brakets. so this is why it reurns  SyntaxError: missing )
//To fix the code, we need to add a comma after the 1st argument :",".

// c) Identify all the lines that are variable reassignment statements
//lines 4 and 5.

// d) Identify all the lines that are variable declarations
// lines 1, 2, 7, and 8.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// Number(value) converts a string or other value to the Number type.
//The expression carPrice.replaceAll(",", "") removes all commas from the string value of carPrice.

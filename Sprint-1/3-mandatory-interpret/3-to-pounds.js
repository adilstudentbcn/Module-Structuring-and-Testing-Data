const penceString = "0p";
console.log("line 1 - penceString :", penceString);

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
console.log(
  "line 3 - penceStringWithoutTrailingP :",
  penceStringWithoutTrailingP
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
console.log("line 12 - paddedPenceNumberString :", paddedPenceNumberString);

const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
console.log("line 18 - pounds :", pounds);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
console.log("line 23 - pence :", pence);

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2. const penceStringWithoutTrailingP... --> removes the trailing "p" from the string
// 3. const paddedPenceNumberString... --> pads the string with leading zeros to ensure it has at least 3 characters .padStart()
// 4. const pounds... --> extracts the pounds part of the string
// 5. const pence... --> extracts the pence part of the string and pads it with trailing zeros if necessary .padEnd()
// 6. console.log(`£${pounds}.${pence}`) --> outputs the final formatted price in pounds and pence format

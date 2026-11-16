// Predict and explain first...

// Why will an error occur when this program runs?
// // Same as 0.js file, we will have an error. ere the decimalNumber variable declared twice.

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here
// If we try to move "const decimalNumber = 0.5;" outside the function it will work?

// Finally, correct the code to fix the problem

const decimalNumber = 0.5;

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
console.log(convertToPercentage(decimalNumber));

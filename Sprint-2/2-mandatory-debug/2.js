// Predict and explain first...

// Predict the output of the following code:
// this code returns the last digit of 103; the variable num.

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// This code returns always 3, which is the last digit of 103.

// Explain why the output is the way it is
// We forgot to add a parameter to the function.

// Finally, correct the code to fix the problem
// We can add a parameter to the function like this : getLastDigit(num) and test it.

const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

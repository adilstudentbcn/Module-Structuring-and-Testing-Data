// Predict and explain first...
// This code will return the product of a and b.

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// after running the code, the second console.log returned undefined.
// the function prints only the result, we don't have a return statement at the end.
// I will change console.log(a*b) to return a * b.

// Finally, correct the code to fix the problem
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//math.random() generates a random number from 0 to <1
// (maximum - minimum + 1) returns 100
// Math.random() * (maximum - minimum + 1) returns a random number from 0 to <100
//math.floor() rounds down the number to the nearest integer (range from 0 to 99)
//we add the minimum (1) shifting the range to 1 to 100

console.log(num);

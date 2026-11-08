const movieLength = -2000; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations.

// b) How many function calls are there?
// 1 console.log() function call.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//It divides movieLength by 60 and returns whatever is left over.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// It takes the total seconds and subtracts the leftovers. This will help us get the exact number of minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// It represents the length of the movie in this format: hours:minutes:seconds. The name could be movieLengthFormatted.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// it works but it doesn't always return the HH:MM:SS format. I found that we can convert the numbers to string and  use .padStart(2, "0") to always get 2 digits.
// Also this code dosennt handle negative valuse, and length above 24 hours.

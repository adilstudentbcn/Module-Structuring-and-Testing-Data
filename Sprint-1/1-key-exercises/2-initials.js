let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.

let initials = `${firstName.charAt(0)}${middleName.charAt(0)}${lastName.charAt(0)}`;
console.log(initials); // correct output: "CKJ"

//------------------------------------------------------------------------------------
// https://www.google.com/search?q=get+first+character+of+string+mdn
// --> refrence:
//  console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// Expected output: "The character at index 4 is q"
//------------------------------------------------------------------------------------

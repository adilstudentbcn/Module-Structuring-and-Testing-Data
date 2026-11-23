// Predict and explain first...
//  =============> write your prediction here
// The str variable is used twice in the function. I think it will be error becasue we used same name twice?

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
// The error name: SyntaxError: Identifier 'str' has already been declared.
// So the parameter str is already declared. this line : function capitalise(str) is also variable declaration.
// we have to find new name for the next variable.

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here
// =============> write your new code here

function capitalise(str) {
  let capitalisedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisedStr;
}

console.log(capitalise("hello"));

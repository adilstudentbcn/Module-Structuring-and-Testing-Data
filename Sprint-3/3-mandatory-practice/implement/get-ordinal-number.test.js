const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return '1st' for 1", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
});

test("should return '102nd' for 102", () => {
  expect(getOrdinalNumber(102)).toEqual("102nd");
});

test("should return '23rd' for 23", () => {
  expect(getOrdinalNumber(23)).toEqual("23rd");
});

test("should return '12th' for 12", () => {
  expect(getOrdinalNumber(12)).toEqual("12th");
});

test("should return '13th' for 13", () => {
  expect(getOrdinalNumber(13)).toEqual("13th");
});

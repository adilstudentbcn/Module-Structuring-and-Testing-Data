const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

test("should return the numeric value for number cards (2-9)", () => {
  expect(getCardValue("5♥")).toEqual(5);
});

test("should return 10 for card rank 10", () => {
  expect(getCardValue("10♦")).toEqual(10);
});

test("should return 10 for face cards (J, Q, K)", () => {
  expect(getCardValue("K♣")).toEqual(10);
});

test("should return 11 for any Ace", () => {
  expect(getCardValue("A♥")).toEqual(11);
});

test("should throw an error for an invalid card rank", () => {
  expect(() => getCardValue("1♠")).toThrow("Invalid card rank.");
});

const labFunctions = require("./functions");

test("returnTwo test", () => {
  expect(labFunctions.returnTwo()).toBe(2);
});

test("greeting test", () => {
  expect(labFunctions.greeting("Tom Bombadil")).toBe(`Hello, Tom Bombadil`);
});

describe("math functions", () => {
  test("add test", () => {
    expect(labFunctions.add(4,2)).toBe(6);
  });

  test("subtract test", () => {
    expect(labFunctions.subtract(4,2)).toBe(2);
  });

  test("multiply test", () => {
    expect(labFunctions.multiply(4,2)).toBe(8);
  });

  test("add divide", () => {
    expect(labFunctions.divide(4,2)).toBe(2);
  });
});

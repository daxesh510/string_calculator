// const add = require("./stringCalculator"); // Adjust the import based on your file structure
const add = require("./add"); // Adjust the import based on your file structure

describe("String Calculator", () => {
  // give me test cases for add
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return the number itself for a single number", () => {
    expect(add("5")).toBe(5);
  });

  test("should return the sum of two numbers separated by a comma", () => {
    expect(add("1,2")).toBe(3);
  });

  test("should handle new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("should support different delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test("should throw an error for negative numbers", () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed -2");
  });

  test("should handle multiple delimiters", () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
  });

  test("should handle multiple delimiters of varying lengths", () => {
    expect(add("//[*][%]\n1*2%3")).toBe(6);
  });

  test("should handle multiple delimiters with special characters", () => {
    expect(add("//[***][%%%]\n1***2%%%3")).toBe(6);
  });
});

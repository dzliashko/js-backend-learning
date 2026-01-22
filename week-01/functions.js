function sum(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  return "Need two numbers as arguments";
}

function isEven(n) {
  if (typeof n === "number") {
    return n % 2 == 0;
  }
  return "Need a number as argument";
}

function max(arr) {
  if (!Array.isArray(arr)) {
    return "Need an array as argument";
  }
  if (arr.length === 0) {
    return null; // или null (без кавычек)
  }
  return Math.max(...arr);
}

export { sum, isEven, max };

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

export { sum, isEven };

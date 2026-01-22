function sum(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return "Need two numbers as arguments";
  }
}

export { sum };

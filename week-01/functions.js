function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return null
  }
  return a + b
}

function isEven(n) {
  if (typeof n !== 'number') {
    return null
  }
  return n % 2 === 0
}

function max(arr) {
  if (!Array.isArray(arr)) {
    return null
  }
  if (arr.length === 0) {
    return null
  }
  return Math.max(...arr)
}

export { sum, isEven, max }

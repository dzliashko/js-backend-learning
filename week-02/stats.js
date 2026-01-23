export function getStats(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return null
  }
  let minValue = numbers[0]
  let maxValue = numbers[0]
  let avgValue = numbers.reduce(function (acc, number) {
    if (number < minValue) minValue = number
    if (number > maxValue) maxValue = number
    return acc + number
  })
  console.log(avgValue)

  return {
    min: minValue,
    max: maxValue,
    avg: avgValue / numbers.length,
  }
}

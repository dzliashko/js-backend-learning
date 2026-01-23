export function getStats(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return null;
  }

  const result = numbers.reduce(
    (acc, number) => {
      return {
        min: number < acc.min ? number : acc.min,
        max: number > acc.max ? number : acc.max,
        sum: acc.sum + number,
      };
    },
    {
      min: numbers[0],
      max: numbers[0],
      sum: 0,
    }
  );

  return {
    min: result.min,
    max: result.max,
    avg: result.sum / numbers.length,
  };
}

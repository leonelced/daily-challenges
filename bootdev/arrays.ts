
// My solution: 

export function uniqueValues(numbers: number[]): number[] {
  const result: number[] = [];

  if (!numbers) return []; 

  for (const number of numbers) {
    if (!result.includes(number)) {
      result.push(number);
    }
  }

  return result;
}

// https://www.boot.dev/challenges/3b477744-64dd-43a9-b7da-ec0dace91f52
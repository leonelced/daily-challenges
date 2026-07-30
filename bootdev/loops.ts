// My Solution: 

export function longestTargetStreak(
  dailyCounts: readonly number[],
  target: number,
): number {
  if (dailyCounts.length === 0) return 0;
  const counts = []
  let count = 0;
  for(const n of dailyCounts) {
    if (n >= target) {
      count += 1;
      continue;
    }
    counts.push(count);
    count = 0;
  }
  counts.push(count);
  return Math.max(...counts);
}


// https://www.boot.dev/challenges/8faca1b7-338d-4aa9-82ca-3e489a1d1f46
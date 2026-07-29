
// My Solution:

export type Coordinate = readonly [number, number];

export function totalManhattanDistance(route: readonly Coordinate[]): number {
  if (route.length <= 1) return 0;
  let total = 0;
  let prevX = null;
  let prevY = null;
  for (const [i, [x, y]] of route.entries()) {
    if (!Number.isFinite(x) || !Number.isFinite(y)) {
      throw new Error(`Invalid coordinate at index ${i}`);
    }
    if (prevX !== null && prevY !== null) {
      total += Math.abs(x - prevX) + Math.abs(y - prevY);
    }
    prevX = x;
    prevY = y;
  }
  return total;
}


// https://www.boot.dev/challenges/5994271e-e3b2-4382-a4d8-d8bebbf6d29d
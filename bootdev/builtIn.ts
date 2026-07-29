// My Solution: 

export function createInventoryLines(
  quantities: Readonly<Record<string, number>>,
): string[] {
  return Object.entries(quantities)
    .filter(([, quantity]) => quantity > 0)
    .map(([product, quantity]) => `${product}: ${quantity}`)
    .sort();
}

// https://www.boot.dev/challenges/9ced62ee-f15b-41a5-bf12-ce9ab7ad0cea
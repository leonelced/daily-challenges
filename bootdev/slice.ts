// My Solution:

function summarizeSignal(signal: string): string {
  const first = signal.slice(0,4);
  const middle = signal.slice(4,-2);
  const tail = signal.slice(-2);
  const full = signal.slice();
  const beyond = signal.slice(30);
  return `first: ${first} | middle: ${middle} | tail: ${tail} | full: ${full} | beyond: ${beyond}`;
}


// https://www.boot.dev/challenges/fac07a20-e3d3-4a87-a50e-c4d4f7c14479


// My solution: 

export function extractSlice(
  message: string,
  start?: number,
  end?: number,
): string {
  return message.slice(start, end);
}

// https://www.boot.dev/challenges/829f1a65-4c88-4324-8c23-ecb7b5c0adcf
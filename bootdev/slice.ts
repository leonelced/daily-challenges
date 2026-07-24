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
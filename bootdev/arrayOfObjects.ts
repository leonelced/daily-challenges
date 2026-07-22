type Order = {
  userId: string;
  amount: number;
  status: "completed" | "pending" | "cancelled";
};

type UserTotal = {
  userId: string;
  total: number;
};

// My Solution:

function getCompletedSpendingByUser(orders: Order[]): UserTotal[] {
  const users:Record<string, number> = {};
  const totals:UserTotal[] = [];
  
  for (const order of orders) {
    if (order.status === "completed") {
      if (!users[order.userId] ) {
        users[order.userId] = 0;
      }
      users[order.userId] += order.amount;
      // users[order.userId] = (users[order.userId] ?? 0) + order.amount;
    }
  }
  for (const userId of Object.keys(users)) {
    totals.push({ userId, total: users[userId] });
  }
  return totals.sort((a, b) => b.total - a.total);
}


// Problem: Sum completed order amounts per user, sorted descending by total
// Approach: hash map to accumulate per-user totals, then sort
// Time: O(n log n) — dominated by sort; grouping itself is O(n)
// Space: O(k) — k = distinct users
// https://www.boot.dev/challenges/9694ab4d-2ab3-4c1b-b0c7-f0c5c71cc5af
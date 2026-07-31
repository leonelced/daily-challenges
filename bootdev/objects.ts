export type InventoryTransaction = {
  readonly productId: unknown;
  readonly quantityChange: unknown;
};

export type InventoryReport = Record<
  string,
  {
    quantity: number;
    transactionCount: number;
  }
>;

// My Solution: 

export function buildInventoryReport(
  transactions: readonly InventoryTransaction[],
): InventoryReport {
  const report: InventoryReport = {};
  for (const t of transactions) {
    if (typeof t.productId !== "string" || 
        t.productId.trim() === "" ||
        typeof t.quantityChange !== "number" ||
        !Number.isInteger(t.quantityChange) ||
        t.quantityChange === 0
       ) {
      continue;
    }
    const existing = report[t.productId];
    report[t.productId] = {
      quantity: (existing?.quantity ?? 0) + t.quantityChange, 
      transactionCount: (existing?.transactionCount ?? 0) + 1
    }
  }
  
  for (const productId of Object.keys(report)) {
    if (report[productId].quantity === 0) {
      delete report[productId];
    }
  }
  
  return report;
}


// https://www.boot.dev/challenges/a10c788d-78fb-4eb0-89cd-524a05dd9f03
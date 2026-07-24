export enum OrderStatus {
  New = "new",
  Paid = "paid",
  Packed = "packed",
  Shipped = "shipped",
  Delivered = "delivered",
  Cancelled = "cancelled",
}

// my Solution (Given solution is better)

export function canTransition(
  currentStatus: OrderStatus,
  nextStatus: OrderStatus,
): boolean {
  switch (currentStatus) {
    case "new": 
      if (nextStatus == "paid" || nextStatus == "cancelled") {
        return true;
      }
      return false;
    case "paid": 
      if (nextStatus == "packed" || nextStatus == "cancelled") {
        return true;
      }
      return false;
    case "packed": 
      if (nextStatus == "shipped" || nextStatus == "cancelled") {
        return true;
      }
      return false;
    case "shipped": 
      if (nextStatus == "delivered") {
        return true;
      }
    default: 
      return false;
  }
}


// https://www.boot.dev/challenges/fb0cfee0-8707-48e9-a6bc-e06370796de7
import { ModifiedCartItem } from "../../../types/types";

export function totalPrice(cart: ModifiedCartItem[]): number {
  let result = 0;

  cart?.forEach((item) => {
    result += item?.product?.price * item?.qty;
  });

  return result;
}

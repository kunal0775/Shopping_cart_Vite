import { atom, selector } from "recoil";


export const cartState = atom
({
    key: "cartState",
    default:[]
}
)

export const totalCartAmountState = selector({
    key: 'totalCartAmountState',
    get: ({ get }) => {
      const cart = get(cartState);
      return cart.reduce((acc, item) => {
        const numericPrice = parseInt(item.price.replace(/[^\d]/g, ''), 10); // remove ₹ and commas
        return acc + numericPrice * item.order_qty;
      }, 0);
    },
  });
  
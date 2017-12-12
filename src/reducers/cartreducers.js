export function cartReducers(state = { cart: [] }, action) {
  switch (action.type) {
    case "add_to_cart":
      return {
        cart: [...state, ...action.payload],
        totalamount: totals(action.payload).amount
      };
      break;

    case "update_cart":
      const book2upt = [...state.cart];

      const indextoupt = book2upt.findIndex(function(book) {
        return book._id === action._id;
      });

      const newbook = {
        ...book2upt[indextoupt],
        quantity: book2upt[indextoupt].quantity + action.unit
      };
      console.log(newbook);

      let cartupt = [
        ...book2upt.slice(0, indextoupt),
        newbook,
        ...book2upt.slice(indextoupt + 1)
      ];

      return { cart: cartupt, totalamount: totals(cartupt).amount };
      break;

    case "delete_cart_item":
      return {
        cart: [...state, ...action.payload],
        totalamount: totals(action.payload).amount
      };
      break;
  }

  return state;
}

export function totals(payloadarr) {
  const totamt = payloadarr
    .map(function(cartarr) {
      return cartarr.price * cartarr.quantity;
    })
    .reduce(function(a, b) {
      return a + b;
    }, 0);

  return { amount: totamt.toFixed(2) };
}

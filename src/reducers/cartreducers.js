export function cartReducers(state = { cart: [] }, action) {
  switch (action.type) {
    case "add_to_cart":
      return {
        cart: [...state, ...action.payload],
        totalamount: totals(action.payload).amount,
        totalqty: totals(action.payload).qty,
        totalqty: totals(action.payload).qty
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

      return {
        cart: cartupt,
        totalamount: totals(cartupt).amount,
        totalqty: totals(cartupt).qty
      };
      break;

    case "delete_cart_item":
      return {
        cart: [...state, ...action.payload],
        totalamount: totals(action.payload).amount,
        totalqty: totals(action.payload).qty
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

  const totqty = payloadarr
    .map(function(qty) {
      return qty.quantity;
    })
    .reduce(function(a, b) {
      return a + b;
    }, 0);

  return { amount: totamt.toFixed(2), qty: totqty };
}

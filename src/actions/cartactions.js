export function addtocart(book) {
  return {
    type: "add_to_cart",
    payload: book
  };
}

export function deletecartitem(cart) {
  return {
    type: "delete_cart_item",
    payload: cart
  };
}

export function updatecart(_id, unit) {
  return {
    type: "update_cart",
    _id: _id,
    unit: unit
  };
}

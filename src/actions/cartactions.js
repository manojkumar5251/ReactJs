export function addtocart(book) {
  return {
    type: "add_to_cart",
    payload: book
  };
}

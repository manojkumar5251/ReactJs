export function cartReducers(state = { cart: [] }, action) {
  switch (action.type) {
    case "add_to_cart":
      return { cart: [...state, ...action.payload] };
      break;
  }
  return state;
}

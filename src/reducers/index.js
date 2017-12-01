import { combineReducers } from "redux";

import { booksReducers } from "./booksreducers";
import { cartReducers } from "./cartreducers";

export default combineReducers({
  cart: cartReducers,
  books: booksReducers
});

import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

import reducers from "./reducers/index";

import { addtocart } from "./actions/cartactions";
import { postbook, deletebook, updatebook } from "./actions/booksactions";

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);
// store.subscribe(function() {
//   console.log("current state ", store.getState());
// });

store.dispatch(
  postbook([
    { id: 1, name: "Da vince code", author: "Dan Brown", price: 10 },
    { id: 2, name: "Digital code", author: "Dan Brown", price: 20 }
  ])
);

store.dispatch(deletebook({ id: 1 }));

store.dispatch(updatebook({ id: 2, name: "Angels and Demons" }));

store.dispatch(addtocart([{ id: 1 }]));

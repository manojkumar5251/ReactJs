import React from "react";
import { render } from "react-dom";

import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

import { Provider } from "react-redux";

import reducers from "./reducers/index";

import { addtocart } from "./actions/cartactions";
import { postbook, deletebook, updatebook } from "./actions/booksactions";

import BooksList from "./components/pages/bookslist";
import Menu from "./components/menu";
import Footer from "./components/footer";

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);
// store.subscribe(function() {
//   console.log("current state ", store.getState());
// });

render(
  <Provider store={store}>
    <div>
      <Menu />
      <BooksList />
      <Footer />
    </div>
  </Provider>,
  document.getElementById("app")
);

// store.dispatch(
//   postbook()
// );

// store.dispatch(deletebook({ id: 1 }));

// store.dispatch(updatebook({ id: 2, name: "Angels and Demons" }));

// store.dispatch(addtocart([{ id: 1 }]));

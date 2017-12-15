import React from "react";
import { render } from "react-dom";

import { Router, Route, IndexRoute, browserHistory } from "react-router";

import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";

import reducers from "./reducers/index";

import { addtocart } from "./actions/cartactions";
import { postbook, deletebook, updatebook } from "./actions/booksactions";

import BooksList from "./components/pages/bookslist";
import Cart from "./components/pages/cart";
import BooksForm from "./components/pages/booksform";
import Main from "./main";

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);
// store.subscribe(function() {
//   console.log("current state ", store.getState());
// });

const Routes = (
  <Provider store={store}>
    <div>
      <Router history={browserHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={BooksList} />
          <Route path="/admin" component={BooksForm} />
          <Route path="/cart" component={Cart} />
        </Route>
      </Router>
    </div>
  </Provider>
);

render(Routes, document.getElementById("app"));

// store.dispatch(
//   postbook()
// );

// store.dispatch(deletebook({ id: 1 }));

// store.dispatch(updatebook({ id: 2, name: "Angels and Demons" }));

// store.dispatch(addtocart([{ id: 1 }]));

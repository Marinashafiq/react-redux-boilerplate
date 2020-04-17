import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Theme from "./Theme";

ReactDOM.render(
  <Provider store={store}>
    <Theme />
  </Provider>,
  document.querySelector('#root')
);

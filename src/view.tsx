import * as React from "react";
import * as ReactDOM from "react-dom";
import {App} from "./view/app";
import {createStore} from "redux";
import {Provider} from 'react-redux';
import {reducer} from "./view/redux/reducers/reducer";

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <App/>
  </Provider>,
  document.getElementById("example")
);
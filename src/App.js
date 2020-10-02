import React from 'react';
import App from './containers/App'

import { Provider } from "react-redux";

import store from "./redux-saga";

function index() {
  return (
      <Provider store={store}>
        <App/>
      </Provider>
  );
}

export default index;

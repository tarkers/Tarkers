import React from 'react';
import ReactDOM from 'react-dom';
import App from './UI/App'
import { Provider } from 'react-redux'
import {store} from './reduxFile/store'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



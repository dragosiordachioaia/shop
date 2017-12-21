import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import reducers from './reducers/store';
import App from './smart_components/app';

import { initStore } from 'utils';
import './less/main.less';

const store = initStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

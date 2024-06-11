import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'normalize.css';
import store from './store/index.ts';
import {Provider} from 'react-redux';
import GlobalStyles from './globalStyles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>
);

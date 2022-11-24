import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app/views/App';
import { store } from './app/lib/store'
import { addtoCart } from './app/lib/actions';

console.log(store.getState())
const unsubscribe = store.subscribe(() => console.log(store.getState()))
store.dispatch(addtoCart(2, {name: "citron"}))
store.dispatch(addtoCart(5, {name: "kiwi"}))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


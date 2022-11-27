import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app/views/App';
import store from './app/lib/store';
import { ajouteraupanier } from './app/lib/actions';

// Log the initial state
console.log('Initial state: ', store.getState())
const unsubscribe = store.subscribe(() =>
  console.log('State after dispatch: ', store.getState()))
  store.dispatch(ajouteraupanier(2, {name: "citron"}))
  store.dispatch(ajouteraupanier(5, {name: "kiwi"}))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>
);


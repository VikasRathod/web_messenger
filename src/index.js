import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';

const firebaseConfig = {
  apiKey: "AIzaSyDIn6GItBUCNT6NfCASDGdFhkTPDkmmcJY",
  authDomain: "web-messenger-6544c.firebaseapp.com",
  databaseURL: "https://web-messenger-6544c.firebaseio.com",
  projectId: "web-messenger-6544c",
  storageBucket: "web-messenger-6544c.appspot.com",
  messagingSenderId: "35938167777",
  appId: "1:35938167777:web:62ea7a531921da559400a0",
  measurementId: "G-4KVD17ZP03"
};

firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

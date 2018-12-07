import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

firebase.initializeApp({
	apiKey: "AIzaSyAjHDSsqCTsCderBm25lq4P_m6vteCZ8II",
	authDomain: "pseudogram-e6dd7.firebaseapp.com",
	databaseURL: "https://pseudogram-e6dd7.firebaseio.com",
	projectId: "pseudogram-e6dd7",
	storageBucket: "pseudogram-e6dd7.appspot.com",
	messagingSenderId: "347182032768"
})

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

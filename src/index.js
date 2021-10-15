import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import $ from 'jquery';
import { initializeApp } from 'firebase/app';
import axios from 'axios';
import {FirebaseAppProvider} from 'reactfire';

const firebaseConfig = {
  apiKey: "AIzaSyCwgxApnU98xzBqeDMHW1DyfQoZs5fixJI",
  authDomain: "brifcase-f78fd.firebaseapp.com",
  databaseURL: "https://brifcase-f78fd-default-rtdb.firebaseio.com",
  projectId: "brifcase-f78fd",
  storageBucket: "brifcase-f78fd.appspot.com",
  messagingSenderId: "628705856142",
  appId: "1:628705856142:web:fed444af6b0557375d17df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
  <App/>
  </FirebaseAppProvider>,
  document.getElementById('root')
);
$("body").css("margin","0 0");
alert(document.cookie.toString());
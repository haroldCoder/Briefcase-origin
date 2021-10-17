import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import $ from 'jquery';
import { initializeApp } from 'firebase/app';
import axios from 'axios';
import {FirebaseAppProvider} from 'reactfire';
import Cookies from 'universal-cookie';
import PanelP from './components/panelprofile.js';

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
let cookie = new Cookies();
let profilep = new PanelP();
$(".navbar").append(`
			  <div class="profile"></div>
   `);
if(cookie.get("name") != " " && cookie.get("email") != " " && cookie.get("cover") != " "){
   $(".profile").remove();
}
else{
  ReactDOM.render(
    <img src={cookie.get('cover')} style={{width: '70px', height: '70px'}} onClick={()=>profilep.UI(cookie.get("name"),cookie.get("email"),cookie.get("cover"),true)}/>,
    document.querySelector(".profile")
  );
}
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import $ from 'jquery';
import axios from 'axios';
import Cookies from 'universal-cookie';
import PanelP from './components/panelprofile.js';
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
$("body").css("margin","0 0");
let cookie = new Cookies();
let profilep = new PanelP();
$(".navbar").append(`
			  <div class="profile"></div>
   `);
if(cookie.get("name") == " " && cookie.get("email") == " " && cookie.get("cover") == " "){
   $(".profile").remove();
}
else{
  ReactDOM.render(
    <img src={cookie.get('cover')} style={{width: '70px', height: '70px'}} onClick={()=>profilep.UI(cookie.get("name"),cookie.get("email"),cookie.get("cover"),true)}/>,
    document.querySelector(".profile")
  );
  $(".profile").css("margin","4%");
}
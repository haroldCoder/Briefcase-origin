import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import $ from 'jquery';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
$("body").css("margin","0 0");
alert(document.cookie.toString());
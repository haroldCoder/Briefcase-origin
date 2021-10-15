import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

ReactDOM.render(
  <h2>hello</h2>,
  document.getElementById('app')
);
$("body").css("margin","0 0");
alert(document.cookie.toString());
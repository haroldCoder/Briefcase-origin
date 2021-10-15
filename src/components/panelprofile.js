import { Component } from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';
import koder from '../img/coder.png';
import user from '../img/user.png';

class PanelP extends Component{
     UI = (name,email) =>{
		 $(".home").append(`
		   <div class="panelp">
		     <div class="container-fluid mains">
			   <div class="title d-flex justify-content-between align-items-center p-2">
			     <h2 id="adm" class="text-light">administrator</h2>  
				 <h1 class="text-danger closep">X</h1>
			   </div>
			   <div class="d-flex m-4">
			   <img src=${koder} id="koder"/>
			   <div class="container m-3">
               <div class="row contents">
                 <div class="col-sm">
                   <h3 class="item dark">${name}<h3>
                 </div>
               </div>
			   <div class="row contents">
                 <div class="col-sm">
                   <h3 class="item dark">${email}<h3>
                 </div>
               </div>
			   </div>
             </div>
			 </div>
			 <div class="d-flex m-5 align-items-center">
			 <img class="imguser" src=${user} style="width:70px !important"/> 
			 <h4 class="m-3 text-light" style="font-family: emoji">member</h4> 
			 </div>
		   </div>
		 `)
		 $(".home > .panelp").css("width","70%");
		 $(".home > .panelp").css("height","auto");
		 $(".home > .panelp").css("background","#0000009B");
		 $(".home > .panelp").css("position","fixed");
		 $(".home > .panelp").css("left","15%");
		 $(".home > .panelp").css("top","8%");
		 $(".home > .panelp").css("backdrop-filter","blur(6px)")
		 $(".panelp > .mains > .title").css("background","#F0F0F090");
		 $(".container > .contents").css("height","15vh");
		 $("#adm").css("font-family","Staatliches");
		 $(".closep").css("cursor","pointer");
		 $(".closep").on("click",function(){
			 $(".panelp").remove();
		 })
		 document.cookie = `name=${name};`;
		 document.cookie = `email=${email}`
		 alert(document.cookie.toString());
	 }
}
export default PanelP;
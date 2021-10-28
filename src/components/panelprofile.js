import { Component } from "react";
import ReactDOM from 'react-dom';
import $, { data } from 'jquery';
import user from '../img/user.png';
import Cookies from 'universal-cookie';
import axios from "axios";
import Forms from "./forms";

class PanelP extends Component{
	constructor(props){
		super(props);
		this.daten = '';
	}
	state ={
		datai: [],
	}
	getData = async() =>{
		const res = await axios.get('https://db-coderx.herokuapp.com/users');
		this.setState({datai:  res.data});
		this.daten = res.data;
	}
     UI = (name,email,cover,confirm) =>{
		 this.getData()
		 $(".home").append(`
		   <div class="panelp">
		     <div class="container-fluid mains">
			   <div class="title d-flex justify-content-between align-items-center p-2">
			     <h2 id="adm" class="text-light">administrator</h2>  
				 <h1 class="text-danger closep">X</h1>
			   </div>
			   <div class="d-flex m-4">
			   <img src=${cover} id="koder"/>
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
			 <div class="foot d-flex m-5 align-items-center justify-content-between">
			   <section class="d-flex align-items-center">
			   <img class="imguser" src=${user} style="width:70px !important"/> 
			   <h4 class="m-3 text-light" style="font-family: emoji">member</h4> 
			   </section>
			   <section class="d-flex align-items-center">
			     <div class="closes bg-body m-4 d-flex align-items-center p-2"><span class=" material-icons m-2">logout</span><h4>close session</h4></div>
				 <div class="delete bg-light d-flex align-items-center p-2"><span class=" material-icons m-2">backspace</span><h4>delete account</h4></div>  
			   </section>
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
		 $(".closes").css("cursor","pointer");
		 $(".delete").css("cursor","pointer")
		 if(confirm == false)
		  $(".foot").css("width","90%");
		  const cookies = new Cookies();
		  cookies.set('name',name,{path: '/'})
		  cookies.set('email',email,{path: '/'})
		$(".closes").on("click",()=>{
			cookies.set("name","",{path: '/'});
			cookies.set("email","",{path: '/'});
			cookies.set("cover","",{path: '/'});
			$(".profile").remove();
			$(".panelp").remove();
		})
		$(".delete").on("click",()=>{
			this.delete(cookies,name)
		}	
		)
	}
	delete = (cookies,name) =>{
		$(".panelp").append(`
		  <div class="confirm"></div>
		`);
		ReactDOM.render(
			<div className="draw">
              <div className="title d-flex justify-content-center">
				  <h2>Warning</h2>
			  </div>
			  <h4>you are sure that you want to delete your account and not belong to the coderx developers community</h4>
			  <div className="buttons d-flex m-2">
				  <button className="btn btn-primary" id="acept">Accept</button>
				  <button className="btn btn-primary" id="cancel">Cancel</button>
			  </div>
			</div>,
			document.querySelector(".confirm")
		);
		$(".confirm").css("position","fixed");
		$(".confirm").css("top","40%");
		$(".confirm").css("left","2%");
		$(".confirm").css("background","#FFFFFFEA");
		$(".confirm").css("margin","0 3%");
		$(".confirm > .draw > .title").css("background","#EEEE3050");
		$(".confirm > .draw > .title > h2").css("font-family","fantasy");
		$(".confirm > .draw > h4").css("margin","3%");
		$(".buttons").css("justify-content","center");
		$(".buttons > .btn").css("margin","0 5%");
		$(".buttons").css("7% 0");
		$("#acept").on("click",()=>{
			let index = 0;
		    let b = 'F';
		    let id = 0;
			for(var i = 0; i<this.daten.length; i++){
				if(this.daten[i].name == name){
					index = i;
					b = 'V';
				}
			}
		    if(b == 'V'){
			   id = this.daten[index]._id;
		    }
			axios.delete('https://db-coderx.herokuapp.com/users/'+id)
               cookies.set("name","",{path: '/'});
			   cookies.set("email","",{path: '/'});
			   cookies.set("cover","",{path: '/'});
			   $(".profile").remove();
			   $(".panelp").remove();
		})
		$("#cancel").on("click",()=>{
           $(".confirm").remove();
		})
	}
}
export default PanelP;
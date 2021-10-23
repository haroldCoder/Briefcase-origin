import { Component } from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';
import PanelP from "./panelprofile";
import Cookies from "universal-cookie";
import '../index'

class Profile extends Component{
	constructor(props){
		super(props);
		this.cookie = new Cookies();
	}
    UI = (name,email,conf,cover) =>{
		$(".navbar").append(`
			  <div class="profile"></div>
		`);
		let profilep = new PanelP();
		let cookie = this.cookie.get("cover");
		alert(cover)
		   ReactDOM.render(
			 <img src={cover} style={{width: '70px', height: '70px'}} onClick={()=>profilep.UI(name,email,this.cookie.get("cover"),conf)}/>,
			 document.querySelector(".profile")
		   );
	}
}

export default Profile;
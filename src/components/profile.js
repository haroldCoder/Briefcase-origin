import { Component } from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';
import PanelP from "./panelprofile";
import Cookies from "universal-cookie";

class Profile extends Component{
    UI = (name,email,conf) =>{
		$(".navbar").append(`
			  <div class="profile"></div>
		`);
		let profilep = new PanelP();
		let cookie = new Cookies();
		$(".input").remove();
		   ReactDOM.render(
			 <img src={cookie.get('cover')} style={{width: '70px', height: '70px'}} onClick={()=>profilep.UI(name,email,cookie.get("cover"),conf)}/>,
			 document.querySelector(".profile")
		   );
		$(".profile").css("margin","4%");
	}
}

export default Profile;
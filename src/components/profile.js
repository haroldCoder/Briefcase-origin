import { Component } from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';
import PanelP from "./panelprofile";

class Profile extends Component{
	cover = (name,email) =>{
		let profilep = new PanelP();
		 let preview = new FileReader();
		 let fileinput = document.getElementById('cover').files[0]
		 preview.onload=function(e){
		   ReactDOM.render(
			 <img src={e.target.result} style={{width: '70px', height: '70px'}} onClick={()=>profilep.UI(name,email)}/>,
			 document.querySelector(".profile")
		   );
		 }
		 preview.readAsDataURL(fileinput);
		 $(".profile").css("margin","4%");
	 }
    UI = (name,email) =>{
		$(".navbar").append(`
			  <div class="profile"></div>
		`);
		ReactDOM.render(
		   <form className="m-5">
		     <div id="div_file">
				 <h1 id="text">+</h1>
               <input type="file" id="cover" onChange={()=>this.cover(name,email)}/>
		     </div>
		   </form>,
		   document.querySelector(".profile")
		);
	}
}

export default Profile;
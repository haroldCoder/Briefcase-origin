import { Component } from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';
import instagram from '../img/intagram.png';
import gmail from '../img/gmail.jpg';
import {Link} from 'react-router-dom';

class Netwoks extends Component{
	componentDidMount(){
		this.Update();	
	}
	componentWillUpdate(){
		this.Update();
	}
	render(){
		return(
          <div className="netw">
			  <div className="container-fluid">
				  <div className="row">
					  <h2>Social Networks</h2>
					  <div className="social col-md-8">
						  <a href="https://www.facebook.com/profile.php?id=100073088183904"><img src="https://th.bing.com/th/id/R.44be1ccd70f33558088c75756c331dd3?rik=obWhSUs9OD8N6Q&riu=http%3a%2f%2fwebiconspng.com%2fwp-content%2fuploads%2f2017%2f09%2fFacebook-PNG-Image-71244.png&ehk=9AaV7CUb575XTt5lPh1owu31HZuPryRA6MWUCGCQH5Q%3d&risl=&pid=ImgRaw&r=0" alt="facebook" /></a>
						  <a href="https://www.instagram.com/koder_alvarez/"><img src={instagram} alt="instagram" /></a>
						  <a href="https://mobile.twitter.com/AlvarezKoder"><img src="https://www.bluestarprogramme.ie/wp-content/uploads/2019/08/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.jpg" alt="twitter" /></a>
						  <a href="https://mail.google.com/mail/u/3/#inbox"><img src={gmail} alt="gmail" /></a>
						  <a href="https://www.linkedin.com/in/el-programador-skrt-816180216/"><img src="https://th.bing.com/th/id/R.cd1a6aa1bd55005a5cb35b4f7b532a80?rik=7vOoGpvCEos1fA&riu=http%3a%2f%2fwww.marketing-branding.cl%2fwp-content%2fuploads%2f2014%2f02%2flinkedin-logo-marketingbuilding.png&ehk=sDxGPgVNC30Yg%2b5XDCERFlFFPGTALU1pqZfljSlxMw0%3d&risl=&pid=ImgRaw&r=0" alt="linkedin" /></a>
						  <a href="https://github.com/haroldCoder"><img src="https://th.bing.com/th/id/R.b1eaccc798fd2e17c3755be59e26bb79?rik=0Rgheq5x%2fZZjOg&riu=http%3a%2f%2fpngimg.com%2fuploads%2fgithub%2fsmall%2fgithub_PNG67.png&ehk=%2bieeaMydR5VEGX9NcBNMb6dUHzUmz2vZg4Gk34O0qKQ%3d&risl=&pid=ImgRaw&r=0" alt="github" /></a>
					  </div>
				  </div>
			  </div>
		  </div>
		);
	}
	Update(){
		$(".panel > .netw").css("width","80%");
		$(".panel > .netw").css("height","73vh");
		$(".panel > .netw").css("background","#00000040");
		$(".panel > .netw").css("margin","9vh 20vh");
		$(".panel > .netw").css("margin-bottom","0%");
        $(".social > a > img").css("width","20%");
		$(".social > a > img").css("height","16vh");
		$(".social > a > img").css("border-radius","5%");
		$(".social > a > img").css("margin-right","10%");
		$(".social > a > img").css("margin-bottom","7%");
		$(".row > h2").css("text-align","center");
		$(".row > h2").css("color","#20BBEE");
		$(".row > h2").css("font-size","90.em");
		$(".social").css("margin","6% 19%");
		$(".row > h2").css("font-family","fantasy")
		$(".row > h2").css("margin-top","20px")
	}
}
export default Netwoks; 
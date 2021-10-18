import { Component } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';
import contact from '../img/contact.png';
import Profile from "./profile";
import PanelP from "./panelprofile";
import Cookies from "universal-cookie";

class Forms extends Component{
	constructor(props){
		super(props);
		this.profile = new Profile(); 
	}
	state = {
		intro: 'Register',
		end: 'Login',
		name: '',
		email: '',
		password: '',
		data: []
	}
	componentDidMount(){
	  if($(".input").length > 0)
       this.RequireData();
	   this.style()
	}
	componentDidUpdate(){
		if($(".input").length > 0)
		  this.RequireData()
		  this.style()
	}
	style = () =>{
		$(".form > form > input").css("border","none");
		  $(".form > form > input").css("border-bottom","2px solid #00FFAF");
		  $(".form > form > input").css("background","none");
		  $(".form > form > input").css("width","100%");
		  $(".form > form > input").css("box-shadow","0px 2px 0px 0px #00e8ff");
		  $(".form > form > input").css("margin-bottom","8.5%");
		  $(".form > form > h2").css("color","rgb(111 248 255)");
		  $(".form > form > h2").css("font-family","emoji");
		  $(".form > h1").css("text-align","center");
		  $(".form > h1").css("font-family","fantasy");
		  $(".form > h1").css("color","#FFEEFF");
		  $(".form > h1").css("margin","10px 0");
		  $(".form").css("padding","0 7% 0 7%");
		  $("form > .btn").css("margin","0 10%");
		  $("form > .btn").css("width","80%");
		  $("form > .btn").css("height","25%");
		  $(".form > footer > h5").css("color","#888");
		  $(".form > footer").css("margin","6%")
		  $(".form > footer").css("width","100%")
		  $(".form > footer > h3").css("color","#20CEEF");
		  $(".form > footer > h3").css("font-family","initial");
		  $(".form > footer > h3").css("cursor","pointer");
		  $(".form > footer > h3").css("margin","0 20%");
		  $(".form > footer > h3").css("margin-right","0");
		  $(".form > form > button").eq(1).css("width","80%")
		  $(".form > form > button").eq(1).css("margin","1% 10%")
		  $(".form > form > button").eq(1).css("justify-content","center");
	}
	RequireData = async() =>{
		const res = await axios.get('http://localhost:8080/api/users');
		this.setState({data: res.data});
	}
	Press = () =>{
		if(this.state.intro == "Register"){
		    this.setState({intro: 'Login'});
		    this.setState({end: 'Register'});
		}
		else{
			this.setState({intro: 'Register'});
		    this.setState({end: 'Login'});
		}
	}
	onChangeName = (e) =>{
        this.setState({name: e.target.value});
	}
	onChangeEmail = (e) =>{
		this.setState({email: e.target.value});
	}
	onChangePassword = (e) =>{
		this.setState({password: e.target.value});
	}
	submitData = async(e) =>{
		if(this.state.name != '' && this.state.email != '' && this.state.password != ''){
			e.preventDefault();
			if(this.state.intro == "Register")
			   this.succesR(this.state.name,this.state.email,this.state.password);
			else
			   this.succesL(this.state.email,this.state.password);
		}
		else{
			e.preventDefault()
			alert("filds all fields")
		}
	}
	windowRegister = (name,email) =>{
		ReactDOM.render(
			<div className="rpanel">
				<div className="title">
					<h1>Welcome {name}</h1>
					<img src={contact} alt="contact"/>
				</div>
				<h5>your account with email <span>{email}</span> has been registered correctly thanks
					 for being part of corderx</h5>
					 <button className="btn btn-primary">Accept</button>
			</div>,
			document.querySelector('.form')
		);
	}
	windowLogin = (name,color,messagge) =>{
		$(".home").append(`
		 <div class="${color}">
		  <h2>${messagge}${name}</h2>
		 </div>
		`)
	}
	succesL = (email,password) =>{
		let index = 0;
		let b = 'F';
		for(let i = 0; i<this.state.data.length; i++){
			if(this.state.data[i].email == email && this.state.data[i].password == password){
				index = i;
				b = 'V';
			}
		}
		if(b == 'V'){
			this.profile.UI(this.state.data[index].name,email,true);
			this.windowLogin(this.state.data[index].name,"win bg-success d-flex","welcome ");
		}
		else{
			this.windowLogin(this.state.data[index].name,"win bg-danger d-flex","User no register ");
		}
		$(".win").css("padding","10px 10px");
		$(".win").css("position","absolute");
		$(".win").css("top","20%");
		$(".win").css("left","26%");
		$(".win").css("width","50%");
		$(".win").css("justify-content","center")
		$(".win > h2").css("font-family","fantasy");
		$(".win > h2").css("color","#FFF");
		$(".win").fadeOut(4000,()=>{
			$(".win").remove()
		})
	}
	succesR = (name, email, password) =>{
		let index = 0;
		let b = 'F';
		for(let i = 0; i<this.state.data.length; i++){
			if(this.state.data[i].name == name || this.state.data[i].email == email){
				index = i;
				b = 'V';
			}
		}
		if(b == 'V'){
			alert("user exist");
		}
		else{
			this.windowRegister(name,email);
			this.profile.UI(name,email,false);  
			$(".rpanel").css("background","#000118e8");
			$(".rpanel").css("height","100%");
			$(".form").removeClass("container");
			$(".rpanel > .title").css("width","100%");
			$(".rpanel > .title > h1").css("text-align","center");
			$(".rpanel > .title > h1").css("font-family","fantasy");
			$(".rpanel > .title > h1").css("color","#777");
			$(".rpanel > .title > img").css("margin","2% 25%");
			$(".form").css("padding","0 0");
			$(".panel").css("height","100%");
			$(".draw").css("height","93%");
			$(".form").css("height","100%");
			$(".rpanel > h5").css("margin","5% 4%")
			$(".rpanel > .btn").css("margin","6% 35%");
			$(".rpanel > .btn").css("width","26%");
			$(".rpanel > .btn").on("click",()=>{
				$(".input").remove();
			})
			$(".rpanel > h5 > span").css("color","#30CCFF");
			this.windowRegister(name,email)
			axios.post('http://localhost:8080/api/users',{
				name: name,
				email: email,
				password: password
			})
		}
	}
	Ui = () =>{
		if(this.state.intro == "Register")
		  return(
			<div className="form container">
			<h1>{this.state.intro}</h1>
			<form onSubmit={this.submitData}>
				<h2>Name</h2>
				<input type="text" className="inp" id="name" value={this.state.name} onChange={this.onChangeName}/>
				<h2>E-mail</h2>
				<input type="text" className="inp" id="email" value={this.state.email} onChange={this.onChangeEmail}/>
				<h2>Password</h2>
				<input type="password" className="inp" id="password" value={this.state.password} onChange={this.onChangePassword}/>
				<button className="btn btn-primary" type="submit">{this.state.intro}</button>
				<GoogleLogin
				 clientId="709295496820-5vr1gvn7iskih8ccrjji5vc0ijq5pant.apps.googleusercontent.com"
				 buttonText="Login"
				 onSuccess={this.responseGoogle}
				 onFailure={this.responseGoogle}
				 cookiePolicy={'single_host_origin'}
				 isSignedIn={true}
			   />
			</form>
			<footer>
				<h3 onClick={this.Press}>you are going to <b id="log">{this.state.end}</b></h3>
				<h5>Copyright ©Coderx Development 2021</h5>
			</footer>
	       </div>
		  );
		else{
		 return(
			<div className="form container">
			<h1>{this.state.intro}</h1>
			<form onSubmit={this.submitData}>
			    <h2>Name</h2>
				<input type="text" className="inp" id="name" value={this.state.name} onChange={this.onChangeName}/>
				<h2>E-mail</h2>
				<input type="text" className="inp" id="email" value={this.state.email} onChange={this.onChangeEmail}/>
				<h2>Password</h2>
				<input type="password" className="inp" id="password" value={this.state.password} onChange={this.onChangePassword}/>
				<button className="btn btn-primary" type="submit">{this.state.intro}</button>
				<GoogleLogin
				 clientId="709295496820-5vr1gvn7iskih8ccrjji5vc0ijq5pant.apps.googleusercontent.com"
				 buttonText="Login"
				 onSuccess={this.responseGoogle}
				 onFailure={this.responseGoogle}
				 cookiePolicy={'single_host_origin'}
				 isSignedIn={true}
			   />
			</form>
			<footer>
				<h3 onClick={this.Press}>you are going to <b id="log">{this.state.end}</b></h3>
				<h5>Copyright ©Coderx Development 2021</h5>
			</footer>
	       </div>
		 );
		}
	}
	render(){
		return(
		 <this.Ui/>
		)
	}
	responseGoogle = (res) =>{
		let cookie = new Cookies();
		if(this.state.intro == "Register"){
		  this.succesR(res.profileObj.name,res.profileObj.email);
		  cookie.set("cover",res.profileObj.imageUrl,{path: '/'});
		}
		else{
			cookie.set("name",res.profileObj.name,{path: '/'});
			cookie.set("email",res.profileObj.email,{path: '/'});
			cookie.set("cover",res.profileObj.imageUrl,{path: '/'});
			this.succesL(res.profileObj.email,res.profileObj.password);
			
		}
	}
}
export default Forms;
import { Component } from "react";
import ReactDOM, { render } from "react-dom";
import $ from "jquery";
import Forms from "./forms";
import react from '../img/react.png';
import angular from '../img/angular.png';
import mongo from '../img/mongodb.png';
class Intro extends Component{
	render(){
		return(
			<div className="inel">
				<section className="title">
					<h1>INTRO</h1>
				</section>
				<section className="intro">
					<h5>you want to belong to coderx developers great, if you know
						 how to handle html or php javascript and css you can be part
						  of our community of developers</h5>
					<div className="container">
						<div className="box frame">
							<h2>main frameworks</h2>
							<section className="d-flex">
								<img src={react} alt="react" className="imgi"/>
								<img src={angular} alt="angular" className="imgi"/>
							</section>
						</div>
						<div className="box data">
							<h2>main database</h2>
							<section className="d-flex">
								<img src={mongo} alt="mongodb" className="imgi"/>
							</section>
						</div>
					</div>
					<div className="buttons d-flex">
						<button className="btn btn-primary" id="accept">Accept</button>
						<button className="btn btn-primary" id="cancel">Cancel</button>
					</div>
				</section>
			</div>
		);	
		}
}
class Contact extends Component{
	UI = () =>{
		ReactDOM.render(
			<section className="panel">
				<div className="title d-flex container-fluid">
					<h2 id="title">SERVICES</h2>
					<h3 className="close">X</h3>
				</div>
				<div className="draw">
					<Intro/>
				</div>
			</section>,
			document.querySelector('.input')
		)
		$(".inel").css("width","100%")
		$(".inel > .title > h1").css("width","100%");
        $(".inel > .title > h1").css("height","8%");
		$(".inel > .title").css("background","#CCCCCC35");
		$(".inel > .title > h1").css("font-family","fantasy");
		$(".inel > .title > h1").css("position","relative");
		$(".inel > .title > h1").css("left","37%");
		$(".inel > .title > h1").css("color","#FFFFFFA9");
		$(".inel > .intro > h5").css("margin","3% 4%");
		$(".inel > .intro > h5").css("font-family","Staatliches");
		$(".inel > .intro > h5").css("color","#000");
		$(".inel > .intro > h5").css("font-size","29px");
		$(".box > h2").css("background","#00000075");
		$(".box > h2").css("color","#30CDFF");
		$(".box > h2").css("margin","3% 0");
		$(".box").css("margin","4% 0");
		$(".intro > .container > .data").css("width","100%")
		$(".imgi").css("margin","0 4%");
		$(".imgi").css("width","25vh");
		$(".imgi").css("height","25vh");
		$(".box > .d-flex").css("justify-content","center");
		$(".buttons").css("width","100%");
		$(".buttons").css("justify-content","center");
		$(".buttons > .btn").css("margin","4% 4%");
		$("#title").css("color","#00ff95");
		$(".input > .panel > .title > h3").css("color","#EF4040");
		$(".input > .panel > .title > h3").css("font-size","40px");
		$(".input > .panel > .title").css("justify-content","space-between");
		$(".input > .panel > .title").css("align-items","end");
		$("#title").css("font-family","Staatliches");
		$("#title").css("font-size","35px");
		$(".input > .panel > .title").css("background","#E1E1E1AA");
		$(".close").css("cursor","pointer");
        $(".close").on("click",()=>{
			$(".input").remove();
		});
		$("#accept").on("click",()=>{
			ReactDOM.render(
				<Forms/>,
				document.querySelector('.draw')
			);
		})
		$("#cancel").on("click",()=>{
			$(".input").remove();
		})
	}
	Update = () =>{
		$(".panel").append(`
		 <div class="input"></div>
		`);	
	 this.UI();
	}
}
export {Contact};
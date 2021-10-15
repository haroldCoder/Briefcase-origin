import { Component } from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';
import c from '../img/c.png';
import csharp from '../img/csharp.png';
import cmas from '../img/c++.png';
import css from '../img/css.png';
import html from '../img/html.png';
import java from '../img/java.png';
import js from '../img/js.png';
import python from '../img/python.png';
import react from '../img/react.png';
import angular from '../img/angular.png';
import mongo from '../img/mongodb.png'
		
class Abilities extends Component{
	constructor(props){
		super(props)
		this.leguajes = [
           {
			   name: "c++",
			   cover: cmas,
			   type: "program"
		   },
		   {
			   name: "c",
			   cover: c,
			   type: "program"
		   },
		   {
			   name: "c#",
			   cover: csharp,
			   type: "program"
		   },
		   {
			   name: "css",
			   cover: css,
			   type: "web"
		   },
		   {
			   name: "html",
			   cover: html,
			   type: "web"
		   },
		   {
			   name: "java",
			   cover: java,
			   type: "program"
		   },
		   {
			   name: "javascript",
			   cover: js,
			   type: "web"
		   },
		   {
			   name: "python",
			   cover: python,
			   type: "program"
		   },
		   {
			   name: "react",
			   cover: react,
			   type: "frame"
		   },
		   {
			   name: "angular",
			   cover: angular,
			   type: "frame"
		   },
		   {
			   name: "mongodb",
			   cover: mongo,
			   type: "datab"
		   }
		];
	}
	render(){
		let programs = this.leguajes.filter(e=>{
			if(e.type == "program")
			  return e;
		})
		let web = this.leguajes.filter(e=>{
			if(e.type == "web"){
				return e;
			}
		})
		let framew = this.leguajes.filter(e=>{
			if(e.type == "frame"){
				return e;
			}
		})
		let database = this.leguajes.filter(e=>{
			if(e.type == "datab")
			  return e;
		})
		return(
			<div className="lpanel container">
				<h2>programming languages</h2>
					<div className="lenp d-flex">
						{	
							programs.map(e=>(
								<div className="card">
									<div className="imgs">
										<img src={e.cover} alt={e.cover} />
									</div>
									<h2>{e.name}</h2>
								</div>
							))
						}
					</div>
					<h2>developer web</h2>
					<div className="lenp d-flex" id="web">
						{
							web.map(e=>(
								<div className="card">
									<div className="imgs">
										<img src={e.cover} alt={e.cover} />
									</div>
									<h2>{e.name}</h2>
								</div>
							))
						}
					</div>
					<h2>Frameworks</h2>
					<div className="lenp d-flex" id="web">
						{
							framew.map(e=>(
								<div className="card">
									<div className="imgs">
										<img src={e.cover} alt={e.cover} />
									</div>
									<h2>{e.name}</h2>
								</div>
							))
						}
					</div>
					<h2>Database</h2>
					<div className="lenp d-flex" id="web">
						{
							database.map(e=>(
								<div className="card">
									<div className="imgs">
										<img src={e.cover} alt={e.cover} />
									</div>
									<h2>{e.name}</h2>
								</div>
							))
						}
					</div>
			</div> 
		)
	}
	componentDidMount(){
		$(".lpanel").css("width","100%");
		$(".lpanel").css("height","auto");
		$(".lpanel").css("margin-top","5%");
		$(".panel").css("margin","0 0%")
		$(".lpanel").css("background","##a9a9a921");
		$(".lpanel").css("padding","0 5% 50px 5%");
		$(".lenp").css("width","auto");
		$(".lenp").css("height","20%");
		$(".lenp").css("background","#000000");
		$(".lenp").css("flex-wrap","wrap");
		$(".lenp").css("margin-top","2%");
		$(".lenp").css("justify-content","space-evenly");
		$(".lenp > .card > .imgs > img").css("width","100%");
	    $(".lenp > .card > .imgs > img").css("height","100%");
		$(".lenp > .card > .imgs > img").css("border-radius","5%");
		$(".lenp > .card > .imgs").css("margin","3% 8%");
		$(".lenp > .card").css("margin","2% 0");
		$(".lenp > .card").css("border-radius","10px");
		$(".lenp > .card").css("width","16%");
		$(".lenp > .card > h2").css("text-align","center");
		$(".lenp > .card > h2").css("color","#10DFFF");
		$(".lpanel > h2").css("font-family","Staatliches");
		$(".lpanel > h2").css("color","#7B7B7B");
		$(".lpanel > h2").css("margin","2% 0");
	}
}
export default Abilities;
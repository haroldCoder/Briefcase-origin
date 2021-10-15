import { Component } from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Modal } from "bootstrap";
import coder from '../img/coder.png';
import axios from 'axios';
import Koder from '../img/coder.png';
import coder2 from '../img/koder2.png';

class Home extends Component{
	constructor(props){
		super(props);
	}
	Count = () =>{
			if(this.state.word == "koder"){
			setTimeout(()=>{
			this.setState({word: "developer"});
		},1500)
	    }
	       if(this.state.word == "developer"){
	       	setTimeout(()=>{
	       	this.setState({word: "koder"});
	       },1500)
	    }	
	}
	state = {
		name: "",
		lastname: "",
		cel: "",
		reside: "",
		exp: "",
		word: "koder"
	}
	componentDidMount(){
		this.getKode();
	}	
	componentDidUpdate(){
		if(2 == 2)
		  this.Count()
	}
	getKode = async() =>{
		const res = await axios('http://localhost:8080/api/koder');
		this.setState({name: res.data[0].name,
			lastname: res.data[0].lastname,
			cel: res.data[0].cel,
			reside: res.data[0].reside,
			exp: res.data[0].exp
	    })
	}
	render(){
		return(
               <div className="home"> 
				   <section className="info d-flex">
					 <div className="block">
                     <div className="present d-flex">
						 <div className="img">
							 <img src={coder} id="coder"/>
						 </div>
						 <div className="data container">
							 <div className="column">
								 <h4>Name: {this.state.name}</h4>
								 <h4>Last name: {this.state.lastname}</h4>
								 <h4>Cel: {this.state.cel}</h4>
								 <h4>Recides: {this.state.reside}</h4>
								 <h4>Experience: {this.state.exp}</h4>
							 </div>
						 </div>
					 </div>
					 <div className="present info2">
						 <h1>Coderx developers</h1>
						 <div className="intro2">
							 <h2>What is coderx developers?</h2>
							 <h3>coderx developers is a group of developers who have skills such as web machine learning and desktop development what this group does is the function
								 of creating applications and programs in the skills mentioned for the satisfaction and need of the client.</h3>
						 </div>
						 <div className="imgs d-flex">
							 <img src={Koder} alt="koder" />
							 <img src={coder2} alt="coderx" />
					    </div>
						<div className="intro2">
							<h2>what talents does coderx developers have?</h2>
							<h3>In this group of developers we have various knowledge, such as knowing programming <img src="https://www.extradigital.es/wp-content/uploads/2020/01/web-marketing-digital-segovia.jpg" alt="developer" id="dev"/> from the basics to the advanced, this helps us make applications and
							    programs more algorithmic and functional, we also have extensive knowledge in development combining logic with design.</h3>
						</div>
                    </div>
					</div>
					<section className="responsive">
					   <div className="col-md-4">
						   <h1 id="word" className="h6" lang="en">I am {this.state.word}.</h1>
					  </div>
					  <div className="intro">
					  <h2>Koder developer.</h2>
					  <h3><b>speaking a little about the biography of harold castaño, creator of the company coderx developers, it can be said that he is a person with experience in programming and software development for 4 years knowing multiple languages ​​to program with various web projects <br/><span id="see">see more</span></b></h3>
					  </div>
				   </section>
				   </section>
				   <footer>
					   <h1>Copyright ©Coderx Development 2021</h1>
				   </footer>
			   </div>
		);
	}
	componentWillUpdate(){
		$(".home").css("height","100%");
		$(".info2").css("margin-top","1%");
		$(".info2").css("margin-left","1%");
		$(".info2 > h1").css("text-align","center");
		$(".info2 > h1").css("color","#40CEFF");
		$(".intro2").css("margin","5% 1.5%");
		$(".intro2 > h2").css("color","#30EEFF");
		$(".intro2 > h3").css("color","#000");
		$(".intro2 > h2").css("font-family","'Staatliches', cursive");
		$("#word").css("color","#08dbfd");
		$("#word").css("width","100%")
		$("#word").css("text-align","center");
		$("#word").css("padding","2% 0 0 0");
		$("#word").css("text-shadow","20px 20px 6px #FFF");
		$(".imgs > img").css("width","65px");
		$(".imgs > img").css("height","65px");
		$(".imgs > img").css("border-radius","50%");
		$(".imgs").css("justify-content","center");
		$(".imgs > img").css("margin","20px 10px");
		$("#dev").css("width","280px");
		$("#dev").css("height","200px");
		$("#dev").css("float","right");
		$("#dev").css("margin","15px 15px");
		$(".home > footer").css("text-align","center");
		$(".home > footer").css("background","#FFFFFFBF");
		$(".home > footer").css("padding","12px 12px 12px 12px");
		$(".home > footer").css("color","#00021d");
		$(".responsive > .intro > h2").css("color","#30EFFE");
		$(".responsive > .intro > h2").css("margin","0 0");
		$(".responsive > .intro > h2").css("margin-bottom","5%");
		$(".responsive > .intro > h2").css("font-family","fantasy");
		$(".responsive > .intro > h2").css("font-size","40px");
		$(".responsive > .intro > h3 > b").css("color","#FCFCFC");
		$(".responsive > .intro").css("width","70%");
		$(".responsive > .intro").css("height","auto");
		$(".responsive > .intro").css("overflow","hidden");
		$(".responsive > .intro").css("margin","18% 10%");
		$(".responsive > .intro").css("background","#FFFFFF4A");
		$(".responsive > .intro > h2").css("text-align","center");
		$(".responsive > .intro").css("padding","20px 0 0 12px");

		$(".responsive > .intro > h3 > b > span").one("click",()=>{
			$(".responsive > .intro").css("height","auto");
			$(".responsive > .intro > h3 > b").append(`
			including this portfolio.
			is willing to serve all types of clients with its knowledge to solve needs in the following menu all the knowledge and tools with which it works are exposed in depth
			`);
			$("#see").remove();
		})
		$("#see").css("color","#30EFFF");
		$("#see").css("font-size","20px");
		$("#see").css("cursor","pointer");
	}
}
export default Home;
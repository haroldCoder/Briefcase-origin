import { Component,React } from "react";
import ReactDOM, { render } from 'react-dom';
import koder from '../img/koder2.png'
import {Link} from 'react-router-dom';
import $ from 'jquery';
import {Contact} from "./contact.js";

function i(){
	new Contact().Update()
}
class Navigation extends Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		let contact = new Contact();
	}
    render(){
		return(
		     <nav className="navbar d-flex">
				<img src={koder}/>
               <div className="content d-flex">
                   <Link to="/"><h2 className="h1">HOME</h2></Link>
				   <Link to="/abilities"><h2 className="h1">ABILITIES</h2></Link>
				   <Link to="/networks"><h2 className="h1">NETWORKS</h2></Link>
		       </div>
			   <div className="contact" onClick={i}>
				   <span class="material-icons mess">forum</span>
			   </div>
		     </nav>
		)
	}
}
export default Navigation;
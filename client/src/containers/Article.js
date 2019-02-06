import React from 'react';
import moment from "moment";


const article = (props) => (
	<div className="Articledis">
	    <div className="Article">
	       <div> 
	       		<h1 className="title" onClick={props.clicked}>{props.title}</h1>
	       </div>
	       <br></br>
	          <div onClick={props.clicked}>Author: {props.author}</div>
	
	        <div onClick={props.clicked}>Date: { moment(props.created_at).format('MMMM Do YYYY') }</div>
	     	</div>
	     	<br></br>
	        <div>
	        <img src={props.image} alt="image" />
	        </div>
	        <br></br>

	  </div>

);

export default article;


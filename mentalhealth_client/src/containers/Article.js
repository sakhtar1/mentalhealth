import React from 'react';
import moment from "moment";


const article = (props) => (

	<div className="Articledis">
	    <div className="Article">
	       <div> 
	       		<h1 className="title" onClick={props.clicked}>{props.title}</h1>
	       </div>
	          <div onClick={props.clicked}>Author: {props.author}</div>
	          <br></br>
	          <div onClick={props.clicked}><p>{props.likes} Likes</p></div>
		
	        <div onClick={props.clicked}>Date: { moment(props.created_at).format('MMMM Do YYYY') }</div>
	     	</div>
	     	<br></br>
	        <div onClick={props.clicked}>
	        <img src={props.image} />
	        </div>
	        <br></br>

	  </div>

);

export default article;


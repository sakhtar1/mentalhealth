import React from 'react';



const article = (props) => (
	<div className="Articledis">
	    <div className="Article">
	       <div> 
	       		<h1 className="title" onClick={props.clicked}>{props.title}</h1>
	       </div>
	       <br></br>
	          <div onClick={props.clicked}>Author: {props.author}</div>
	        </div>
	  </div>

);

export default article;


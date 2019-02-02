import React from 'react';



const article = (props) => (
	<div className="Articledis">
	    <div className="Article">
	       <div> 
	       		<h1 className="title" onClick={props.clicked}>{props.title}</h1>
	       </div>
	       <br></br>
	        <div>
	            <div>
	            	<h3 className="column">{props.content}</h3>
	            </div>
	            <br></br>
	          <div>Author: {props.author}</div>
	        </div>
	    </div>
	  </div>

);

export default article;


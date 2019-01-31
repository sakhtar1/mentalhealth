import React from 'react';


const article = (props) => (
	<div>
		All Articles
	    <div className="Article" onClick={props.clicked}>
	        <h3>{props.title}</h3>
	        <div>
	            <div className="Content">{props.content}</div>
	            <div>{props.author}</div>
	        </div>
	    </div>
	  </div>

);

export default article;


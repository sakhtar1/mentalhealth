import React from 'react';


const articles = (props) => (
	<div>
		All Articles
	    <div className="Article" onClick={props.clicked}>
	        <h3>{props.title}</h3>
	        <div className="Info">
	            <div className="Content">{props.content}</div>
	        </div>
	    </div>
	  </div>

);

export default articles;



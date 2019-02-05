import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = (props) => {
  return(
    <div class="header" id="toprow">
      <nav className="sticky"> 
        <ul>
          <li><NavLink to='/'>Mental Health</NavLink></li>
          <li><NavLink to='/health'>Health</NavLink></li>
          <li><NavLink to='/articles'>Articles</NavLink></li>
          <li><NavLink to={{pathname: '/new-article'}}>Add Article</NavLink></li>
          <li className="loginnav"><NavLink to='/login'>Login</NavLink></li>
          
        </ul>
      </nav>
    </div>
  )};

  export default Navigation
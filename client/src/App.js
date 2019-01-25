import React from 'react';
import { NavLink } from 'react-router-dom';
import Router from './Router';


const Navigation = (props) => 
<nav> 
  <ul className='header'>
    <li><NavLink to='/'>Mental Health</NavLink></li>
    <li><NavLink to='/health'>Health</NavLink></li>
    <li><NavLink to='/articles'>Articles</NavLink></li>
    <li><NavLink to={{pathname: '/new-article'}}>Add Article</NavLink></li>
    <li><NavLink to='/login'>Login</NavLink></li>
    
  </ul>
</nav>



const App = (props) => {
  return (
    <div className='page-container'>
      <Navigation />
      <Router />
   
      </div>
  );
};

export default App;


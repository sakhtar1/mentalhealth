import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Router from './Router';


const Navigation = (props) => 
<nav> 
  <ul className='header'>
    <li><NavLink to='/'>Mental Health</NavLink></li>
    <li><NavLink to='/Health'>Health</NavLink></li>
    <li><NavLink to='/articles'>Articles</NavLink></li>
    
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


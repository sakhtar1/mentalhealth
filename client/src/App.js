import React from 'react';
import { NavLink } from 'react-router-dom';
import Router from './Router';
import Footer from './components/Footer'
import './App.css';



const Navigation = (props) => {
  return(
    <div class="header">
      <nav className="sticky"> 
        <ul>
          <li><NavLink to='/'>Mental Health</NavLink></li>
          <li><NavLink to='/health'>Health</NavLink></li>
          <li><NavLink to='/articles'>Articles</NavLink></li>
          <li><NavLink to={{pathname: '/new-article'}}>Add Article</NavLink></li>
          <li class="active"><NavLink to='/login'>Login</NavLink></li>
          
        </ul>
      </nav>
    </div>
  )};



const App = (props) => {
  return (
    <div>
      <div className="header">
        <Navigation />
      </div>
      <div className='page-container'>
        <Router />
        <br></br>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;


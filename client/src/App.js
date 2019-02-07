import React from 'react';
import Router from './Router';
import Footer from './components/Footer'
import Navigation from './components/Header'
import './App.css';



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
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;


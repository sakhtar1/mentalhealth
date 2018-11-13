import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Health from '../components/Health';
import Article from '../components/Article';



const App = (props) => {
  return (
    <div>
      <NavBar />
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Health} />
          <Route exact path="/article" component={Article} />
        
        </React.Fragment>
      </Router>
    </div>
  );
};

export default App



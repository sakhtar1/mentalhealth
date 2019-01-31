import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react'
import { GoogleComponent } from 'react-google-location' 
import GoogleMapReact from 'google-map-react';
import Zip from 'react-zipcode'
import Bulma from 'bulma'


const Homepage = () => {

		  return (
		    <div className="column">
          <div className="column">
            <h1 className="title"> Mental Health </h1>
            
          </div>
          <div className="column">
            <p className="column"> Mental disordered are believed by most people as rare and something that can never happen to them
            or their family members. However, mental disorders are very common with an estimated 54 million Americans 
            suffering from a form of mental disorder in a given year. </p>
            <p className="column"> It is hard on a most families to prepare and cope with this.
            It can be physically and emotionally trying, and can make us feel vulnerable to the opinions and 
            judgments of others.</p>

            <p className="column">If you think you or someone you know may have a mental or emotional problem, it is important to remember there is hope and help.</p>
            <p className="column"> To get more information about your or someone you love's mental health... </p>
		       <p className="column"> Enter the zipcode for a mental health clinic near you: </p>
          </div>
          <div>
          <HomeComponent />
    				

      
            
          </div>
		       <br/>
		       <div>
		       	<SimpleMap />
            
		       </div>
		    </div>
		  );
		};

const API_KEY = 'AIzaSyD7E2A6vrmhI4LKrK5SKeYTkB-JZ2Zxtd8'  
 
class HomeComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
    };
  }

   placeSearch(google){
    var input = document.getElementById('search');
    var autocomplete = new google.maps.places.Autocomplete(input);
  }
 
  render() {
    return (
      <div className="column">
        <div className="field"> 
          <GoogleComponent
           
            apiKey={API_KEY}
            language={'en'}
            country={'country:us'}
            coordinates={true}
            //locationBoxStyle={'custom-style'}
            locationListStyle={'custom-style-list'}
            onChange={(e) => { this.setState({ place: e }) }} />
          </div>
        <button className="button is-primary">Search</button>
      </div>
 
    )
  } 
}
 
 
 
 

 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.730610,
      lng: -73.935242
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '75%' }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={40.730610}
            lng={-73.935242}
            text={'New York'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
	apiKey: ("AIzaSyD7E2A6vrmhI4LKrK5SKeYTkB-JZ2Zxtd8")
})(Homepage)
import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react'
import GoogleMapReact from 'google-map-react';
import Zip from 'react-zipcode'


const Homepage = () => {

		  return (
		    <div>
		       <h1>Mental Health</h1>

		       <p> Enter the zipcode for a mental health clinic near you: </p>
				
				<input id="zip-val" type="text" name="zip" maxlength="5" placeholder="00000" class="yellow" data-text="" />		       	
		       <br/>
		       <div>
		       	<SimpleMap />
		       </div>
		    </div>
		  );
		};


 
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
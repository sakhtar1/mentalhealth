import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react'
import GoogleMapReact from 'google-map-react';
import Zip from 'react-zipcode'


const Homepage = () => {

		  return (
		    <div>
          <div>
            <h1> Mental Health </h1>
            </div>
          <div>
            <p> Mental disordered are believed by most people as rare and something that can nver happen to them
            or their family members. However, mental disorders are very common with an estimated 54 million Americans 
            suffering from a form of mental disorder in a given year. </p>
            <p> It is hard on a most families to prepare and cope with this.
            It can be physically and emotionally trying, and can make us feel vulnerable to the opinions and 
            judgments of others.</p>

            <p>If you think you or someone you know may have a mental or emotional problem, it is important to remember there is hope and help</p>
            <p> To get more information about your or someone you love's mental health... </p>
		       <p> Enter the zipcode for a mental health clinic near you: </p>
          </div>
          <div>
    				<select id="placetype">
              <option value="clinic">Mental Health Clinic</option>
              <option value="hospital">Hospital</option>
              <option value="urgentCare">Urgent Care</option>           
            </select>
      
            <button>&nbsp;Search&nbsp;</button>
          </div>
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
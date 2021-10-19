import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";


const Address = () => {
    return (
        <div>
            <Header></Header>
          {/*   {
             const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
                <Marker
                    position={{ lat: -34.397, lng: 150.644 }}
                />
            </GoogleMap>
            ));

            <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
          } */}

            <Footer></Footer>
        </div>
    );
};

export default Address;
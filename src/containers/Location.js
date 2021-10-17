import React, { Component, Link } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import Form from "../containers/Form";

const mapStyles = {
  width: "100%",
  height: "100%",
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 40.75901,
          lng: -73.984474,
        }}
      >
        <Marker onClick={this.onMarkerClick} name={"S Train - 42 Street"} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
            <button className="report-btn">Report</button>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCxA6wf8TZuf0QZc33nffiTS7VFAuD8Xls",
})(MapContainer);

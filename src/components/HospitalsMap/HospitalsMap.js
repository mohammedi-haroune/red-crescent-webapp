import React, {Component} from 'react';
import {Map, TileLayer, GeoJSON, Marker, Popup} from 'react-leaflet';
import algiers_hospitals from './hospitals.json';
import './HospitalsMap.css';

type State = {
  lat: number,
  lng: number,
  zoom: number,
}

export default class HospitalsMap extends Component<{}, State> {
  state = {
    lat: 36.7628,
    lng: 3.0531,
    zoom: 12,
  }

  render(){
    const position = [this.state.lat, this.state.lng];
    let markers = algiers_hospitals;

       return (
         <Map center={position} zoom={this.state.zoom} id="map">
           <TileLayer
             attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
           />


         {markers.map((value,index)=>{
           return (
             <Marker position={value.geometry.coordinates}>
              <Popup><h3>{value.properties.name}</h3></Popup>
            </Marker>
          )}
        )}
         </Map>
       )
  }
}

import React, {Component} from 'react';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import HospitalCard from './components/HospitalCard';
import algiers_hospitals from './hospitals.json';
import './MapHospitalsPage.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
type State = {
  lat: number,
  lng: number,
  zoom: number,
}

export default class MapHospitalsPage extends Component<{}, State> {
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

           <div style={{backgroundColor: 'transparent',position:'fixed', zIndex:'1000', top:'5px', right:'10px'}}>
             <Link to={"/"} style={{color: 'inherit'}}>
               <Button
                 color="inherit"
                 variant="contained"
                 href=""
                 style={{ textTransform:'capitalize', fontWeight:'1000', fontSize: '15px', padding:'5px'}}
               >
                 <span style={{color:'#f44336'}}>
                   <FavoriteIcon />
                 </span>
                 DonDe
                 <span style={{color:'#f44336'}}>
                   Sang
                 </span>
                 <ExitToAppIcon />
               </Button>
             </Link>
           </div>
           <TileLayer
             attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
           />


         {markers.map((hospital,index)=>{
           return (
             <Marker position={hospital.geometry.coordinates} key={index}>
              <Popup>
                <HospitalCard hospital={hospital.properties}/>
              </Popup>
            </Marker>
          )}
        )}
         </Map>
       )
  }
}

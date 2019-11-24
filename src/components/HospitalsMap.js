import React, {Component, Fragment} from 'react'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
import algiers_hospitals from '../data/hospitals.json'
import hash from 'object-hash'
import './HospitalsMap.css'
type State = {
  lat: number,
  lng: number,
  zoom: number,
  markers: Array<MarkerData>
}

type Position = [number, number]

type Props = {|content: string, position: Position,|}

type MarkerData = {| ...Props, key:string|}

const MyPopupMarker = ({content, position}: Props)=>(
  <Marker position={position}>
    <Popup>{content}</Popup>
  </Marker>
  )

  const MyMarkersList = ({markers}:{markers : Array<MarkerData>}) =>{
    const items = markers.map(({key, ...props}) =>
    { return <MyPopupMarker key={hash(content)} {...props} />
    })
    return <Fragment>{items}</Fragment>
  }

export default class HospitalsMap extends Component<{}, State> {
  state = {
    lat: 36.7628,
    lng: 3.0531,
    zoom: 12,
    markers: algiers_hospitals
  }

  render(){
    const center = [this.state.lat, this.state.lng]
    return (
      <Map center={center} zoom={this.state.zoom} id="map">
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      <MyMarkersList  markers={this.state.markers}/>

      </Map>

    )
  }
}

'use client'
import { MapContainer, Marker, Popup } from 'react-leaflet'
import { TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'
import { Details } from './location'

export default function Map({details} : {details : Details| null | undefined}){
    const customeIcon = new Icon({
        iconUrl : "https://cdn-icons-png.flaticon.com/512/447/447031.png",
        iconSize : [38,38]
      })
    return (
        <div className='w-[75vw] h-screen'>
          <MapContainer center={(details?.lat != undefined && details?.lon != undefined ) ? [details?.lat, details?.lon] : [0,40]} zoom={2} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={(details?.lat != undefined && details?.lon != undefined ) ? [details?.lat , details?.lon] : [50,50]} icon={customeIcon}>
              <Popup>
                {details?.country + " / " + details?.city}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
    )
}
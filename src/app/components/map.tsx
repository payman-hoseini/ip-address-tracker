'use client'
import { MapContainer, Marker, Popup } from 'react-leaflet'
import { TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'

export default function Map(){
    const customeIcon = new Icon({
        iconUrl : "https://cdn-icons-png.flaticon.com/512/447/447031.png",
        iconSize : [38,38]
      })
    return (
        <div className='w-[75vw] h-screen'>
          <MapContainer center={[51.025, 21.63]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.025, 21.63]} icon={customeIcon}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
    )
}
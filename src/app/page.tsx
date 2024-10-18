'use client'
import { MapContainer, Marker, Popup } from 'react-leaflet'
import { TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'
export default function Home() {
  const customeIcon = new Icon({
    iconUrl : "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    iconSize : [38,38]
  })
  return (
    <>
      <main className="max-w-[1440px] mx-auto">
        <div className="desBackground grid place-items-center pt-6 font-Rubik">
          <h1 className="text-white font-medium text-3xl">IP Address Tracker</h1>
          <div className="mt-5 w-[40%] flex items-center">
            <input type="text" placeholder="Search for any IP address or domain" className="w-[90%] py-3 px-4 rounded-l-xl outline-none"/>
            <button className="bg-Very-Dark-Gray py-[17px] px-5 rounded-r-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6"/></svg>
            </button>
          </div>
          <div className="mt-10 flex bg-white py-7 px-6 rounded-xl -mb-10 shadow-lg w-[70%] z-i ">
              <div className="pr-10 border-r border-r-gray-300">
                <p className="text-Dark-Gray text-[10px] font-bold tracking-widest">IP ADDRESS</p>
                <p className="text-Very-Dark-Gray font-medium mt-1 text-2xl">192.212.174.101</p>
              </div>
              <div className="pl-5 pr-8 border-r border-r-gray-300">
                <p className="text-Dark-Gray text-[10px] font-bold tracking-widest">LOCATION</p>
                <p className="text-Very-Dark-Gray font-medium mt-1 text-2xl">Brooklyn,NY 10001</p>
              </div>
              <div className="pl-5 pr-16 border-r border-r-gray-300">
                <p className="text-Dark-Gray text-[10px] font-bold tracking-widest">TIMEZONE</p>
                <p className="text-Very-Dark-Gray font-medium mt-1 text-2xl">UTC -05:00</p>
              </div>
              <div className="pl-5 pr-16">
                <p className="text-Dark-Gray text-[10px] font-bold tracking-widest">ISP</p>
                <p className="text-Very-Dark-Gray font-medium mt-1 text-2xl">SpaceX Starlink</p>
              </div>
          </div>
        </div>
        <div className='w-[75vw] h-screen'>
          <MapContainer center={[35.689198, 51.388973]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[35.689198, 51.388973]} icon={customeIcon}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </main>
    </>
  );
}

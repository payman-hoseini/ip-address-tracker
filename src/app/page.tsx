'use client'
import { useEffect, useState } from "react";
import Map from "./components/map";
import { Details, findLocation } from "./components/location";

export default function Home() {
  const [ip , setIp] = useState("")
  let data : Details | null;
  const [details , setDetails] = useState<Details | null>()
  const [error , setError] = useState(false)
  useEffect (()=>{
    searchIP()
  },[])

  function reciveIP(e : React.ChangeEvent<HTMLInputElement>){
    setIp(e.target.value)
  }
  function validateIpAddress(ipAddress : string){
    const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
    const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
    let flag = false;
    if (ipv4Regex.test(ipAddress) || ipAddress == "") {
      const octets = ipAddress.split('.');
      for (let i = 0; i < octets.length; i++) {
        const octet = parseInt(octets[i], 10);
        if (octet < 0 || octet > 255) {
          flag = false
        }
      }
      flag = true
    }
    else if(ipv6Regex.test(ipAddress)){
      flag = true;
    }
    else if (/(?:[\w-]+\.)+[\w-]+/.test(ipAddress)){
      flag = true
    }
    return flag
  }
  async function searchIP(){
    let validateIp = validateIpAddress(ip)
    if(validateIp){
      data = await findLocation(ip)
      setDetails(data)
      if(data.city == undefined){
        setError(true)
      }
      else{
        setError(false)
      }
      
    }
    else {
      setError(true)
    }
  }


  return (
    <>
      <main className="max-w-[1440px] mx-auto">
        <div className="desBackground grid place-items-center pt-6 font-Rubik">
          <h1 className="text-white font-medium text-2xl md:text-3xl">IP Address Tracker</h1>
          <div className="mt-5 md:w-[40%] flex items-center">
              <input onChange={reciveIP} type="text" placeholder="Search for any IP address or domain" className="md:w-[90%] py-3 px-4 rounded-l-xl outline-none"/>
              <button onClick={searchIP} className="bg-Very-Dark-Gray py-[17px] px-5 rounded-r-xl hover:duration-300 hover:bg-opacity-75">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6"/></svg>
              </button>
          </div>
          {error ?  <div className="bg-white mt-10 py-7 shadow-lg px-16 -mb-16 rounded-xl z-i">Error</div>
          :
          <div className="mt-10 flex flex-col lg:flex-row bg-white py-7 px-6 rounded-xl -mb-72 md:-mb-46 lg:-mb-16 shadow-lg w-[70%] z-i ">
              <div className="lg:pr-10 lg:border-r lg:border-r-gray-300 text-center lg:text-left">
                <p className="text-Dark-Gray text-[10px] font-bold tracking-widest">IP ADDRESS</p>
                <p className="text-Very-Dark-Gray font-medium mt-1 text-lg md:text-2xl">{details?.query}</p>
              </div>
              <div className="lg:pl-5 lg:pr-8 lg:border-r lg:border-r-gray-300 text-center lg:text-left mt-5 lg:mt-0">
                <p className="text-Dark-Gray text-[10px] font-bold tracking-widest">LOCATION</p>
                <p className="text-Very-Dark-Gray font-medium mt-1 text-lg md:text-2xl">{details?.city +" " + details?.region}</p>
              </div>
              <div className="lg:pl-5 lg:pr-16 lg:border-r lg:border-r-gray-300 text-center lg:text-left mt-5 lg:mt-0">
                <p className="text-Dark-Gray text-[10px] font-bold tracking-widest">TIMEZONE</p>
                <p className="text-Very-Dark-Gray font-medium mt-1 text-lg md:text-2xl">{details?.timezone}</p>
              </div>
              <div className="lg:pl-5 lg:pr-16 text-center lg:text-left mt-5 lg:mt-0">
                <p className="text-Dark-Gray text-[10px] font-bold tracking-widest">ISP</p>
                <p className="text-Very-Dark-Gray font-medium mt-1 text-lg md:text-2xl">{details?.isp}</p>
              </div>
          </div>}
        </div>
        <Map details={details} error={error}/>
      </main>
    </>
  );
}

export interface Details {
  city : string ,
  country : string,
  isp : string,
  lat : number,
  lon : number ,
  query : string,
  region : string,
  regionName : string,
  status : string,
  timezone : string,
  // then : any
  // catch : any
  // finally : any
  // [Symbol.toStringTag] : any
}
export async function findLocation(ip : string) : Promise<Details>{
  const res = await fetch(`http://ip-api.com/json/${ip}?fields=status,message,country,region,regionName,city,lat,lon,timezone,isp,query`,{
    method : "GET"
  })
  if(res.ok){
    // console.log(res.json())
    return res.json()
  }
  else {
    throw("err")
  }
  
}
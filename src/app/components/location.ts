

export async function findLocation(ip : string){
  const res = await fetch(`http://ip-api.com/json/${ip}?fields=status,message,country,region,regionName,city,lat,lon,timezone,isp,query`,{
    method : "GET"
  })
  if(res.ok){
    // console.log(res.json())
    return res.json()
  }
  console.log(ip)
}
import axios from "axios"
import React, {useState, useEffect} from "react"
import Button from "./Button"
const API_KEY = process.env.REACT_APP_API_KEY

function Weather() {
//  Set initial states
  const [loading, setLoading] = useState(false)
  const [maxTemp0, setMaxTemp0] = useState([])
  const [maxTemp1, setMaxTemp1] = useState([])
  const [maxTemp2, setMaxTemp2] = useState([])
  const [maxTemp3, setMaxTemp3] = useState([])
  
  const [minTemp0, setMinTemp0] = useState([])
  const [minTemp1, setMinTemp1] = useState([])
  const [minTemp2, setMinTemp2] = useState([])
  const [minTemp3, setMinTemp3] = useState([])
  
  const [day0, setDay0] = useState([])
  const [day1, setDay1] = useState([])
  const [day2, setDay2] = useState([])
  const [day3, setDay3] = useState([])
  
  const [icon0, setIcon0] = useState([])
  const [icon1, setIcon1] = useState([])
  const [icon2, setIcon2] = useState([])
  const [icon3, setIcon3] = useState([])
  
  const [lat, setLat] = useState("34")
  const [long, setLong] = useState("-118")
  
  const [zip, setZip] = useState("90210")
  
  const [city, setCity] = useState(["Beverly Hills"]) 
  
  useEffect(()=>{
    axios.get(zip).then ((response)=>{
      console.log(response.data)
    })
  }, [])
  
  
//  Fetch zip
  useEffect(()=>{ 
      fetch("https://api.openweathermap.org/geo/1.0/zip?zip="+ zip +",US&appid="+ API_KEY +"")
      .then(res => res.json())
      .then((result) => {
//  Set new lat/long from zip fetch
      setLat(result.lat)
      setLong(result.lon)
      setCity(result.name)
      console.log(lat)
      console.log(long)
      console.log(zip)
      console.log(result)
    })
    }, [zip, lat, long])
    
//  Fetch weather data with new lat/long
   useEffect(()=>{       
      fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+ lat +"&lon="+ long +"&units=imperial&exclude=current,minutely,hourly,alerts&appid="+ API_KEY +"")
      .then(res => res.json())
      .then((data) => {
//   Set weather data from weather fetch
      setMaxTemp0(data.daily[0].temp.max)
      setMaxTemp1(data.daily[1].temp.max)
      setMaxTemp2(data.daily[2].temp.max)
      setMaxTemp3(data.daily[3].temp.max)
      setMinTemp0(data.daily[0].temp.min)
      setMinTemp1(data.daily[1].temp.min)
      setMinTemp2(data.daily[2].temp.min)
      setMinTemp3(data.daily[3].temp.min)
      setDay0(data.daily[0].dt)
      setDay1(data.daily[1].dt)
      setDay2(data.daily[2].dt)
      setDay3(data.daily[3].dt)
      setIcon0(data.daily[0].weather[0].icon)
      setIcon1(data.daily[1].weather[0].icon)
      setIcon2(data.daily[2].weather[0].icon)
      setIcon3(data.daily[3].weather[0].icon)
      console.log(lat)
      console.log(long)
      console.log(data)
    })
  }, [lat, long])  
  
//Const with day of the week, base on setDay
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 
  const dayNum0 = new Date(day0 * 1000).getDay();
  const today0 = days[dayNum0];
  const dayNum1 = new Date(day1 * 1000).getDay();
  const today1 = days[dayNum1];
  const dayNum2 = new Date(day2 * 1000).getDay();
  const today2 = days[dayNum2];
  const dayNum3 = new Date(day3 * 1000).getDay();
  const today3 = days[dayNum3];

  
  if(loading === true){
    return <div>Loading...</div>
  } else return( 
    <div>
    
    <div className="button">
    <Button zip={setZip} />
    </div>
    
    <div className="city">
    {city}
    </div>
    
    <div className="row">
    <div className="col">
    {today0} <br />
    <img src={"http://openweathermap.org/img/wn/"+ icon0 +"@2x.png"} /> <br />
    High: {Math.round(maxTemp0)} <br />
    Low: {Math.round(minTemp0)}
    </div>
    <div className="col">
    {today1} <br />
    <img src={"http://openweathermap.org/img/wn/"+ icon1 +"@2x.png"} /> <br />
    High: {Math.round(maxTemp1)} <br />
    Low: {Math.round(minTemp1)}
    </div>
    <div className="col">
    {today2} <br />
    <img src={"http://openweathermap.org/img/wn/"+ icon2 +"@2x.png"} /> <br />
    High: {Math.round(maxTemp2)} <br />
    Low: {Math.round(minTemp2)}
    </div>
    <div className="col">
    {today3} <br />
    <img src={"http://openweathermap.org/img/wn/"+ icon3 +"@2x.png"} /> <br />
    High: {Math.round(maxTemp3)} <br />
    Low: {Math.round(minTemp3)}
    </div>
    </div>

    </div>
  )
}

export default Weather
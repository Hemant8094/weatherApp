import React,{useState,useEffect} from "react";
import WarningIcon from '@material-ui/icons/Warning';

const Api  = {
  key: process.env.REACT_APP_WEATHER_API_KEY,
  base: 'https://api.openweathermap.org/data/2.5/',
}

function App() {

  const [query,setQuery] = useState('')
  const [time,setTime] = useState(new Date().toLocaleTimeString())
  const [weather,setWeather] = useState({})


    const changingBackground = ()=>{
      if(typeof weather.main !== "undefined"&& weather.weather[0].main ==="Rain"){
          return "App rainny"
      }
      
      else if(typeof weather.main !== "undefined"&& weather.weather[0].main ==="Clouds") {
        return "App cloudy"
      } 
      else if(typeof weather.main !== "undefined"&& weather.weather[0].main ==="Clear") {
        return "App sunny"
      } 
      else if(typeof weather.main !== "undefined"&& weather.weather[0].main ==="Haze" || 
               typeof weather.main !== "undefined"&& weather.weather[0].main ==="Mist") {
        return "App Haze"
      }
      else if(typeof weather.main !== "undefined"&& weather.weather[0].main ==="Smoke") {
        return "App smoke"
      }
      else if(typeof weather.main !== "undefined"&& weather.weather[0].main ==="Snow") {
        return "App Snow"
      }
      else{
        return "App"
      }
      
    }




    const getWeatherData= (lat,lon)=>{
      fetch(`${Api.base}weather?lat=${lat}&lon=${lon}&units=metric&APPID=${Api.key}`)
      .then(res=>res.json())
      .then (result =>{

        
        setWeather(result)
        console.log(result)
      })
    }

    const CurrentWeather = ()=>{

      const success = (position)=>{
        getWeatherData(position.coords.latitude,position.coords.longitude)
      }
  
    
      if (navigator.geolocation) {
        navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            navigator.geolocation.getCurrentPosition(success);
          } else if (result.state === "prompt") {
            alert("Please, turn on your location and refresh it")
            navigator.geolocation.getCurrentPosition(success);
          } else if (result.state === "denied") {
            alert("permission needed for current location ")
          }
        })
      }
      else {
        alert('Your browser does not support location tracking, or permission is denied.');
      }
    }
    useEffect(()=>{
      CurrentWeather()
      
    },[])

    useEffect(()=>{
      setInterval(()=>setTime(new Date().toLocaleTimeString()) ,1000)
    },[time])
    const search = evt => {
      if(evt.key === "Enter"){
        fetch(`${Api.base}weather?q=${query}&units=metric&APPID=${Api.key}`)
        .then(res => res.json())
        .then(result =>{

          setQuery('');
          setWeather(result)
          console.log(result)
        })
      }
    }

    const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`
  }
  return (
    <div className={changingBackground()}>
     <main>
        <div className = "search-box">
         <input
          className = "search-bar"
          type = "text"
          placeholder= "Search..."
          onChange = {e => setQuery(e.target.value)}
          value  = {query}
          onKeyPress = {search}
         />
        </div>
        {(typeof weather.main !== "undefined")?
        <div>

          <div className = "location-box">
              <div className = "location">{weather.name}, {weather.sys.country} </div>
              <div style = {{display:"flex",justifyContent:"center"}}>
                <div className = "date-box">
                  <div className = "Date">{dateBuilder(new Date())}</div>
                  <div className = "Date">{time}</div>
                </div>
              </div>

          </div>
          <div className ="weather-box">
            <div className = "temp">  {Math.round(weather.main.temp)}??C</div>
            <div className = "weather-type">{weather.weather[0].main}</div>
          </div>
        </div>:
        <div className = "error-box">
          <WarningIcon style={{width:"75px",height:"75px"}} /><div> Something Went Wrong</div>
          <p>Please, check your internet connection <br></br>Or<br></br>  Enter valid city name </p>
           
          </div>
      }
     </main>
    </div>
  );
}

export default App;

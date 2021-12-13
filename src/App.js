import React,{useState,useEffect} from "react";
import WarningIcon from '@material-ui/icons/Warning';

const Api  = {
  key:"e1461eecf79ff00c247b492b3126160c",
  base: 'https://api.openweathermap.org/data/2.5/',
  NewsApiKey:"309db41e077b4164a4456ec8c3d7bf68",
  NewsApiBase:"https://newsapi.org/v2/top-headlines?country"
}

function App() {

  const [query,setQuery] = useState('')
  const [time,setTime] = useState(new Date().toLocaleTimeString())
  const [weather,setWeather] = useState({})
  const [newsWeather,setnewsWeather] = useState({})

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
    const getWeatherNews= (country)=>{
      fetch(`${Api.NewsApiBase}=${country}&category=business&apiKey=${Api.NewsApiKey}`)
      .then(res=>res.json())
      .then(news=>setnewsWeather(news))
      console.log(newsWeather)
    }
    const CurrentWeather = ()=>{

      const success = (position)=>{
        getWeatherData(position.coords.latitude,position.coords.longitude)
      }
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
      }
      else {
        alert('Your browser does not support location tracking, or permission is denied.');
      }
    }
    useEffect(()=>{
      CurrentWeather()
      getWeatherNews("IN")
      
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
            <div className = "temp">  {Math.round(weather.main.temp)}°C</div>
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

import React,{useState} from "react";
import WeatherPage from './WeatherPage'
import { FaSistrix } from "react-icons/fa";
import { IoIosPaperPlane } from "react-icons/io";
import AREA from './Area'
import { Route} from 'react-router-dom';
import { createBrowserHistory } from "history";

const history = createBrowserHistory()

const SearchPage  = () => {
    const[query,setQuery]=useState('');
    const[weather,setWeather]=useState('');
    const[full,setFull]=useState('')
    const[Latitude,setLatitude]=useState('')
    const[longitude,setlongitude]=useState('')
    const [showText, setShowText] = useState(true);
    const error404='404'
    const promise = new Promise((resolve,reject)=>{
      setTimeout(() => {
           resolve("this is my resolve data");
          reject("city not found");
      }, 1500);
      
      });
    
    const search = (e) => {
        e.preventDefault();
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=26b12a44f4c02b6690ba0c54d93b86d5`)
            .then(res => res.json())
            .then(result => {
              setWeather(result);
              setQuery('');
              console.log(result);
              fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${result.coord.lat}&lon=${result.coord.lon}&appid=26b12a44f4c02b6690ba0c54d93b86d5`)
              .then(res2 => res2.json())
              .then(result2 => {
                setFull(result2);
                setQuery('');
                console.log(result2);
              }).catch((error) => {
                console.log('error: ', error);
          
              });
              
            }).catch((error) => {
              console.log('error: ', error);
        
            });
            setShowText(false)
            
      }
   

      function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
         alert("Geolocation is not supported by this browser.");
        }
      }
      
      function showPosition(position) {
        let Latitude= position.coords.latitude ;
        
        let longitude= position.coords.longitude;
        setLatitude(Latitude.toFixed(2));
        setlongitude(longitude.toFixed(2));
        
        ShowWeather(Latitude,longitude);
      }   
      function ShowWeather(Latitude,longitude){
         fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${Latitude}&lon=${longitude}&appid=26b12a44f4c02b6690ba0c54d93b86d5`)
         .then(res3 => res3.json())
         .then(result3 => {
           setWeather(result3);
           console.log(result3);
           fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${Latitude}&lon=${longitude}&appid=26b12a44f4c02b6690ba0c54d93b86d5`)
              .then(res4 => res4.json())
              .then(result4 => {
                setFull(result4);
               
                console.log(result4);
              })
         })
         setShowText(false)
         
       }
      
  return (

    <div >
      		<form  className="form" onSubmit={search}> 
          {weather.cod ?
          	(<input type="text" placeholder="Find your location..."
                         value={query}  aria-label="Search" 
                         onSelect={e => setQuery(e.target.value)}
                         autoComplete="on"
                         className="search_error" autoComplete='true'
                         required  onChange={e => setQuery(e.target.value)}
                        />):(<input type="text" placeholder="Find your location..."
                        value={query}  aria-label="Search" 
                        onSelect={e => setQuery(e.target.value)}
                        autoComplete="on"
                        className="search" autoComplete='true'
                        required  onChange={e => setQuery(e.target.value)}
                       />)}
             <button ><FaSistrix className=" fas fa-search " onKeyPress={search} /></button>
					</form> 
          <button onClick={getLocation}><IoIosPaperPlane/>Current Location</button>
        
         
      <WeatherPage  weather={weather} full={full} />


      {weather.cod&& <Route to='/' />} 
      {weather.cod===error404? <p className="form__error">city not found</p>: ""}
      {weather.cod===error404? <AREA/>:" "}
      {showText &&<AREA/>}
     
     

      
    </div>
  );
}

export default SearchPage;
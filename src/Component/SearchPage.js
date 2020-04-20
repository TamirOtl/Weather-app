import React,{useState} from "react";
import WeatherPage from './WeatherPage'
import { FaSistrix } from "react-icons/fa";


const api={
    key:"26b12a44f4c02b6690ba0c54d93b86d5",
    base:"https://api.openweathermap.org/data/2.5/weather"
}

const SearchPage = () => {
    const[query,setQuery]=useState('');
    const[weather,setWeather]=useState('');
    const[full,setFull]=useState('')
    const search = (e) => {
        e.preventDefault();
          fetch(`${api.base}?q=${query}&appid=${api.key}`)
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
              }).catch(("Somthing go wrong"));
              ;
            }).catch(("Somthing go wrong"));
            
           
        
      }

  return (

    <div >
      		<form  onSubmit={search}> 
						<input type="text" placeholder="Find your location..."
                         value={query} placeholder="Search" aria-label="Search" 
                         onChange={e => setQuery(e.target.value)}
                         className="search" autoComplete='true'
                        />
             <button ><FaSistrix className="fas fa-search" onKeyPress={search}/></button>
					</form>
    
      <WeatherPage weather={weather} full={full} />
    </div>
  );
}

export default SearchPage;
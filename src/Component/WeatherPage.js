import React from "react";
import HourlyForecast from './HourlyForecast'
import CurrentWeather from './CurrentWeather'
import  DailyWeather from './DailyWeather'
import LoadingPage from './LoadingPage'

const WeatherPage = (props) =>   {

    
         
      
    return(

        <div>
          
        {(typeof props.weather.main != "undefined") ? (  
        (typeof props.full.timezone != "undefined")  ?(
            
       <header > 
         <div className="list-item">
        <div>
        <h2 className="list-item__title h2">{props.weather.name},{props.weather.sys.country}</h2>
         <h4 className="list-item__sub-title">{props.weather.weather[0].description}</h4>
         <h1 className="list-item--message h1">{Math.floor(Math.round(props.weather.main.temp-273.15))+"°"}</h1>  
                 
         <img className="list-item__sub-title" alt="icon" src={`../Images/${props.weather.weather[0].icon}.png`}/>
        <HourlyForecast full={props.full} weather={props.weather}/>
        <CurrentWeather full={props.full} weather={props.weather}/>
        <DailyWeather  full={props.full} weather={props.weather}/>
        </div> 
         </div>
        </header> 
       
        ):<LoadingPage/>):("")}
      
      
     
        </div>
    )
    


}
export {WeatherPage as default}
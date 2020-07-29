import React from 'react';
import moment from 'moment-timezone';


 const CurrentWeather = (props) => {
     
           
  return(
        
       <div>
                    
        {(typeof props.weather.main != "undefined") ? (  
           (typeof props.full.timezone != "undefined")  ?(
          
              
             <main >
           
           
         <div>
                
               
      <div className="list-header ">Today: {moment.tz(props.full.timezone).format("dddd")} {moment.tz(props.full.timezone).format('MMMM Do YYYY')} Mostly {props.weather.weather[0].main} .Currently {Math.floor(Math.round(props.weather.main.temp-273.15))+"°"};
      the high today was forecast as {Math.floor(Math.round(props.full.daily[0].temp.max-273.15))+"°"} and tonight with low of {Math.floor(Math.round(props.full.daily[0].temp.min-273.15))+"°"}. 
               
     </div>
     <div className="list-header ">
      <span><h6 >SUNRISE</h6><p>{moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("hh:mm: a")}</p></span> 
      <span><h6 >SUNSET</h6> <p>{moment(props.full.current.sunset*1000).tz(props.full.timezone).format("hh:mm: a")}</p></span> 
      <span><h6 >HUMIDITY</h6><p>{props.weather.main.humidity}%</p></span> 
       <span><h6 >PRESSURE</h6>{(props.weather.main.pressure/33.86389).toFixed(2) }<p></p></span> 
        </div>
         <div className="list-header ">
          <span><h6 >WIND</h6><p>{props.weather.wind.speed} mph</p></span> 
         <span><h6 >MAX TEMPETURE</h6><p>{Math.floor(Math.round(props.full.daily[0].temp.max-273.15))+"°"}</p></span> 
          <span><h6 >MIN TEMPETURE</h6><p>{Math.floor(Math.round(props.full.daily[0].temp.min-273.15))+"°"}</p></span> 
           <span><h6 >FEEL LIKES</h6><p> {Math.floor(Math.round(props.weather.main.feels_like-273.15))+"°"}</p></span> 
            </div>
             </div> 
            
             </main> 
               
                ): ('')): ('')}
              
              
             
                </div>
            )
            
        }
        
        
  
export {CurrentWeather as default}

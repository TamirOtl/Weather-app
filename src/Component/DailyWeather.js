import React from "react";
import moment from 'moment-timezone';

const DailyWeather = (props) =>   {

   
    return(

        <div>
            
        {(typeof props.weather.main != "undefined") ? (  
        (typeof props.full.timezone != "undefined")  ?(
       <main >
         <div className="list-item">
        <div>

        <div className="list-headerforcast-overflow">
        <span><h5 >{moment().add(1,"day").format("dddd")}</h5><img className="list-item__sub-title" alt="icon" src={`../Images/${props.full.daily[1].weather[0].icon}.png`}/><br/>
        <span>{Math.floor(Math.round(props.full.daily[1].temp.min-273.15))+"°"}</span>-
        <span>{Math.floor(Math.round(props.full.daily[1].temp.max-273.15))+"°"}</span>
        </span> 
        <span><h5 >{moment().add(2,"day").format("dddd")}</h5><img className="list-item__sub-title" alt="icon" src={`../Images/${props.full.daily[2].weather[0].icon}.png`}/><br/>
        <span>{Math.floor(Math.round(props.full.daily[2].temp.min-273.15))+"°"}</span>-
        <span>{Math.floor(Math.round(props.full.daily[2].temp.max-273.15))+"°"}</span>
        </span> 
        <span><h5 >{moment().add(3,"day").format("dddd")}</h5><img className="list-item__sub-title" alt="icon" src={`../Images/${props.full.daily[3].weather[0].icon}.png`}/><br/>
        <span>{Math.floor(Math.round(props.full.daily[3].temp.min-273.15))+"°"}</span>-
        <span>{Math.floor(Math.round(props.full.daily[3].temp.max-273.15))+"°"}</span>
        </span> 
        <span><h5 >{moment().add(4,"day").format("dddd")}</h5><img className="list-item__sub-title" alt="icon" src={`../Images/${props.full.daily[4].weather[0].icon}.png`}/><br/>
        <span>{Math.floor(Math.round(props.full.daily[4].temp.min-273.15))+"°"}</span>-
        <span>{Math.floor(Math.round(props.full.daily[4].temp.max-273.15))+"°"}</span>
        </span> 
        <span><h5 >{moment().add(5,"day").format("dddd")}</h5><img className="list-item__sub-title" alt="icon"src={`../Images/${props.full.daily[5].weather[0].icon}.png`}/><br/>
        <span>{Math.floor(Math.round(props.full.daily[5].temp.min-273.15))+"°"}</span>-
        <span>{Math.floor(Math.round(props.full.daily[5].temp.max-273.15))+"°"}</span>
        </span> 
        <span><h5 >{moment().add(6,"day").format("dddd")}</h5><img className="list-item__sub-title" alt="icon" src={`../Images/${props.full.daily[6].weather[0].icon}.png`}/><br/>
        <span>{Math.floor(Math.round(props.full.daily[6].temp.min-273.15))+"°"}</span>-
        <span>{Math.floor(Math.round(props.full.daily[6].temp.max-273.15))+"°"}</span>
        </span> 
        <span><h5 >{moment().add(7,"day").format("dddd")}</h5><img className="list-item__sub-title"alt="icon" src={`../Images/${props.full.daily[7].weather[0].icon}.png`}/><br/>
        <span>{Math.floor(Math.round(props.full.daily[7].temp.min-273.15))+"°"}</span>-
        <span>{Math.floor(Math.round(props.full.daily[7].temp.max-273.15))+"°"}</span>
        </span> 
        </div>   
        
        </div> 
        



         </div>
        </main> 
       
        ): ('')): ('')}
      
      
     
        </div>
    )
    


}
export {DailyWeather as default}
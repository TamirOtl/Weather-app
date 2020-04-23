import React from "react";
import moment from 'moment-timezone';


const WeatherPage = (props) =>   {


 



{
   
    return(

        <div>
            
        {(typeof props.weather.main != "undefined") ? (  
        (typeof props.full.timezone != "undefined")  ?(
       <header >
         <div className="list-item">
         <h2 className="list-item__title h2">{props.weather.name},{props.weather.sys.country}</h2>
         <h4 className="list-item__sub-title">{props.weather.weather[0].description}</h4>
         <h1 className="list-item--message h1">{Math.floor(Math.round(props.weather.main.temp-273.15))+"°"}</h1>  
         
         <img className="list-item__sub-title" alt="icon" src={`../Images/${props.weather.weather[0].icon}.png`}/>
        <div>
        <div className="list-headerforcast">
           
        <span><h5 >Now</h5><img className="list-item__sub-title"  alt="icon" src={`../Images/${props.full.hourly[0].weather[0].icon}.png`}/><br/>
        <span>{Math.floor(Math.round(props.full.hourly[0].temp-273.15))+"°"}
        {moment.tz(props.full.timezone).add(0,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' />Sunset</p>:
        moment.tz(props.full.timezone).add(0,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
        </span>    
        <span><h5 >{moment.tz(props.full.timezone).add(1,"hour").format("h a")}</h5><img  alt="icon" className="list-item__sub-title" alt="icon" src={`../Images/${props.full.hourly[1].weather[0].icon}.png`}/><br/>
        <span>{Math.floor(Math.round(props.full.hourly[1].temp-273.15))+"°"}
        {moment.tz(props.full.timezone).add(1,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?(<p><img className="sunrise" src='../Images/sunset.png' /> Sunset</p>):
       moment.tz(props.full.timezone).add(1,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
        </span> 
        <span><h5 >{moment.tz(props.full.timezone).add(2,"hour").format("h a")}</h5><img alt="icon" className="list-item__sub-title" src={`../Images/${props.full.hourly[2].weather[0].icon}.png`}/><br/>
        <span>{Math.floor(Math.round(props.full.hourly[2].temp-273.15))+"°"}
        {moment.tz(props.full.timezone).add(2,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' />Sunset</p>:
        moment.tz(props.full.timezone).add(2,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
        </span> 
        <span><h5 >{moment.tz(props.full.timezone).add(3,"hour").format("h a")}</h5><img alt="icon"className="list-item__sub-title" src={`../Images/${props.full.hourly[3].weather[0].icon}.png`}/><br/>
        <span>{Math.floor(Math.round(props.full.hourly[3].temp-273.15))+"°"}
        {moment.tz(props.full.timezone).add(3,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' />Sunset</p>:
        moment.tz(props.full.timezone).add(3,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
        </span> 
        <span><h5 >{moment.tz(props.full.timezone).add(4,"hour").format("h a")}</h5><img alt="icon" className="list-item__sub-title" src={`../Images/${props.full.hourly[4].weather[0].icon}.png`}/><br/>
        <span>{Math.floor(Math.round(props.full.hourly[4].temp-273.15))+"°"}
        {moment.tz(props.full.timezone).add(4,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' />Sunset</p>:
        moment.tz(props.full.timezone).add(4,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
        </span> 
        <span><h5 >{moment.tz(props.full.timezone).add(5,"hour").format("h a")}</h5><img alt="icon" className="list-item__sub-title" src={`../Images/${props.full.hourly[5].weather[0].icon}.png`}/><br/>
        <span>{Math.floor(Math.round(props.full.hourly[5].temp-273.15))+"°"}
        {moment.tz(props.full.timezone).add(5,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' />Sunset</p>:
        moment.tz(props.full.timezone).add(5,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
        </span> 
        <span><h5 >{moment.tz(props.full.timezone).add(6,"hour").format("h a")}</h5><img alt="icon" className="list-item__sub-title" src={`../Images/${props.full.hourly[6].weather[0].icon}.png`}/><br/>
        <span>{Math.floor(Math.round(props.full.hourly[6].temp-273.15))+"°"}
        {moment.tz(props.full.timezone).add(6,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' />Sunset</p>:
       moment.tz(props.full.timezone).add(6,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
        </span> 
        <span><h5 >{moment.tz(props.full.timezone).add(7,"hour").format("h a")}</h5><img alt="icon" className="list-item__sub-title" src={`../Images/${props.full.hourly[7].weather[0].icon}.png`}/><br/>
        <span>{Math.floor(Math.round(props.full.hourly[7].temp-273.15))+"°"}
        {moment.tz(props.full.timezone).add(7,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' />Sunset</p>:
        moment.tz(props.full.timezone).add(7,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
        </span> 
        <span><h5 >{moment.tz(props.full.timezone).add(8,"hour").format("h a")}</h5><img alt="icon" className="list-item__sub-title" src={`../Images/${props.full.hourly[8].weather[0].icon}.png`}/><br/>
        <span>{Math.floor(Math.round(props.full.hourly[8].temp-273.15))+"°"}
        {moment.tz(props.full.timezone).add(8,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' />Sunset</p>:
       moment.tz(props.full.timezone).add(8,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
        </span> 
        <span><h5 >{moment.tz(props.full.timezone).add(9,"hour").format("h a")}</h5><img alt="icon" className="list-item__sub-title" src={`../Images/${props.full.hourly[9].weather[0].icon}.png`}/><br/>
        <span>{Math.floor(Math.round(props.full.hourly[9].temp-273.15))+"°"}
        {moment.tz(props.full.timezone).add(9,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' />Sunset</p>:
        moment.tz(props.full.timezone).add(9,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
        </span> 
        <span><h5 >{moment.tz(props.full.timezone).add(10,"hour").format("h a")}</h5><img alt="icon" className="list-item__sub-title" src={`../Images/${props.full.hourly[10].weather[0].icon}.png`}/><br/>
        <span>{Math.floor(Math.round(props.full.hourly[10].temp-273.15))+"°"}
        {moment.tz(props.full.timezone).add(10,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' />Sunset</p>:
        moment.tz(props.full.timezone).add(10,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
        </span> 
        <span><h5 >{moment.tz(props.full.timezone).add(11,"hour").format("h a")}</h5><img alt="icon" className="list-item__sub-title" src={`../Images/${props.full.hourly[11].weather[0].icon}.png`}/><br/>
        <span>{Math.floor(Math.round(props.full.hourly[11].temp-273.15))+"°"}
        {moment.tz(props.full.timezone).add(11,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' />Sunset</p>:
        moment.tz(props.full.timezone).add(11,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
        </span> 
        <span><h5 >{moment.tz(props.full.timezone).add(12,"hour").format("h a")}</h5><img alt="icon" className="list-item__sub-title" src={`../Images/${props.full.hourly[12].weather[0].icon}.png`}/><br/>
        <span>{Math.floor(Math.round(props.full.hourly[12].temp-273.15))+"°"}
        {moment.tz(props.full.timezone).add(12,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' />Sunset</p>:
        moment.tz(props.full.timezone).add(12,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
        </span> 
        <span><h5 >{moment.tz(props.full.timezone).add(13,"hour").format("h a")}</h5><img alt="icon" className="list-item__sub-title" src={`../Images/${props.full.hourly[13].weather[0].icon}.png`}/><br/>
        <span>{Math.floor(Math.round(props.full.hourly[13].temp-273.15))+"°"}
        {moment.tz(props.full.timezone).add(13,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' />Sunset</p>:
        moment.tz(props.full.timezone).add(13,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?(<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise 
            <img className="sunrise" src='../Images/sunrise.gif' alt="Sunrise"/> 
        </p>)
        
        :""}</span>
        </span> 
        <span><h5 >{moment.tz(props.full.timezone).add(14,"hour").format("h a")}</h5><img alt="icon" className="list-item__sub-title" src={`../Images/${props.full.hourly[14].weather[0].icon}.png`}/><br/>
        <span>{Math.floor(Math.round(props.full.hourly[14].temp-273.15))+"°"}
        {moment.tz(props.full.timezone).add(14,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' />Sunset</p>:
        moment.tz(props.full.timezone).add(14,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span> 
        </span> 
        <span><h5 >{moment.tz(props.full.timezone).add(15,"hour").format("h a")}</h5><img alt="icon" className="list-item__sub-title" src={`../Images/${props.full.hourly[15].weather[0].icon}.png`}/><br/>
        <span>{Math.floor(Math.round(props.full.hourly[15].temp-273.15))+"°"}
        {moment.tz(props.full.timezone).add(15,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' />Sunset</p>:
        moment.tz(props.full.timezone).add(15,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
        </span> 
        <span><h5 >{moment.tz(props.full.timezone).add(16,"hour").format("h a")}</h5><img  className="list-item__sub-title" src={`../Images/${props.full.hourly[16].weather[0].icon}.png`} alt="icon"/><br/>
        <span>{Math.floor(Math.round(props.full.hourly[16].temp-273.15))+"°"}
        {moment.tz(props.full.timezone).add(16,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' />Sunset</p>:
        moment.tz(props.full.timezone).add(16,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
        </span> 
        <span><h5 >{moment.tz(props.full.timezone).add(17,"hour").format("h a")}</h5><img alt="icon" className="list-item__sub-title" src={`../Images/${props.full.hourly[17].weather[0].icon}.png`}/><br/>
        <span>{Math.floor(Math.round(props.full.hourly[17].temp-273.15))+"°"}
        {moment.tz(props.full.timezone).add(17,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' />Sunset</p>:
        moment.tz(props.full.timezone).add(17,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
        </span> 
        <span><h5 >{moment.tz(props.full.timezone).add(18,"hour").format("h a")}</h5><img alt="icon" className="list-item__sub-title" src={`../Images/${props.full.hourly[18].weather[0].icon}.png`}/><br/>
        <span>{Math.floor(Math.round(props.full.hourly[18].temp-273.15))+"°"}
        {moment.tz(props.full.timezone).add(18,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' />Sunset</p>:
        moment.tz(props.full.timezone).add(18,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
        </span> 
        <span><h5 >{moment.tz(props.full.timezone).add(19,"hour").format("h a")}</h5><img alt="icon" className="list-item__sub-title" src={`../Images/${props.full.hourly[19].weather[0].icon}.png`}/><br/>
        <span>{Math.floor(Math.round(props.full.hourly[19].temp-273.15))+"°"}
        {moment.tz(props.full.timezone).add(19,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' />Sunset</p>:
        moment.tz(props.full.timezone).add(19,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
        </span> 
        <span><h5 >{moment.tz(props.full.timezone).add(20,"hour").format("h a")}</h5><img alt="icon" className="list-item__sub-title" src={`../Images/${props.full.hourly[20].weather[0].icon}.png`}/><br/>
        <span>{Math.floor(Math.round(props.full.hourly[20].temp-273.15))+"°"}
        {moment.tz(props.full.timezone).add(20,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' />Sunset</p>:
        moment.tz(props.full.timezone).add(20,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
        </span> 
        <span><h5 >{moment.tz(props.full.timezone).add(21,"hour").format("h a")}</h5><img alt="icon" className="list-item__sub-title" src={`../Images/${props.full.hourly[21].weather[0].icon}.png`}/><br/>
        <span>{Math.floor(Math.round(props.full.hourly[21].temp-273.15))+"°"}
        {moment.tz(props.full.timezone).add(21,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' />Sunset</p>:
       moment.tz(props.full.timezone).add(21,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
        </span> 
        <span><h5 >{moment.tz(props.full.timezone).add(22,"hour").format("h a")}</h5><img alt="icon" className="list-item__sub-title" src={`../Images/${props.full.hourly[22].weather[0].icon}.png`}/><br/>
        <span>{Math.floor(Math.round(props.full.hourly[22].temp-273.15))+"°"}
        {moment.tz(props.full.timezone).add(22,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' />Sunset</p>:
        moment.tz(props.full.timezone).add(22,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
        </span> 
        <span><h5 >{moment.tz(props.full.timezone).add(23,"hour").format("h a")}</h5><img  alt="icon" className="list-item__sub-title" src={`../Images/${props.full.hourly[23].weather[0].icon}.png`}/><br/>
        <span>{Math.floor(Math.round(props.full.hourly[23].temp-273.15))+"°"}
        {moment.tz(props.full.timezone).add(23,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' />Sunset</p>:
       moment.tz(props.full.timezone).add(23,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
        </span> 
        <span><h5 >{moment.tz(props.full.timezone).add(24,"hour").format("h a")}</h5><img className="list-item__sub-title" alt="icon" src={`../Images/${props.full.hourly[24].weather[0].icon}.png`}/><br/>
        <span>{Math.floor(Math.round(props.full.hourly[24].temp-273.15))+"°"}
        {moment.tz(props.full.timezone).add(24,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' />Sunset</p>:
        moment.tz(props.full.timezone).add(24,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
        </span> 
        </div>      
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
        <span><h6 >WIND</h6><p> NNE {props.weather.wind.speed} mph</p></span> 
        <span><h6 >MAX TEMPETURE</h6><p>{Math.floor(Math.round(props.full.daily[0].temp.max-273.15))+"°"}</p></span> 
        <span><h6 >MIN TEMPETURE</h6><p>{Math.floor(Math.round(props.full.daily[0].temp.min-273.15))+"°"}</p></span> 
        <span><h6 >FEEL LIKES</h6><p> {Math.floor(Math.round(props.weather.main.feels_like-273.15))+"°"}</p></span> 
        </div>
        
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
        </header> 
       
        ): ('')): ('')}
      
      
     
        </div>
    )
    
}

}
export {WeatherPage as default}
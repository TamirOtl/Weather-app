import React from "react";
import moment from 'moment-timezone';

 const Hourly_Forecast = (props) => {
 
return(

    <div>
            
    {(typeof props.weather.main != "undefined") ? (  
    (typeof props.full.timezone != "undefined")  ?(
   <div >
     <div className="list-item">
    
    <div>
    <div className="list-headerforcast">
      
    <span><h5 >Now</h5><img className="list-item__sub-title"   src={`../Images/${props.full.hourly[0].weather[0].icon}.png`}alt="icon"/><br/>
    <span>{Math.floor(Math.round(props.full.hourly[0].temp-273.15))+"°"}
    {moment.tz(props.full.timezone).add(0,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' alt="Sunset" />Sunset</p>:
    moment.tz(props.full.timezone).add(0,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
    </span> 

    <span><h5 >{moment.tz(props.full.timezone).add(1,"hour").format("h a")}</h5><img   className="list-item__sub-title"  src={`../Images/${props.full.hourly[1].weather[0].icon}.png`}alt="icon"/><br/>
    <span>{Math.floor(Math.round(props.full.hourly[1].temp-273.15))+"°"}
    {moment.tz(props.full.timezone).add(1,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?(<p><img className="sunrise" src='../Images/sunset.png' alt="Sunset"/> Sunset</p>):
   moment.tz(props.full.timezone).add(1,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
    </span> 

    <span><h5 >{moment.tz(props.full.timezone).add(2,"hour").format("h a")}</h5><img className="list-item__sub-title" src={`../Images/${props.full.hourly[2].weather[0].icon}.png`}alt="icon"/><br/>
    <span>{Math.floor(Math.round(props.full.hourly[2].temp-273.15))+"°"}
    {moment.tz(props.full.timezone).add(2,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' alt="Sunset"/>Sunset</p>:
    moment.tz(props.full.timezone).add(2,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
    </span> 

    <span><h5 >{moment.tz(props.full.timezone).add(3,"hour").format("h a")}</h5><img className="list-item__sub-title" src={`../Images/${props.full.hourly[3].weather[0].icon}.png`}alt="icon"/><br/>
    <span>{Math.floor(Math.round(props.full.hourly[3].temp-273.15))+"°"}
    {moment.tz(props.full.timezone).add(3,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' alt="Sunset"/>Sunset</p>:
    moment.tz(props.full.timezone).add(3,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
    </span> 

    <span><h5 >{moment.tz(props.full.timezone).add(4,"hour").format("h a")}</h5><img  className="list-item__sub-title" src={`../Images/${props.full.hourly[4].weather[0].icon}.png`}alt="icon"/><br/>
    <span>{Math.floor(Math.round(props.full.hourly[4].temp-273.15))+"°"}
    {moment.tz(props.full.timezone).add(4,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' alt="Sunset"/>Sunset</p>:
    moment.tz(props.full.timezone).add(4,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
    </span> 

    <span><h5 >{moment.tz(props.full.timezone).add(5,"hour").format("h a")}</h5><img  className="list-item__sub-title" src={`../Images/${props.full.hourly[5].weather[0].icon}.png`}alt="icon"/><br/>
    <span>{Math.floor(Math.round(props.full.hourly[5].temp-273.15))+"°"}
    {moment.tz(props.full.timezone).add(5,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' alt="Sunset"/>Sunset</p>:
    moment.tz(props.full.timezone).add(5,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
    </span>

    <span><h5 >{moment.tz(props.full.timezone).add(6,"hour").format("h a")}</h5><img  className="list-item__sub-title" src={`../Images/${props.full.hourly[6].weather[0].icon}.png`}alt="icon"/><br/>
    <span>{Math.floor(Math.round(props.full.hourly[6].temp-273.15))+"°"}
    {moment.tz(props.full.timezone).add(6,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' alt="Sunset"/>Sunset</p>:
   moment.tz(props.full.timezone).add(6,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
    </span> 

    <span><h5 >{moment.tz(props.full.timezone).add(7,"hour").format("h a")}</h5><img className="list-item__sub-title" src={`../Images/${props.full.hourly[7].weather[0].icon}.png`}alt="icon"/><br/>
    <span>{Math.floor(Math.round(props.full.hourly[7].temp-273.15))+"°"}
    {moment.tz(props.full.timezone).add(7,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' alt="Sunset"/>Sunset</p>:
    moment.tz(props.full.timezone).add(7,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
    </span> 

    <span><h5 >{moment.tz(props.full.timezone).add(8,"hour").format("h a")}</h5><img  className="list-item__sub-title" src={`../Images/${props.full.hourly[8].weather[0].icon}.png`}alt="icon"/><br/>
    <span>{Math.floor(Math.round(props.full.hourly[8].temp-273.15))+"°"}
    {moment.tz(props.full.timezone).add(8,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png'alt="Sunset" />Sunset</p>:
   moment.tz(props.full.timezone).add(8,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
    </span> 

    <span><h5 >{moment.tz(props.full.timezone).add(9,"hour").format("h a")}</h5><img className="list-item__sub-title" src={`../Images/${props.full.hourly[9].weather[0].icon}.png`}alt="icon"/><br/>
    <span>{Math.floor(Math.round(props.full.hourly[9].temp-273.15))+"°"}
    {moment.tz(props.full.timezone).add(9,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' alt="Sunset"/>Sunset</p>:
    moment.tz(props.full.timezone).add(9,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
    </span> 

    <span><h5 >{moment.tz(props.full.timezone).add(10,"hour").format("h a")}</h5><img  className="list-item__sub-title" src={`../Images/${props.full.hourly[10].weather[0].icon}.png`}alt="icon"/><br/>
    <span>{Math.floor(Math.round(props.full.hourly[10].temp-273.15))+"°"}
    {moment.tz(props.full.timezone).add(10,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png'alt="Sunset" />Sunset</p>:
    moment.tz(props.full.timezone).add(10,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
    </span> 

    <span><h5 >{moment.tz(props.full.timezone).add(11,"hour").format("h a")}</h5><img  className="list-item__sub-title" src={`../Images/${props.full.hourly[11].weather[0].icon}.png`}alt="icon"/><br/>
    <span>{Math.floor(Math.round(props.full.hourly[11].temp-273.15))+"°"}
    {moment.tz(props.full.timezone).add(11,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png'alt="Sunset" />Sunset</p>:
    moment.tz(props.full.timezone).add(11,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
    </span> 

    <span><h5 >{moment.tz(props.full.timezone).add(12,"hour").format("h a")}</h5><img  className="list-item__sub-title" src={`../Images/${props.full.hourly[12].weather[0].icon}.png`}alt="icon"/><br/>
    <span>{Math.floor(Math.round(props.full.hourly[12].temp-273.15))+"°"}
    {moment.tz(props.full.timezone).add(12,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png'alt="Sunset" />Sunset</p>:
    moment.tz(props.full.timezone).add(12,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
    </span> 

    <span><h5 >{moment.tz(props.full.timezone).add(13,"hour").format("h a")}</h5><img  className="list-item__sub-title" src={`../Images/${props.full.hourly[13].weather[0].icon}.png`}alt="icon"/><br/>
    <span>{Math.floor(Math.round(props.full.hourly[13].temp-273.15))+"°"}
    {moment.tz(props.full.timezone).add(13,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png'alt="Sunset" />Sunset</p>:
    moment.tz(props.full.timezone).add(13,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?(<p><img className="sunrise" src='../Images/sunrise.png'alt="Sunrise"/>Sunrise 
     </p>) :""}</span>
    </span> 

    <span><h5 >{moment.tz(props.full.timezone).add(14,"hour").format("h a")}</h5><img  className="list-item__sub-title" src={`../Images/${props.full.hourly[14].weather[0].icon}.png`}alt="icon"/><br/>
    <span>{Math.floor(Math.round(props.full.hourly[14].temp-273.15))+"°"}
    {moment.tz(props.full.timezone).add(14,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png'alt="Sunset" />Sunset</p>:
    moment.tz(props.full.timezone).add(14,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span> 
    </span> 

    <span><h5 >{moment.tz(props.full.timezone).add(15,"hour").format("h a")}</h5><img  className="list-item__sub-title" src={`../Images/${props.full.hourly[15].weather[0].icon}.png`}alt="icon"/><br/>
    <span>{Math.floor(Math.round(props.full.hourly[15].temp-273.15))+"°"}
    {moment.tz(props.full.timezone).add(15,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png'alt="Sunset" />Sunset</p>:
    moment.tz(props.full.timezone).add(15,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
    </span>

    <span><h5 >{moment.tz(props.full.timezone).add(16,"hour").format("h a")}</h5><img  className="list-item__sub-title" src={`../Images/${props.full.hourly[16].weather[0].icon}.png`} alt="icon"/><br/>
    <span>{Math.floor(Math.round(props.full.hourly[16].temp-273.15))+"°"}
    {moment.tz(props.full.timezone).add(16,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png'alt="Sunset" />Sunset</p>:
    moment.tz(props.full.timezone).add(16,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
    </span>

    <span><h5 >{moment.tz(props.full.timezone).add(17,"hour").format("h a")}</h5><img  className="list-item__sub-title" src={`../Images/${props.full.hourly[17].weather[0].icon}.png`}alt="icon"/><br/>
    <span>{Math.floor(Math.round(props.full.hourly[17].temp-273.15))+"°"}
    {moment.tz(props.full.timezone).add(17,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' alt="Sunset" />Sunset</p>:
    moment.tz(props.full.timezone).add(17,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
    </span>

    <span><h5 >{moment.tz(props.full.timezone).add(18,"hour").format("h a")}</h5><img  className="list-item__sub-title" src={`../Images/${props.full.hourly[18].weather[0].icon}.png`}alt="icon"/><br/>
    <span>{Math.floor(Math.round(props.full.hourly[18].temp-273.15))+"°"}
    {moment.tz(props.full.timezone).add(18,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' alt="Sunset"/>Sunset</p>:
    moment.tz(props.full.timezone).add(18,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
    </span>

    <span><h5 >{moment.tz(props.full.timezone).add(19,"hour").format("h a")}</h5><img className="list-item__sub-title" src={`../Images/${props.full.hourly[19].weather[0].icon}.png`}alt="icon"/><br/>
    <span>{Math.floor(Math.round(props.full.hourly[19].temp-273.15))+"°"}
    {moment.tz(props.full.timezone).add(19,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png'alt="Sunset" />Sunset</p>:
    moment.tz(props.full.timezone).add(19,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
    </span> 

    <span><h5 >{moment.tz(props.full.timezone).add(20,"hour").format("h a")}</h5><img  className="list-item__sub-title" src={`../Images/${props.full.hourly[20].weather[0].icon}.png`}alt="icon"/><br/>
    <span>{Math.floor(Math.round(props.full.hourly[20].temp-273.15))+"°"}
    {moment.tz(props.full.timezone).add(20,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' alt="Sunset"/>Sunset</p>:
    moment.tz(props.full.timezone).add(20,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
    </span>

    <span><h5 >{moment.tz(props.full.timezone).add(21,"hour").format("h a")}</h5><img  className="list-item__sub-title" src={`../Images/${props.full.hourly[21].weather[0].icon}.png`}alt="icon"/><br/>
    <span>{Math.floor(Math.round(props.full.hourly[21].temp-273.15))+"°"}
    {moment.tz(props.full.timezone).add(21,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png'alt="Sunset" />Sunset</p>:
   moment.tz(props.full.timezone).add(21,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
    </span> 

    <span><h5 >{moment.tz(props.full.timezone).add(22,"hour").format("h a")}</h5><img  className="list-item__sub-title" src={`../Images/${props.full.hourly[22].weather[0].icon}.png`}alt="icon"/><br/>
    <span>{Math.floor(Math.round(props.full.hourly[22].temp-273.15))+"°"}
    {moment.tz(props.full.timezone).add(22,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png'alt="Sunset" />Sunset</p>:
    moment.tz(props.full.timezone).add(22,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
    </span> 
    <span><h5 >{moment.tz(props.full.timezone).add(23,"hour").format("h a")}</h5><img  className="list-item__sub-title" src={`../Images/${props.full.hourly[23].weather[0].icon}.png`}alt="icon"/><br/>
    <span>{Math.floor(Math.round(props.full.hourly[23].temp-273.15))+"°"}
    {moment.tz(props.full.timezone).add(23,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png' alt="Sunset"/>Sunset</p>:
   moment.tz(props.full.timezone).add(23,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
    </span> 

    <span><h5 >{moment.tz(props.full.timezone).add(24,"hour").format("h a")}</h5><img className="list-item__sub-title"  src={`../Images/${props.full.hourly[24].weather[0].icon}.png`}alt="icon"/><br/>
    <span>{Math.floor(Math.round(props.full.hourly[24].temp-273.15))+"°"}
    {moment.tz(props.full.timezone).add(24,"hour").format("h a")===moment(props.full.current.sunset*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunset.png'alt="Sunset" />Sunset</p>:
    moment.tz(props.full.timezone).add(24,"hour").format("h a")===moment(props.full.current.sunrise*1000).tz(props.full.timezone).format("h a")?<p><img className="sunrise" src='../Images/sunrise.png' alt="Sunrise"/>Sunrise</p> :""}</span>
    </span> 
    </div>      
    </div> 
     </div>
    </div> 
     ): ('')): ('')}
   </div>
)
}
export {Hourly_Forecast as default};

import React from 'react';



 const AREA = () => {
  
       
    
  
  return(
<div className="page-header">

<h2 className="page-header__title">Explore Your Area</h2>
<iframe  className="iframe" title ="Area"src="https://embed.windy.com/embed2.html?lat=28.536&lon=34.805&zoom=5&level=surface&overlay=wind&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=true&detailLat=31.963&detailLon=34.804&metricWind=mph&metricTemp=%C2%B0C&radarRange=-1" frameBorder="0"></iframe>
<h2 className="page-header__title">Covid-19</h2>
<div className="flourish-embed flourish-map" data-src="story/225979"></div>
</div>

  )
  
  };



export {AREA as default};
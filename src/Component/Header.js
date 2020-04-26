import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

export const Header = () => (
      
<div>
<Navbar bg="dark" variant="dark" className="header__content">
    <Navbar.Brand href="/" className='header__title'><h1>Weather Rumors</h1></Navbar.Brand>
    <Navbar.Brand href="/Component/Covid-19" className='header__content'><h3><img className="corona"src='../Images/Coronavirus.png' alt ="corona"/>Covid-19</h3></Navbar.Brand>
  </Navbar>
</div>
  
        
  
 
  
);



export {Header as default};

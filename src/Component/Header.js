import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'

export const Header = () => (
  // <header className="header">
  //   <div className="content-container">
  //     <div className="header__content">
  //      <NavLink to='/' className='header__title'><h1 className="header__title">Weather Rumors</h1></NavLink> 
      
<div>
<Navbar bg="dark" variant="dark" className="header__content">
    <Navbar.Brand href="/" className='header__title'><h1>Weather Rumors</h1></Navbar.Brand>
    <Navbar.Brand href="/" className='header__title'><h3>Covid-19</h3></Navbar.Brand>
  </Navbar>
</div>
  
        
  
 
  
);



export {Header as default};

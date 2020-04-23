import React from 'react';

import Navbar from 'react-bootstrap/Navbar'

export const footer = () => (
  // <header className="header">
  //   <div className="content-container">
  //     <div className="header__content">
  //      <NavLink to='/' className='header__title'><h1 className="header__title">Weather Rumors</h1></NavLink> 
      
<div>
<Navbar bg="dark" variant="dark" className="footer__content">
    <Navbar.Brand href="/" className='footer__title'><h1>Copyright © 2020 Weather Rumors</h1></Navbar.Brand>
  
  </Navbar>
</div>
  
        
  
 
  
);



export {footer as default};

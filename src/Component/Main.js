import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import SearchPage from './SearchPage';
import Footer from './Footer'

 const Main = () => {
  return(
<div>
<Header/>
<SearchPage/>
<Footer/>
</div>

  )
  
  };



export {Main as default};

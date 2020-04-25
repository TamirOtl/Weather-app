import React,{useState,useEffect} from "react";
import Header from './Header'
import { FaSistrix } from "react-icons/fa";
import Footer from './Footer'



const Covid19  = () => {
    const[query,setQuery]=useState('');
 
    
    
    
    // const search = (e) => {
    //     e.preventDefault();
    //       fetch(`https://api.covid19api.com/summary`)
    //         .then(res => res.json())
    //         .then(result => {
    //          setQuery(result);
              
    //           console.log(result);
             
          
              
              
    //         }).catch((error) => {
    //           console.log('error: ', error);
        
    //         });
          
            
    //   }
   

    useEffect(() => {
        fetch('https://api.covid19api.com/summary')
            .then(res => res.json())
            .then((res) => {
               setQuery(res);
            })
    },[query])
      
     
      
      
  return (

 

<div >
    <Header/>
   
   <form>
 {(typeof query.Date != "undefined") ? (  
   
 <select className="search"> 
   
   {query.Countries.map((country) =>
   <option  key={country.CountryCode}>{country.Country}</option>
   
   ) }     
 </select>
  
 ):("")}
     <button >Submit</button> 
     </form>  
 <Footer/>

</div>
    )




       
         
    }
     
     

      
 

export default Covid19;
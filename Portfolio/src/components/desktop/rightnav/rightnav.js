import React from 'react'
import pic from '../../../image/pic.jpg'
import './rightnav.css'
import Contact from '../contact/contact'

const Rightnav=()=>{
    return(
        <div className="rightnav">
           <div className="pic"> 
               <img src={pic} /> 
            </div>
            <Contact />
           
        </div>
    )
}

export default Rightnav
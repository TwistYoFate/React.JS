import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import '../css/navbar.css';

const Navbar=()=>{
    return(
        <div className="nav">
            <div><NavLink to="/" style={{color:"black",textDecoration:"none"}} className="active">Register User</NavLink></div>
            <div><NavLink to="/displayUsers" style={{color:"black",textDecoration:"none"}} >Display Entries</NavLink></div>
        </div>
    )
}

export default withRouter(Navbar)
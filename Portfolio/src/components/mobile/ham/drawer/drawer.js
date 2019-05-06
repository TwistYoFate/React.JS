import React from 'react';
import { Link } from 'react-scroll'
import './drawer.css'

const Drawer=(props)=>{
    let show=props.show;
    let draw;
    if(show === "open"){
        draw="Drawer open"
    }
    else{
        draw="Drawer"
    }
    return(
        <div className={draw}>
            <div className="space"></div>
            
            <div className="row center link" ><Link to="education" smooth={true} offset={0} duration={1000} delay={100} onClick={props.click}>Education</Link></div>
            <div className="row center link" ><Link to="skills" smooth={true} offset={0} duration={1000} delay={100} onClick={props.click}>Skills</Link></div>
            <div className="row center link" ><Link to="trainings" smooth={true} offset={0} duration={1000} delay={100} onClick={props.click}>Trainings</Link></div>
            <div className="row center link" ><Link to="achievements" smooth={true} offset={0} duration={1000} delay={100} onClick={props.click}>Achievements</Link></div>
        </div>
    )
}

export default Drawer



import React from 'react';
import { Link } from 'react-scroll'

const Sidenav=()=>{
    return(
        <div className="Sidenav" style={csssidenav}>
            <div className="space" style={space}></div>
            
            <div className="row center" style={links}><Link to="education" smooth={true} offset={0} duration={1000} delay={100}>Education</Link></div>
            <div className="row center" style={links}><Link to="skills" smooth={true} offset={0} duration={1000} delay={100}>Skills</Link></div>
            <div className="row center" style={links}><Link to="trainings" smooth={true} offset={0} duration={1000} delay={100}>Trainings</Link></div>
            <div className="row center" style={links}><Link to="achievements" smooth={true} offset={0} duration={1000} delay={100}>Achievements</Link></div>
        </div>
    )
}

//css

const csssidenav={
    fontFamily:"'Special Elite', cursive",
    fontSize:'1.3em',
}

const space={
    marginTop:"15vh",
    padding:'0',
    height:'20vh'
}

const links={
    cursor:'pointer'
}

export default Sidenav



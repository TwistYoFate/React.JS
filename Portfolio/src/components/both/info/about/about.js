import React from 'react'
import './about.css'
import Skillbar from '../skillbar/skillbar';
import Education from '../education/education';
import Trainings from '../trainings/trainings';
import Achievements from '../achievements/achievements';
import Skills from '../skills/skills';

const About=(props)=>{
    return(
        <div className="About" style={about}>
            <h1 className="black-text center bold">Deepanshu Yadav</h1>
            <Skillbar />
            <Education />
            <Skills />
            <Trainings />
            <Achievements />
        </div>
    )
}

//css
const about={
    overflow:'hidden'
}

export default About
import React from 'react';
import fb from '../../../image/fb.png';
import gh from '../../../image/gh.png'
import ct from '../../../image/ct.png'
import ml from '../../../image/ml.png'
import './contact.css'

const Contact=()=>{
    return(
        <div className="contact">
            <div><a href="https://www.facebook.com/deepanshu.yadav.733076"><img src={fb} /></a><span>  Deepanshu Yadav</span></div>
            <div><a href="https://github.com/TwistYoFate"><img src={gh} /></a><span>  TwistYoFate</span></div>
            <div><a href="#"><img src={ct} /></a><span>  +91-9871640673</span></div>
            <div><a href="#"><img src={ml} /></a><span>  daybond007@gmail.com</span></div>
        </div>
    )
}

export default Contact
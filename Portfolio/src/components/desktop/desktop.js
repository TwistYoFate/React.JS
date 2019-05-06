import React from 'react'
import Layout from './layout/layout.js'
import Sidenav from './sidenav/sidenav.js'
import About from '../both/info/about/about.js'
import Copyright from './copyright/copyright'
import Rightnav from './rightnav/rightnav.js';

const Desktop=()=>{
    return(
        <div className="desktop hide-on-med-and-down">
            <Layout left={<Sidenav />} mid={<About />} right={<Rightnav />} footer={<Copyright />}/>
        </div>
    )
}

export default Desktop
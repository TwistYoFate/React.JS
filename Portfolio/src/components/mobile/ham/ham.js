import React from 'react';
import './ham.css'
import Drawer from './drawer/drawer'

const Ham=(props)=>{
        const show=(props.status)?"open":"close";
        
        //greysheet animation logic
        let greysheet_open;
        if(show == "open")
            greysheet_open="greysheet open";
        else
            greysheet_open="greysheet";

        return(
            <div className="ham">
            <button onClick={props.click}>
                <div ></div>
                <div ></div>
                <div ></div>
            </button>
            <div><div className={greysheet_open} onClick={props.click}></div></div>
            <div><Drawer click={props.click} show={show}/></div>
        </div>
        )
}

export default Ham
import React from 'react'

//Contains inline css
const Copyright=()=>{
    return(

        <div className="copyright" style={mystyle}>
            <div className="row">
            <span style={{position:'relative',float:'left',paddingLeft:'20px'}}>I solemnly swear that this portfolio is solely designed and developed by Deepanshu Yadav</span>
            <span style={{position:'relative',float:'right',paddingRight:'20px'}}>This web app is made using REACT.JS <span style={{fontSize:'0.8em',color:'lightGrey'}}>and a little HTML, JSX, CSS, MATERIALIZE</span></span>
            </div>
        </div>
    )
}

//css

const mystyle={
    background:'black',
    color:'white',
    width:'100%',
    height:'10%',
    padding:'6px',
    // position:'float',
    paddingTop:'20px',
    fontSize:'1.2em',
    color:'#2196F3',
}

export default Copyright
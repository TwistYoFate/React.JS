import React from 'react';
import About from '../both/info/about/about'
import Pic from './pic/pic'
import Ham from './ham/ham'

import './mobile.css'

class Mobile extends React.Component{
    state={
        open:false
    }

    handleClick=()=>{
        let show=this.state.open?false:true;
        this.setState({
            open:show
        })
        console.log(this.state)
    }
    render(){
        return(
            <div className="mobile hide-on-large-only">
            <Ham click={this.handleClick} status={this.state.open}/>
            <div className="top"><Pic /></div>
            <div className="space"></div>
            <div className="about"><About /></div>
        </div>
        )
    }
}

export default Mobile
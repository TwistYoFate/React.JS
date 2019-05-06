import React from 'react';

const Layout=(props)=>{
    return(
        <div className="Layout">
            
             {/* top */}
            {/* <div className="black" style={navstyle}></div> */}

            {/* center */}
            <div className="row">
                <div className="col l2 m2 s12" style={left}>{props.left}</div>  {/* Fixed Side Nav col*/}
                    <div className="col l2 m2 s12"></div>   {/* The support of the sidenav */}
                <div className="col l7 offset-l3 m10 offset-m2 s12" style={mid}>{props.mid}</div>
                <div className="col l3 offset-l9 m2 offset-m10" style={mid}>{props.right}</div>
            </div>
            
            {/* footer */}
            <div className="black" style={footstyle}>{props.footer}</div>
        </div>
    )
}

//css

const left={
    margin:"0",
    padding:'0',
    height:'100vh',
    position:'fixed',
    zIndex:'0'
}

const mid={
    margin:"0",
    padding:'0',
    height:'auto'
}

const navstyle={
    margin:"0",
    padding:'0',
    height:'20vh',
    position:'sticky'
}

const footstyle={
    margin:"0",
    padding:'0',
    height:'8vh'
}

export default Layout



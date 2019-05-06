import React from 'react'
//This component has inline css at last

const Achievements=()=>{
    return(
        <div className="achievements" id="achievements">
            <div className="row">
                <div className="col l10 offset-l1 m10 offset-m1 s12">
                {/* <div className="col s12 m10 offset-m1 l6 offset-l3"> */}
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title" style={head_css}>Achievements.</span>
                            <p>
                                
<span style={info_css}>Successfully organised <b style={{color:'red'}}>TEDxABESEC</b></span><br /> 
<b>Post :</b> Production Head and Designer<br />
<b>Venue :</b> ABES Engineering College, Ghaziabad<br />
<b>Website :</b> <a href="http://www.tedxabesec.com/" target="_blank"> www.tedxabesec.com</a><br />

                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

//CSS

const info_css={
    fontSize:'1.6em',
    fontWeight:'600',
}

const head_css={
    fontSize:'1.8em',
    fontWeight:'600',
    color:"#2196F3",
    fontFamily: "'Special Elite', cursive"

}

export default Achievements
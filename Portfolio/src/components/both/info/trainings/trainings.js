import React from 'react'

//This component has inline css at last

const Trainings=()=>{
    return(
        <div className="trainings" id="trainings">
            <div className="row">
                <div className="col l10 offset-l1 m10 offset-m1 s12">
                {/* <div className="col s12 m10 offset-m1 l6 offset-l3"> */}
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title" style={head_css}>Trainings.</span>
                            <p>
                                
<span style={info_css}>CodeChef Certified Data Structure & Algorithms Programme (CCDSAP)</span><br /> 
<b>Handle Name :</b><a href="https://www.codechef.com/users/acevenom" target="_blank"> acevenom</a><br />
<b>Examination Date :</b> 7th October,2018<br />
<b>Description :</b> It was a Data Structures and Algorithms Certification Training by Codechef followed by a certification exam.<br />
<b>Certificate Link :</b> <a href="https://www.codechef.com/certificates/public/75f00d8" target="_blank"> If you don't trust me</a>
<br /><br />





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

export default Trainings
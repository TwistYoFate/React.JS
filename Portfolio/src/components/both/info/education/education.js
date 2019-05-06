import React from 'react'

//This component has inline css at last

const Education=()=>{
    return(
        <div className="education" id="education">
            <div className="row">
                <div className="col l10 offset-l1 m10 offset-m1 s12">
                {/* <div className="col s12 m10 offset-m1 l6 offset-l3"> */}
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title" style={head_css}>Education.</span>
                            <p>
                                
<span style={info_css}>Bachelor of Technology (B.Tech)</span><br /> 
<b>University :</b> Dr. APJ Abdul Kalam Technical University (AKTU)<br />
<b>College :</b> ABES Engineering College, Ghaziabad<br />
<b>Stream :</b>Computer Science (2016 - 2020)<br />
<b>Current Percentage :</b> 77.80%<br />
<br /><br />
<span style={info_css}>XII (Senior Secondary), Science</span><br />
<b>Year of Completion :</b> 2015<br />
<b>School :</b> The Avadh School<br />
<b>Board :</b> CBSE<br />
<b>Percentage :</b> 80.00%<br />
<br /><br />
<span style={info_css}>X (Secondary)</span><br />
<b>Year of Completion :</b> 2013<br />
<b>School :</b> Dr. Amrit Lal Ishrat Memorial Sunbeam School<br />
<b>Board :</b> CBSE<br />
<b>CGPA :</b> 10/10<br />

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

export default Education
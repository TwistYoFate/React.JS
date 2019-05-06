import React from 'react'

//This component has inline css at last

const Skills=()=>{
    return(
        <div className="skills" id="skills">
            <div className="row">
                <div className="col l10 offset-l1 m10 offset-m1 s12">
                {/* <div className="col s12 m10 offset-m1 l6 offset-l3"> */}
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title" style={head_css}>Skills.</span>
                            <p>
                                
<span style={info_css}>Data Structures</span><br />
<br /><br /> 
<span style={info_css}>Languages</span><br /> 
 C/C++<br />
 <b>Also Familiar With :</b>Java, Javascript, Python<br />
<br /><br />
<span style={info_css}>Development</span><br />
<b>Frontend :</b> HTML, CSS, Google Materialize, React.JS, Redux<br />
<br /><br />
<span style={info_css}>Designing</span><br />
Adobe Photoshop<br />
Adobe Illustrator<br />
Basic Adobe After Effects<br />

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

export default Skills
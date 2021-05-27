import React from 'react';
import Terminal from '../Terminal/Terminal';
import "./Resume.css"

const resume = (props) =>{
  
  const colors = { //Pastel Colors pls
    red:"rgba(245,88,88,.8)",
    orange:"rgba(235, 156, 101,1)",
    yellow:"#ffe085",
    green:"rgba(139,217,117,.8)",
    blue:"rgba(157, 187, 237,1)",
    purple:"rgba(165, 137, 201,1)",

    navy:"rgba(73, 121, 184,.8)",
    lightblue:"rgba(103, 144, 201,.8)",
    burgundy:"rgba(166, 66, 66,.8)"

  }
  
      const education=[
        {
          degree:"Masters of Science in Data Science",
          school:"New Jersey Institute of Technology",
          Yrs:"September 2020 - Present",
          gpa:"3.33",
          extra:"",
        },
        {
          degree:"Bachelors of Science in Computer Science",
          school:"New Jersey Institute of Technology",
          Yrs:"September 2016 - May 2020",
          gpa:"3.65, ",
          extra:"Graduated Cum Laude"
        },
      ]
  
      const jobs=[
        {
          employer:"Automatic Data Processing",
          position:"Associate Application Developer (DevOps SRE / Performance Engineering)",
          dates:"August 2020 - Present",
          bullets:[
            "Monitored production dashboards errors using tools like Splunk and Dynatrace.",
            "Fascilitated in deploying builds using automation pipelines working with Jenkins.",
            "Created scripts and analyzed data for Performance Testing with Virtual User Generator and Load Runner Enterprise."
          ],
          RelevantTech:[
            "Splunk","Jenkins","VirtualUser Generator","LoadRunner Enterprise","Dynatrace","Pagerduty","Docker","InfluxDB","Grafana"
          ]
        },
        // {
        //   employer:"Automatic Data Processing",
        //   position:"Internship - Associate Developer",
        //   dates:"June 2019 - August 2019",
        //   bullets:[
        //     "Effectively communicated with an agile software development team.",
        //     "Developed test application with Java, using tools such as LeanFT, TestNG, and ALM.",
        //     "Contributed to the automation to in-house company applications for the purposes of testing."
        //   ],
        //   RelevantTech:[
        //     "Java","Splunk","Jenkins","ALM","LeanFT",
        //   ]
        // },
  
      ]

    return        ( 
    <div className="container-fluid">
    <div className="row equal mb-5">

    {/* Work Experience */}
    <div className="mt-3 col-12">
        <Terminal icon="fas fa-user-tie" title="Work Experience" bodycolor={colors['red']} textcolor="#FFF">
            
          <div className="row p-2">            
            <div className="col-sm-5 col-md-4 col-xl-2 mb-3 logo-container">
                <img alt="" src="data:image/png;base64,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"
                  style={{
                    "backgroundColor":'#FFF',
                    "maxWidth":"100%",
                    "padding":"15px",
                    "borderRadius":"9px 9px 9px 9px",
                  }}
                  // className={"d-none d-md-block "}
                ></img>
              </div>
            <div className="col-sm-7 col-md-8 col-xl-10 float-left">
              {jobs.map((arr) => (
                <div  >
                  {/* <hr className="m-1"></hr> */}
                    <div>
                      <h2 className="m-0">{arr['position']}</h2>
                      <h4>{arr['employer']}</h4>
                      <h5>{arr['dates']}</h5>
                    </div>

                </div>
              ))}
            </div>
          </div> 
          <div className="pb-4 px-3" style={{"minHeight":"5px"}}>
            {jobs.map((arr) => (
              <div>
                <ul>
                  {arr['bullets'].map((bullet) => (
                    <li className="descriptor">{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          <h5>Relevant Technology:</h5>
            {jobs.map((arr) => (
              <span>
                {arr['RelevantTech'].map((rt) => (
                  <span>{rt}<span>&nbsp;/&nbsp;</span></span>

                ))}
              </span>
              ))}
          </div>
        </Terminal>
      </div>

    {/* Education */}
    <div className="mt-3 col-12">
        <Terminal icon="fas fa-user-graduate" title="Education" bodycolor={colors['navy']} textcolor="#FFF">          
          {education.map((arr) => (
            <div className="pb-2 px-3 pt-3">
            <div className="row">
              <div className="col-sm-5 col-md-4 col-xl-2 mb-3 text-center">
                      <img alt="" src="https://web.njit.edu/~hou/My_NJIT_Website//NJIT.png"
                        style={{
                          "backgroundColor":'#FFF',
                          "maxWidth":"100%",
                          "float":'left',
                          "padding":"15px",
                          "marginTop":"10px",
                          "marginRight":"20px",
                          "borderRadius":"9px 9px 9px 9px",
                        }}
                         className={"logo-center mx-auto"}
                      ></img>

              </div>
              <div className="col-sm-7 col-md-8 col-xl-10 float-left">
                <div>
                  <h2 className="m-0">{arr['degree']}</h2>
                  <h5>{arr['school']}</h5>
                  <p className="descriptor">{arr['Yrs']}<br></br>GPA: {arr['gpa']}<span style={{"color":"gold"}}>{arr['extra']}</span></p>
                </div>
              </div>
            </div>
            </div>
            ))}
          <div></div>
        </Terminal>
      </div>
    


    
    </div>
  </div>
    )

}

export default resume
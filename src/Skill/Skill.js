import React from 'react';
import Terminal from '../Terminal/Terminal';
import List from '../List/List';

const skill = (props) =>{
    
    const languages = [
        {icon:"fab fa-python",text:"Python",time:"6"},
        {icon:"fab fa-java",text:"Java",time:"6"},
        {icon:"fab fa-js",text:"JS",time:"4"},
        {icon:"fas fa-bookmark",text:"HTML/CSS",time:"4"},
        {icon:"fas fa-file-code",text:"C/C++",time:"4"},
        {icon:"fas fa-save",text:"Bash",time:"3"},
      ]
  
    const tools = [
        {icon:"fab fa-github",text:"Git / Github",time:"6"},
        {icon:"fab fa-aws",text:"AWS", time:"3"},
        {icon:"fas fa-tree",text:"Splunk",time:"1"},
        {icon:"fab fa-docker",text:"Docker",time:"1"},
        {icon:"fas fa-chart-line",text:"Loadrunner", time:"1"},
        {icon:"fas fa-chart-pie",text:"Grafana", time:"1"},
        {icon:"fas fa-users",text:"VuGen",time:"1"},
        {icon:"fas fa-fire",text:"Firebase",time:"1"},
      ]

      const DataScience = [
        {icon:"fas fa-feather",text:"Spark",time:"1"},
        {icon:"fas fa-robot",text:"MLlib",time:"1"},
        {icon:"fas fa-table",text:"Pandas",time:"1"},
        {icon:"fas fa-project-diagram",text:"Scikit-learn",time:"1"},
        {icon:"fas fa-hdd",text:"HDFS",time:"1"},
      ]

      const frameworks = [
        {icon:"fas fa-mobile-alt",text:"Bootstraps",time:"4"},
        {icon:"fab fa-angular",text:"Angular",time:"2"},
        {icon:"fab fa-react",text:"React",time:"1"},
      ]


  
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


    return        ( 
    <div className="mb-5">

    {/* <div className="col-sm-12 col-md-6">
      <List  title="Languages" items={languages}></List>      
    </div> */}

        <div className="row">

          <div className="col-12 mt-3">
          <Terminal icon="fas fa-code" title="Languages" bodycolor={colors['red']} textcolor="#FFF">
            <div className="row p-2">
              <div className="col-sm-12 col-md-12 px-3 my-2">
                I've been programming personal project through most of highschool, all of college, and now in post-grad. I'm a self-starter willing to learn the tools for the task at hand. 
              </div>
              <div className="col-sm-12 col-md-12 ">
                <List  title="Languages" items={languages}></List>   
              </div>
            </div>

          </Terminal>
        </div>

        <div className="col-12 mt-3">
          <Terminal icon="fas fa-tools" title="Tools" bodycolor={colors['navy']} textcolor="#FFF">
            <div className="row p-2">
              <div className="col-sm-12 col-md-12 px-3 my-2">
                Like with languages, these tools were learned for fascilitating creation, but also through real-world work experience.
              </div>
              <div className="col-sm-12 col-md-12">
                <List  title="Tool Experience" items={tools}></List>      
              </div>
            </div>
          </Terminal>
        </div>

        <div className="col-12 mt-3">
          <Terminal icon="fas fa-stream" title="Data Science" bodycolor={colors['orange']} textcolor="#FFF">
            <div className="row p-2">
              <div className="col-sm-12 col-md-12 px-3 my-2">
              These are tools I learned in my Data Science masters courses at NJIT. I've been going back to build projects of my own with the skills I learned in these classes.  
              </div>
              <div className="col-sm-12 col-md-12">
              <List  title="Data Science Specific" items={DataScience}></List>     
              </div>
            </div>
          </Terminal>
        </div>

        <div className="col-12 mt-3">
          <Terminal icon="fas fa-layer-group" title="Frameworks" bodycolor={colors['green']} textcolor="#FFF">
            <div className="row p-2">
              <div className="col-sm-12 col-md-12 px-3 my-2">
              Frameworks I've worked in for some of my projects. It won't surprise you to hear that some of them were used to build this website. 
              </div>
              <div className="col-sm-12 col-md-12">
              <List  title="Data Science Specific" items={frameworks}></List>     
              </div>
            </div>
          </Terminal>
        </div>

        </div>
      </div>
    )
}

export default skill
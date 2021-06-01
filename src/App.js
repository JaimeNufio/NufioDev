import React, { Component } from 'react';

//import logo from './logo.svg';
import './App.css';
//import Jumbo from './Jumbo/Jumbo'
import Navbar from './Navbar/Navbar';
import Introduction from './Introduction/Introduction';
import Resume from './Resume/Resume';
import SocialBar from './Introduction/Socialbar/Socialbar';
import Skill from './Skill/Skill';
import Boop from "./Boop/boop";
import Tree from "./Tree/Tree"

// import logo from "public/assets/icon.gif"
import Project from './Project/Project';
import Swoosh from './Swoosh/Swoosh';
import SwooshAlt from './Swoosh/SwooshAlt';


class App extends Component {
  render() {

   const title = {
     title:"$ \"Hello World!\"",
     text:"Hey! My name is Jaime Nufio. "+
     "I'm currently a graduate student at NJIT, and a full time developer at ADP. "+
     "Programming has always been a passion first, and I've built this "+
     "website to quickly introduce my projects to others. If you have any questions, "+
     "you can reach out to me at jaimeenufio@gmail.com"
   }

   return (
      <div className="everything" style={{"maxHeight":"100% !important"}}>



        <Navbar  name="Jaime Nufio" >
        </Navbar>
        <div className="intro pt-5">
          <div className="container px-5 pt-5">
            <div className="row">

              <div className="logo-container col-md-4 col-sm-12 ">
                <img className="logo w-100" src={process.env.PUBLIC_URL+'/assets/icon.gif'} alt="Icon"/>
              </div>

              <div className="logo-container col-md-8 col-sm-12">
                <Introduction className="full" socials="5"  title={title['title']}>
                  <hr></hr>
                  <div className="">
                    {title['text']}
                  </div>
                </Introduction>
              </div>

              {/* <div className="col-4">
                <div className="force-right">
                <MySvg className=""  petal="pink" svgName="tree" h="100%" w="100%"></MySvg>
                </div>
              </div> */}

            </div>
          </div>
          {/* <Swoosh topColor={"#3c5c8f"} bottomColor={"#d58fe3"} ></Swoosh> */}
        </div>

        {/* Default */}
        <SwooshAlt className="bounce" topColor={"#9c1c41"} bottomColor={"#37379e"}></SwooshAlt>
        
        {/* <Swoosh className="bounce" topColor={"#9c1c41"} bottomColor={"#fff"}></Swoosh>
        <Swoosh className="bounce" topColor={"#fff"} bottomColor={"#37379e"}></Swoosh> */}

        <div className="contents">
          <div className="container ">
            <div className="row mx-3" >

              <div className="col-lg-3 col-md-12 " id="dir">
                <div class="sticky-top ">
                <h1 className="" style={{"paddingTop":"90px"}}>Directory</h1>
                <hr></hr>

                <div className="">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item w-100" role="presentation">
                            <button className="nav-link active w-100 py-2" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><i class="fas fa-circle"></i> Projects</button>
                        </li>
                        <li className="nav-item w-100" role="presentation">
                            <button className="nav-link w-100 py-2" id="skill-tab" data-bs-toggle="tab" data-bs-target="#skill" type="button" role="tab" aria-controls="skill" aria-selected="true"><i class="fas fa-circle"></i> Skills</button>
                        </li>
                        <li className="nav-item w-100" role="presentation">
                        <button className="nav-link w-100 py-2" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="false"><i class="fas fa-circle"></i> Experience</button>
                        </li>
                        <li className="nav-item w-100" role="presentation">
                        <button className="nav-link w-100 py-2" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false"><i class="fas fa-circle"></i> Interactable</button>
                        </li>
                    </ul>
                </div> 
                </div>
              </div>

              <div className="col-lg-9 col-md-12 col-sm-12">
                <div className="tab-content" id="myTabContent">
                  <div className="text-white tab-pane fade active show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    {/* <h3 className="pt-5">Click on a Project to see more about it!</h3> */}
                    <Project></Project>
                  </div>
                  <div className="tab-pane fade" id="skill" role="tabpanel" aria-labelledby="skill-tab">
                    <Skill></Skill>
                  </div>
                  <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <Resume></Resume>
                  </div>
                  <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

                  </div>
                </div>
              </div>

            </div>
          </div>
          </div>

          <SocialBar className="full my-3 py-3"></SocialBar>
          

      </div>
    )
  }
}

export default App;

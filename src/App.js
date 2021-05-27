import React, { Component } from 'react';

//import logo from './logo.svg';
import './App.css';
//import Jumbo from './Jumbo/Jumbo'
import Navbar from './Navbar/Navbar';
import Introduction from './Introduction/Introduction';
import Resume from './Resume/Resume';
import SocialBar from './Introduction/Socialbar/Socialbar';
import Skill from './Skill/Skill';

// import logo from "public/assets/icon.gif"
import Project from './Project/Project';



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
      <div>

        <Navbar name="Jaime Nufio" >

        {/* <div className="">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Projects</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link " id="skill-tab" data-bs-toggle="tab" data-bs-target="#skill" type="button" role="tab" aria-controls="skill" aria-selected="true">Skills</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="false">Experience</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Interactable</button>
            </li>
          </ul>
        </div> */}

        </Navbar>

        <div className="intro">
          <div className="container">
            <div className="row">

            <div className="logo-container col-md-4 col-sm-12 p-4">
              <img className="logo w-100" src={process.env.PUBLIC_URL+'/assets/icon.gif'} alt="Icon"/>
            </div>

              <div className="logo-container col-md-8 col-sm-12">
                <Introduction socials="5"  title={title['title']}>
                {title['text']}
              </Introduction>
              </div>

            </div>
          </div>
        </div>

        <div className="container">

        {/* <p className="divider"></p> */}
        
      

        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade active show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
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
        <SocialBar></SocialBar>
      
      </div>



    )

  }
}

export default App;

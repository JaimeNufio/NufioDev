import React from 'react';

const navbar = (props) =>{
    
    // eslint-disable-next-line
    return (
        <div className="bg-dark">
            <nav className="navbar navbar-expand-lg navbar-dark black">
                <div className="container-fluid">
                    <a className="px-3 navbar-brand" href="">{props.name}</a>
                    <div className="float-left"> 
                    
                    {/* {props.children} */}
                    
                    <div className="">
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
                    </div> 


                    </div>
                    <span className="navbar-text">
                        <i className="fas fa-fw fa-circle" style={{"color":"red"}}></i>
                        <i className="fas fa-fw fa-circle" style={{"color":"orange"}}></i>
                        <i className="fas fa-fw fa-circle" style={{"color":"green"}}></i>
                    </span>
                </div>
            </nav>
        </div>
    )
}

export default navbar



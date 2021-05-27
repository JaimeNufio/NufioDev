import React from 'react';
import './introduction.css';

const introduction = (props) =>{
    
    return (
    <div className="title mt-5">
        <div className="text-center">
            <h1 className="title">{props.title}</h1>
        </div>
        {/* <hr></hr> */}
        <p className="mt-3 mb-5 intro-text">{props.children}</p>
        {/* <hr></hr> */}
        
        {/* {props.socials && <Socialbar></Socialbar> } */}
    </div>
    )
}

export default introduction
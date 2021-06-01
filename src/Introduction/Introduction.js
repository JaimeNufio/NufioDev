import React from 'react';
import './introduction.css';
import Boop from "../Boop/boop"
const introduction = (props) =>{
    
    return (
    <div className="title mt-5">

        <Boop rotation="5">
            <div className="text-center">
                <h1 className="title drop-shadow-text">{props.title}</h1>
            </div>
        </Boop>

        {/* <hr></hr> */}
        <p className="mt-3 mb-5 intro-text drop-shadow-text">{props.children}</p>
        {/* <hr></hr> */}
        
        {/* {props.socials && <Socialbar></Socialbar> } */}
    </div>
    )
}

export default introduction
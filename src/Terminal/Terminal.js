import React from 'react'
import './Terminal.css';

const terminal = (props) =>{
    return (
        <div className="bucket">
            <div className="titlebar less-black">
                <div className="py-1" style={{"paddingLeft":"15px","fontSize":"1.2em"}}>
                    <span className="title-span mt-2 " ><i className={props.icon+" "} style={{"paddingRight":"15px"}}></i>{props.title}</span>
                    <span className="navbar-text " style={{"float":"right","paddingRight":"15px"}}>
                        <i className="fas fa-fw fa-circle" style={{"color":"red"}}></i>
                        <i className="fas fa-fw fa-circle" style={{"color":"orange"}}></i>
                        <i className="fas fa-fw fa-circle" style={{"color":"green"}}></i>
                    </span>
                </div>
            </div>
            <div className="window-body" 
            style={{"backgroundColor":props.bodycolor,
                    "color":props.textcolor}}>
                    <div className="mb-0 terminal-body">{props.children}</div>
            </div>
        </div>
    )
}

export default terminal
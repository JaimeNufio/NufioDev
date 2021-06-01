import React, { useState} from 'react'
import Terminal from "../../Terminal/Terminal.js"
import './Project-item.css'
import Boop from "../../Boop/boop"

const projectItem = (props) =>{

    var data = props.items
    const [hoverState, setHoverState] = useState(false);

    return (
        <div className="col-12 col-lg-4 col-md-6 p-2 ">
            <Boop rotation="3">
            <Terminal icon={data.icon} title={""}>
                <div className="bg-dark over-text">
                    <img
                        onMouseEnter={() => setHoverState(true)}
                        className="logo-icon round-bottom" alt="" src={process.env.PUBLIC_URL+data['thumb']}></img>
                        <div className={` `}>
                            {hoverState && (
                                <a href={data.link} onMouseLeave={() => setHoverState(false)} className="round-bottom pt-1 text-on-image transparency">
                                   <div className="popup pb-1 ">
                                        <span className="mb-0 heading px-3">{data.heading}</span>
                                        <div className="p-2 px-3">
                                            <div className="underline my-1"></div>
                                            <p style={{"fontSize":".95em"}}> {data.text}</p>
                                        </div>
                                        <div className="p-2 px-3 bottom-text ">
                                            <i className={`fab fa-${data.app.toLowerCase()}`} style={{"paddingRight":"5px"}}></i> Link to Project On {data.app}
                                        </div>
                                   </div>
                                </a>
                                
                            )}
                        </div>
                </div>
            </Terminal>
            </Boop>
        </div>
    )
}

export default projectItem
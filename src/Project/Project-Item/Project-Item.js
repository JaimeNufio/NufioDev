import React, { useState} from 'react'
import Terminal from "../../Terminal/Terminal.js"
import './Project-item.css'

const projectItem = (props) =>{

    var data = props.items
    const [hoverState, setHoverState] = useState(false);

    return (
        <div className="col-12 col-md-6 col-lg-4 p-2 ">
            <Terminal icon={data.icon} title={data.title}>
                <div className="bg-dark over-text">
                    <img
                        onMouseEnter={() => setHoverState(true)}
                        className="logo-icon round-bottom" alt="" src={process.env.PUBLIC_URL+data['thumb']}></img>
                        <div className={`round-bottom`}>
                            {hoverState && (
                                <a href={data.link} onMouseLeave={() => setHoverState(false)} className="round-bottom pt-4 text-on-image transparency">
                                   <div className="popup pb-3 pt-2">
                                        <p className="mb-0 heading px-3">{data.heading}</p>
                                        <div className="p-2 px-3">
                                            <div className="underline my-1"></div>
                                            <p> {data.text}</p>
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
        </div>
    )
}

export default projectItem
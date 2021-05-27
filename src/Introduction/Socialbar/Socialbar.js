import React from 'react';


const socialbar = (props) =>{

    const socialAcounts  = [
        {name:"Github",link:"https://github.com/jaimenufio"},
        {name:"Instagram",link:"https://instagram.com/JaimeNufio"},
        {name:"Twitter",link:"https://twitter.com/JaimeNufio"},
        {name:"Youtube",link:"https://www.youtube.com/channel/UCxRxe1gWMXQYx1hxmcsWmnA"}   
    ]

    return (
    <div className="container text-white mt-3">
        <hr className="mt-0 mb-2"></hr>
        <div className="px-2 text-center">
            <div className="row">
                {socialAcounts.map((arr) => (
                    <div className="col-6 col-md-3">
                        <a className="" 
                            href={arr['link']}
                            className="text-white mx-3">
                            <i className={"mx-1 fab fa-"+arr['name'].toLowerCase()}
                            ></i>{arr['name']}
                        </a>
                    </div>
                ))}
            </div>
        </div>

        <hr className="mb-5 mt-2"></hr>
    </div>
    )
}

export default socialbar
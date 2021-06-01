import React from 'react';


const socialbar = (props) =>{

    const socialAcounts  = [
        {name:"Github",link:"https://github.com/jaimenufio"},
        {name:"Instagram",link:"https://instagram.com/JaimeNufio"},
        {name:"Twitter",link:"https://twitter.com/JaimeNufio"},
        {name:"Youtube",link:"https://www.youtube.com/channel/UCxRxe1gWMXQYx1hxmcsWmnA"}   
    ]
    

    return (
    <div className="container-fluid text-white py-3" style={{"backgroundColor":"#000"}}>
        {/* <hr className="mt-0 mb-2"></hr> */}
        <div className="px-2 text-center">
            <div className="py-2 " style={{
                "borderBottom":"1px white solid",
                "borderTop":"1px white solid"}}>
                {socialAcounts.map((arr) => (
                    <span className='mx-2'>
                        <a href={arr['link']} className="text-white"><i className={" fab fa-"+arr['name'].toLowerCase()}></i> {arr['name']}
                        </a>
                    </span>
                ))}
            </div>
        </div>
        {/* <p className="text-center mb-0">Jaime Nufio 2021</p> */}
    </div>
    )
}

export default socialbar
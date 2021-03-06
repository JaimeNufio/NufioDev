import React from 'react';
import './List.css';

const list = (props) =>{
    
    return (

        <div className="container-fluid overflow-hidden px-0">
            {/* <p className="divider"></p> */}
            {/* <h2 className="ml-3">{props.title}:</h2>
            <p className="divider"></p> */}

            <div className="p-2" style={{"fontSize":"1.5em"}}>Years of Experience:</div>
            <div className="row d-flex px-4 justify-content-center">
                {props.items.map((arr) => (
                    // <div className="col-sm-6">test</div>
                    // <div className="col-xs-12 col-md-6 col-lg-6 gy-2">
                    //     <div className="row listPair">
                    //         <div className="col-8 listTitleItem">
                    //             {/* {arr['fab'] !== "" && <i className={"fab "+arr['icon']}></i>} */}
                    //             <span className="list-text">{arr['text']}</span>
                    //         </div>
                    //         <div className="col-4 listValueItem ">
                    //             <span className="">{arr['time']}</span>
                    //         </div> 
                    //     </div> 
                    // </div>

                    <div className="col-sm-12 col-md-5 px-0 text-center" style={{"font-size":"1.3em"}}>
                        {arr['fab'] != "" && <span><i className={"fab "+arr['icon']}></i> </span>} {arr['text']} - {arr['time']}
                    </div>

                ))}
            </div>

        </div>


    )
}

export default list
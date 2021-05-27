import React from 'react';

const navbar = (props) =>{
    
    // eslint-disable-next-line
    return (
        <div className="bg-dark">
            <nav className="navbar navbar-expand-lg navbar-dark black">
                <div className="container-fluid">
                    <a className="px-3 navbar-brand" href="">{props.name}</a>
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



import React from 'react';

const Project = ({ item: { img, alt, title, descrip, href, deployed } }) => {
    return(
        <div className="card" style={{width: "20rem", height: "40rem"}}>
            <img src={img} className="card-img-top" alt={alt} />
            <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{descrip}</p>
            <col-sm-12>
            <a href={href} className="btn btn-light" target="_blank">View Code</a> 
            <a href={deployed} className="btn btn-light" target="_blank">View Project</a>
            </col-sm-12>
            </div>
        </div>
    )
}

export default Project;
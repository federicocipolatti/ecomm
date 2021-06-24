import React from 'react';

export const CardDetail = props => {

  return <div className="card mb-3">
    <div className="row g-0">
        <div className="col-md-4">
        <img src={props.img} className="img-fluid rounded-start" alt="logo"/>
        </div>
        <div className="col-md-8">
        <div className="card-body">
            <h5 className="card-title">{props.titulo}</h5>
            <p className="card-text">{props.subtitulo}</p>
            <p className="card-text"><small className="text-muted">{props.detalle}</small></p>
        </div>
        </div>
    </div>
    </div>
}
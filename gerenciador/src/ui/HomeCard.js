import React, { Component } from 'react';

const HomeCard = (props) =>  {
    return(
        <div className="col-5.5 col-sn-4" style={{display: 'flex', margin: '30px auto'}}>
            <div className="card" style={{width: '18rem'}}>
                <img style={{paddingTop: '5px', margin: 'auto', width: '180px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/ITunes_12.2_logo.png/600px-ITunes_12.2_logo.png" className="card-img-top" alt="imagem"/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <button className="btn btn-primary" onClick={props.action}>{props.title}</button>
                </div>
            </div>
        </div>
    )
}

export default HomeCard;
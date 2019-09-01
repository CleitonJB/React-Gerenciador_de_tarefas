import React, { Component } from 'react';

class texto extends Component{

}

class Testando extends Component{
    render(){
        return(
            <div className="Oi">
                <h1>Bem-vindo: {this.props.name}!</h1>
            </div>
        )
    }
}

export default Testando;
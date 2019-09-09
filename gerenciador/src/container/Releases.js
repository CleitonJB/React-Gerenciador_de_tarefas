import React, { Component } from 'react';
import ReleaseForm from '../ui/ReleaseForm';

export default class Releases extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            releases: [
                {
                    id: 1,
                    releasesName: 'Release 01',
                    releasesDate: '01/09/2016'
                },
                {
                    id: 2,
                    releasesName: 'Release 02',
                    releasesDate: '01/09/2017'
                },
                {
                    id: 3,
                    releasesName: 'Release 03',
                    releasesDate: '01/09/2018'
                },
                {
                    id: 4,
                    releasesName: 'Release 04',
                    releasesDate: '01/09/2019'
                }
            ]
        }
    }

    handleSubmit(e, {name, date}){
        e.preventDefault();
        var state = this.state;
        var myRelease = {
            id: state.releases.length + 1,
            releaseName: name,
            releaseDate: date
        }
        this.setState({releases: state.releases.concat(myRelease)});
    }

    render() {
        return (
            <div className="container-fluid" style={{padding: '10px 0px'}}> 
                <ReleaseForm submitHandler={this.handleSubmit}/>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Releases Name</th>
                            <th scope="col">Releases Date</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.releases.map((releases, index) => {
                            return (
                                <tr>
                                    <th scope="row">{releases.id}</th>
                                    <td>{releases.releasesName}</td>
                                    <td>{releases.releasesDate}</td>
                                    <td><button type="button" className="btn-sm btn-danger">Remove</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
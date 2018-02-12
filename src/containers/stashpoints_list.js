import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchStashPoints } from "../actions/index";

class StashPointsList extends Component {

    componentDidMount() {
        //this.props.fetchStashPoints();
    }

    renderOpenLate() {
        return <span className="badge badge-pill badge-primary">Open Late</span>
    }

    renderOpenTwentyFourSeven() {
        return <span className="badge badge-pill badge-info float-right">24/7</span>
    }


    renderStashPoint(stashpoint) {
        const { id, photos, name, location_name, contact, open_late, open_twentyfour_seven, bags_last_30_days }  = stashpoint;

        return (
            <div key={ id } className="col-lg-4 col-md-6 p-2">
                <div className="card">
                    <div className="card-body">
                        <div className="media">
                            <img className="align-self-start mr-3" src={photos[0]}/>
                            <div className="media-body">
                                <h5>{ name }</h5>
                                <h6 className="mb-2 text-muted">{ location_name }</h6>
                            </div>
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            { open_late ? this.renderOpenLate() : '' }
                            { open_twentyfour_seven ? this.renderOpenTwentyFourSeven() : '' }
                        </li>
                        <li className="list-group-item">
                            {bags_last_30_days} items stored last month
                        </li>
                        <li className="list-group-item">
                            <p className="card-text">
                                email: {contact.email}
                            </p>
                            <p className="card-text">
                                Phone number: {contact.phone_number}
                            </p>
                        </li>
                    </ul>
                    <div className="card-body">
                        <a href="#" className="btn btn-outline-info btn-sm float-right">details</a>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="d-inline-flex flex-wrap justify-content-center">
                { _.map(this.props.stashpoints, stashpoint => this.renderStashPoint(stashpoint)) }
            </div>
        )
    }
}

function mapStateToProps({stashpoints}) {
    return { stashpoints };
}

export default connect(mapStateToProps, { fetchStashPoints })(StashPointsList);
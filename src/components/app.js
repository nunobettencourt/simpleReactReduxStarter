import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import StashPointsList from '../containers/stashpoints_list';
import GoogleMap from '../components/google_map';

export default class App extends Component {
    render() {
        return (
            <div className="container h-100">
                <div className="row align-items-start fixed-top">
                    <div className="col">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                            <a className="navbar-brand" href="#">
                                <img src='../../img/logo.svg' width="149" height="24" alt="CityStasher" />
                            </a>
                            <SearchBar/>
                        </nav>
                    </div>
                </div>
                <div className="col embed-responsive embed-responsive-21by9 order-first p-4">
                    <GoogleMap/>
                </div>
                <div className="row align-items-start">
                    <div className="col">
                        <StashPointsList/>
                    </div>
                </div>
                <div className="row align-items-end fixed-bottom">
                    <div className="col">
                        footer
                    </div>
                </div>
            </div>
        );
    }
}
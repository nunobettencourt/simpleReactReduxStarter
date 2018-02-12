import React, { Component } from 'react';
import {connect} from "react-redux";
import _ from 'lodash';

class GoogleMap extends Component {

    constructor() {
        super();
        this.renderMarker = this.renderMarker.bind(this);
        this.moveToLocation = this.moveToLocation.bind(this);
    }

    componentDidMount() {

        /** render the map **/
        this.map = new google.maps.Map(this.refs.map, {
            zoom: 12
        });


        /** Try HTML5 geolocation **/
        if (navigator.geolocation) {

            /** If Geolocation is supported, center map on user's location **/
            navigator.geolocation.getCurrentPosition((position) => {
                let pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                this.map.setCenter(pos);
            }, function() {
                handleLocationError(true, infoWindow, map.getCenter());
            });
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }

        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            infoWindow.setPosition(pos);
            infoWindow.setContent(browserHasGeolocation ?
                'Error: The Geolocation service failed.' :
                'Error: Your browser doesn\'t support geolocation.');
        }


    }

    componentWillReceiveProps(nextProps) {

        /** Update map's center position **/
        this.moveToLocation(nextProps.map.lat, nextProps.map.lon);

        /** When component gets new stashpoints, render respective markers **/
        _.map(nextProps.stashpoints, stashpoint => { this.renderMarker(stashpoint.latitude, stashpoint.longitude) });

    }

    moveToLocation(lat, lng){
        let center = new google.maps.LatLng(lat, lng);
        this.map.panTo(center);
    }

    renderMarker(lat, lng) {
        let marker = new google.maps.Marker({
            map: this.map,
            draggable: true,
            animation: google.maps.Animation.DROP,
            position: {lat, lng}
        });
    }

    render() {
        return <div ref="map" className="google-map embed-responsive-item" />;
    }
}

function mapStateToProps({map, stashpoints}) {
    return {
        map,
        stashpoints
    };
}

export default connect(mapStateToProps)(GoogleMap);
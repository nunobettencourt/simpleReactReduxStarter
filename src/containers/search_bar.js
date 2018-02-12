import React, { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchStashPoints, updateCenterPsition } from "../actions/index";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: '',
            foundAddress: '',
            lat: '',
            lon: '',
            min_capacity: 1,
            active: true,
            sort: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.geocodeAddress = this.geocodeAddress.bind(this);
    }

    componentDidMount() {
        this.geocoder = new google.maps.Geocoder();
    }

    /**
     * Geocodes the received location into latitude and longitude.
     * @param {string} location
     */
    geocodeAddress(location) {
        this.geocoder.geocode({ 'address': location }, (results, status) => {

            if (status === google.maps.GeocoderStatus.OK) {

                this.setState({
                    location,
                    foundAddress: results[0].formatted_location,
                    lat: results[0].geometry.location.lat(),
                    lon: results[0].geometry.location.lng(),
                    isGeocodingError: false
                });

            } else {

                this.setState({
                    foundAddress: null,
                    isGeocodingError: true
                });
            }

        });
    }

    /**
     * Handles changes in input fields.
     * @param {Object} event
     */
    onInputChange(event) {
        const { id, value } = event.target;

        /** if the input field is 'location' we need to geoCode it before setting the new State **/
        if(id === 'location') {

            this.geocodeAddress(event.target.value);

        } else {

            this.setState({ [id]: value });

        }
    }

    /**
     * Handles Form submit.
     * @param {Object} event
     */
    onFormSubmit(event) {
        event.preventDefault();

        /** Update Map's center **/
        this.props.updateCenterPsition(this.state);

        /** Fetch area's stashpoints **/
        this.props.fetchStashPoints(this.state);

    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit } className="form-inline">

                <input
                    type="text"
                    id="location"
                    placeholder="Where to store"
                    className="form-control mb-2 mr-sm-2"
                    value={this.state.location}
                    onChange={this.onInputChange}
                />
                <input
                    type="number"
                    id="min_capacity"
                    placeholder="No. of items"
                    className="form-control mb-2 mr-sm-2"
                    value={this.state.min_capacity}
                    onChange={this.onInputChange}
                />
                <select
                    id="sort"
                    className="form-control mb-2 mr-sm-2"
                    value={this.state.sort}
                    onChange={this.onInputChange}
                >
                    <option value="">Sort by</option>
                    <option value="by_distance">By distance</option>
                    <option value="by_capacity">By capacity</option>
                    <option value="by_bags_last_30_days">By bags in the last 30 days</option>
                </select>
                <button type="submit" className="btn btn-outline-primary mb-2">Submit</button>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchStashPoints, updateCenterPsition}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

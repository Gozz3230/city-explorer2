import React from 'react';

class Map extends React.Component {
    render() {
        let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API}&center=${this.props.mapsData.lat},${this.props.mapsData.lon}&zoom=10`;

        return (
            <div>
                <h2 className="mapTitle">{this.props.mapsData.display_name}</h2>
                <p>Latitude: {this.props.mapsData.lat}</p>
                <p>Longitude: {this.props.mapsData.lon}</p>
                <img src={mapUrl} alt="" className="img-map" />
            </div>
        );
    }
}

export default Map;
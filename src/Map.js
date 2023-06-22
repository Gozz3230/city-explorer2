import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import './Map.css';

class Map extends React.Component {
    render() {
        let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API}&center=${this.props.mapsData.lat},${this.props.mapsData.lon}&zoom=10`;

        return (
            <>
                <Card class="card">
                    <h2 className="mapTitle">{this.props.mapsData.display_name}</h2>
                    <p>Latitude: {this.props.mapsData.lat}</p>
                    <p>Longitude: {this.props.mapsData.lon}</p>
                    <Image src={mapUrl} alt="" className="img-map" />
                </Card>
            </>
        );
    }
}

export default Map;
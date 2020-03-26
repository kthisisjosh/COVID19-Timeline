import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import HeatmapLayer from "react-leaflet-heatmap-layer";
import { addressPoints } from './realworld.1000.js';

class MainMap extends React.Component {

    render() {
        return (

            <Map center={[56.13, -106.34]} zoom={4} style={{ height: "35rem" }}>
                <HeatmapLayer
                    fitBoundsOnLoad
                    fitBoundsOnUpdate
                    points={addressPoints}
                    longitudeExtractor={m => m[1]}
                    latitudeExtractor={m => m[0]}
                    intensityExtractor={m => parseFloat(m[2])} />
                <TileLayer
                    url='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </Map>

        );
    }

}

export default MainMap;
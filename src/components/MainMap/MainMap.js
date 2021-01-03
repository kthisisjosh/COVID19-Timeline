import React, { Component } from 'react';
import { Map } from 'react-leaflet';
import MapBoxGLLayer from "./MapBoxGLLayer";

const MAPBOX_ACCESS_TOKEN = "pk.eyJ1Ijoia3RoaXNpc2pvc2giLCJhIjoiY2tqaGg2NHk5MHgzYTMwcHNtMGcxZngzNyJ9.f5dLM6aZdu3U9eeUwZnAOQ";

class MainMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyMAP: Math.random(),
        }
    }

    render() {
        return (
            <div>
                <Map className="mainmap" center={this.props.mapStart[0]} zoom={this.props.mapStart[1]} style={{ height: "65vh" }} key={this.state.keyMAP}>
                    <MapBoxGLLayer
                        accessToken={MAPBOX_ACCESS_TOKEN}
                        style={this.props.style}
                        attribution='© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> , © <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="https://www.mapbox.com/map-feedback/">Improve this map</a>'
                    />
                </Map>
            </div>
        )
    }
}

export default MainMap;
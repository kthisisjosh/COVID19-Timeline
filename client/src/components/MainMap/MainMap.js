import React, { Component } from 'react';
import { Map } from 'react-leaflet';
import MapBoxGLLayer from "./MapBoxGLLayer";
import { DateContext } from "../../contexts/DateContext";

const MAPBOX_ACCESS_TOKEN = "pk.eyJ1Ijoia3RoaXNpc2pvc2giLCJhIjoiY2s4ODZxYzdqMDVoYzNvbzMzNWwzcWMxOCJ9.42fWcwI1CrrODWXGrEVeFQ";
const FebMapStyle = "mapbox://styles/kthisisjosh/ck89gkzb602l71ipr3sxx8sve";
const Mar24MapStyle = "mapbox://styles/kthisisjosh/ck8822dgd16941jm7qidyc2t9";

class MainMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyMAP: Math.random(),
            mapStyle: Mar24MapStyle
        }
    }

    render() {

        return (
            <DateContext.Consumer>{(context) => {
                const { selectedStyle } = context;

                return (
                    <div>
                        <Map center={[58.783, -96.469]} zoom={3.58} style={{ height: '55vh' }} key={this.state.keyMAP}>
                            <MapBoxGLLayer
                                accessToken={MAPBOX_ACCESS_TOKEN}
                                style={selectedStyle}
                                attribution='© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> , © <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="https://www.mapbox.com/map-feedback/">Improve this map</a>'
                            />
                        </Map>
                    </div>
                )
            }}</DateContext.Consumer>
        );
    }
}

export default MainMap;
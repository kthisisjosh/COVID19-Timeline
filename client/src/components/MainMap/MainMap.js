import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import MapBoxGLLayer from "./MapBoxGLLayer";

const MAPBOX_ACCESS_TOKEN = "pk.eyJ1Ijoia3RoaXNpc2pvc2giLCJhIjoiY2s4ODZxYzdqMDVoYzNvbzMzNWwzcWMxOCJ9.42fWcwI1CrrODWXGrEVeFQ";

const MainMap = (geojson) => {

    return (
        <div>
            <Map center={[60.785, -95.481]} zoom={3.5} style={{ height: "35rem" }}>
                <MapBoxGLLayer
                    accessToken={MAPBOX_ACCESS_TOKEN}
                    style="mapbox://styles/kthisisjosh/ck8822dgd16941jm7qidyc2t9"
                    attribution='© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> , © <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="https://www.mapbox.com/map-feedback/">Improve this map</a>'
                />
            </Map>
        </div>
    );
}

export default MainMap;
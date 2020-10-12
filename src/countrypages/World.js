import React, { Fragment } from 'react'
import Timelinebody from "../components/TimelineBody/TimelineBody";
import WorldArticleData from "../data/countryarticledata/WorldArticleData";

const WorldMar28MapStyle = "mapbox://styles/kthisisjosh/ck8c3fxcz2mdf1ineebd7raon";
const MapStart = [[40.726, 13.155], 1.75];

const World = () => {
    return (
        <Fragment>
            <Timelinebody
                country="World"
                articleData={WorldArticleData}
                mapStyle={WorldMar28MapStyle}
                mapStart={MapStart}
            />
        </Fragment>
    )
}

export default World;
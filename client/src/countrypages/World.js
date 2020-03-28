import React, { Fragment } from 'react'
import Timelinebody from "../components/TimelineBody/TimelineBody";
import WorldCaseData from "../countrycasedata/WorldCaseData";
import WorldArticleData from "../countryarticledata/WorldArticleData";

const WorldMar28MapStyle = "mapbox://styles/kthisisjosh/ck8c3fxcz2mdf1ineebd7raon";
const MapStart = [[40.726, 13.155], 1.75];

const World = () => {
    return (
        <Fragment>
            <Timelinebody
                country="World"
                caseData={WorldCaseData}
                articleData={WorldArticleData}
                mapStyle={WorldMar28MapStyle}
                mapStart={MapStart}
            />
        </Fragment>
    )
}

export default World;
import React, { Fragment } from 'react'
import Timelinebody from "../components/TimelineBody/TimelineBody";
import USACaseData from "../data/countrycasedata/USACaseData";
import USAArticleData from "../data/countryarticledata/USAArticleData";

const USAMar28MapStyle = "mapbox://styles/kthisisjosh/ck8c2mp7i2ll31inetwptk1nx";
const MapStart = [[38.729, -95.220], 4.45];

const USA = () => {
    return (
        <Fragment>
            <Timelinebody
                country="America"
                caseData={USACaseData}
                articleData={USAArticleData}
                mapStyle={USAMar28MapStyle}
                mapStart={MapStart}
            />
        </Fragment>
    )
}

export default USA;
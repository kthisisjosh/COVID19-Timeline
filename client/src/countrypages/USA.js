import React, { Fragment } from 'react'
import Timelinebody from "../components/TimelineBody/TimelineBody";
import USACaseData from "../countrycasedata/USACaseData";
import USAArticleData from "../countryarticledata/USAArticleData";
const USAMar28MapStyle = "mapbox://styles/kthisisjosh/ck8c2mp7i2ll31inetwptk1nx";

const USA = () => {
    return (
        <Fragment>
            <Timelinebody
                country="United States"
                caseData={USACaseData}
                articleData={USAArticleData}
                mapStyle={USAMar28MapStyle}
            />
        </Fragment>
    )
}

export default USA;
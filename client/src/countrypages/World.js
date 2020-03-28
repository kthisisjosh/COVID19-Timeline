import React, { Fragment } from 'react'
import Timelinebody from "../components/TimelineBody/TimelineBody";
import WorldCaseData from "../countrycasedata/WorldCaseData";
import WorldArticleData from "../countryarticledata/WorldArticleData";
const WorldMar28MapStyle = "mapbox://styles/kthisisjosh/ck8c3fxcz2mdf1ineebd7raon";

const World = () => {
    return (
        <Fragment>
            <Timelinebody
                country="The World"
                caseData={WorldCaseData}
                articleData={WorldArticleData}
                mapStyle={WorldMar28MapStyle}
            />
        </Fragment>
    )
}

export default World;
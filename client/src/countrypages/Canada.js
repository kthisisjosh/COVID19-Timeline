import React, { Fragment } from 'react'
import CanadaCaseData from "../countrycasedata/CanadaCaseData";
import CanadaArticleData from "../countryarticledata/CanadaArticleData";
import TimelineBody from "../components/TimelineBody/TimelineBody";

// const CanadaFebMapStyle = "mapbox://styles/kthisisjosh/ck89gkzb602l71ipr3sxx8sve";
const CanadaMar24MapStyle = "mapbox://styles/kthisisjosh/ck8822dgd16941jm7qidyc2t9";

const Canada = () => {
    return (
        <Fragment>
            <TimelineBody 
                country="Canada"
                caseData={CanadaCaseData}
                articleData={CanadaArticleData}
                mapStyle={CanadaMar24MapStyle}
            />
        </Fragment>
    )
}

export default Canada;
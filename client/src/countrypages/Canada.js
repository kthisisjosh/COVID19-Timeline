import React, { Fragment } from 'react';
import MediaQuery from "react-responsive";
import CanadaCaseData from "../data/countrycasedata/CanadaCaseData";
import CanadaArticleData from "../data/countryarticledata/CanadaArticleData";
import TimelineBody from "../components/TimelineBody/TimelineBody";

// const CanadaFebMapStyle = "mapbox://styles/kthisisjosh/ck89gkzb602l71ipr3sxx8sve";
const CanadaMar24MapStyle = "mapbox://styles/kthisisjosh/ck8822dgd16941jm7qidyc2t9";
const MapStart = [[58.783, -96.469], 3.58];

const Canada = () => {
    return (
        <Fragment>
            <MediaQuery maxWidth={500}>
                <h1>Phone experience</h1>
            </MediaQuery>
            <MediaQuery minWidth={501}>
                <TimelineBody
                    country="Canada"
                    caseData={CanadaCaseData}
                    articleData={CanadaArticleData}
                    mapStyle={CanadaMar24MapStyle}
                    mapStart={MapStart}
                />
            </MediaQuery>
        </Fragment>
    )
}

export default Canada;
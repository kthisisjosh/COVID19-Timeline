import React, { Fragment } from 'react';
import CanadaArticleData from "../data/countryarticledata/CanadaArticleData";
import TimelineBody from "../components/TimelineBody/TimelineBody";

// const CanadaFebMapStyle = "mapbox://styles/kthisisjosh/ck89gkzb602l71ipr3sxx8sve";
const CanadaMar26MapStyle = "mapbox://styles/kthisisjosh/ck89g7hh2026e1jnuqbqg44a3";
const MapStart = [[58.783, -96.469], 3.58];

const Canada = () => {
    return (
        <Fragment>
            <TimelineBody
                country="Canada"
                articleData={CanadaArticleData}
                mapStyle={CanadaMar26MapStyle}
                mapStart={MapStart}
            />
        </Fragment>
    )
}

export default Canada;
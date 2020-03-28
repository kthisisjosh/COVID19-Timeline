import React, { Fragment } from 'react'
import Timelinebody from "../components/TimelineBody/TimelineBody";

const USA = () => {
    return (
        <Fragment>
            <Timelinebody
                country="United States"
                //caseData={CanadaCaseData}
                //articleData={CanadaArticleData}
                //mapStyle={CanadaMar24MapStyle}
            />
        </Fragment>
    )
}

export default USA;
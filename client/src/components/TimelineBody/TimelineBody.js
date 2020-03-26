import React from 'react'
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography";
import EventPane from "../EventPane/EventPane";
import InfoHeader from "../InfoHeader/InfoHeader";
import DateSlider from "../DateSlider/DateSlider";
import MainMap from "../MainMap/MainMap.js"

const TimelineBody = () => {
    return (
        <Paper>
            <Grid container spacing={1}>

                <Grid item md={5} xs={12} zeroMinWidth>
                    <Paper>
                        <Typography variant="h3" color="primary" align="center" gutterBottom>
                            COVID-19 Timeline
                        </Typography>
                        <EventPane />
                        <DateSlider />
                    </Paper>
                </Grid>


                <Grid item md={7} xs={12} zeroMinWidth>
                    <Paper>
                        <InfoHeader />
                            
                    </Paper>
                </Grid>

            </Grid>
        </Paper>
    )
}

export default TimelineBody;
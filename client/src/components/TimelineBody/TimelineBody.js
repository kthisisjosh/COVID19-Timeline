import React from 'react'
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography";
import EventPane from "../EventPane/EventPane";
import InfoHeader from "../InfoHeader/InfoHeader";
import DateSlider from "../DateSlider/DateSlider";
import MainGraph from "../MainGraph/MainGraph";
import MainMap from "../MainMap/MainMap.js";

const TimelineBody = () => {
    return (

        <Grid container spacing={1} style={{ backgroundColor: "#222831" }}>

            <Grid item md={5} xs={12} zeroMinWidth>
                <Paper style={{ backgroundColor: "#393e46" }}>
                    <Typography variant="h3" color="primary" align="center" gutterBottom>
                        COVID-19 Timeline
                        </Typography>
                    <EventPane />
                </Paper>
                <Paper style={{ backgroundColor: "#393e46", marginTop: "2%" }}>
                    <DateSlider />
                </Paper>
            </Grid>


            <Grid item md={7} xs={12} zeroMinWidth>
                <Paper style={{ backgroundColor: "#393e46" }}>
                    <InfoHeader />
                </Paper>
                <Paper style={{ backgroundColor: "#393e46", marginTop: "1%" }}>
                    <MainGraph />
                </Paper>
            </Grid>

        </Grid>

    )
}

export default TimelineBody;
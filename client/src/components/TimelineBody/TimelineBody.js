import React from 'react'
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography";
import EventPane from "../EventPane/EventPane";

const TimelineBody = () => {
    return (
        <Grid container spacing={1}>
            <Grid item md={4} xs={12} zeroMinWidth>
                <Paper>
                    <Typography variant="h3" color="primary" align="center" gutterBottom>
                        COVID-19 Timeline
                    </Typography>
                    <EventPane />
                </Paper>
            </Grid>
            <Grid item md={8} xs={12} zeroMinWidth>
                <Paper>This is xs=8</Paper>
            </Grid>
        </Grid>
    )
}

export default TimelineBody;
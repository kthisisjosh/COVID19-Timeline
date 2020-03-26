import React from 'react'
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { startOfToday, format } from "date-fns";

const InfoHeader = (props) => {

    const today = startOfToday();
    return (
        <div style={{ margin: "1rem", marginTop: "0.75%" }}>

            <Grid container spacing={2} alignContent="space-between" alignItems="space-between" justify="center">

                <Grid container sm={2} xs={2} justify="center">
                    <Grid item alignContent="center" alignItems="center">
                        <Typography variant="h3">
                            1043
                            </Typography>
                        <Typography align="center" variant="subtitle1">
                            confirmed
                            </Typography>
                    </Grid>
                </Grid>

                <Grid container sm={2} xs={2} justify="center">
                    <Grid item alignContent="center" alignItems="center">
                        <Typography variant="h3">
                            +14
                            </Typography>
                        <Typography align="center" variant="subtitle1">
                            from yesterday
                            </Typography>
                    </Grid>
                </Grid>

                <Grid container xs={4} justify="center">
                    <Grid item alignContent="center" alignItems="center">
                        <Typography align="center" variant="h3">
                            Canada
                        </Typography>
                        <Typography align="center" variant="h6">
                            on {format(today, "MMMM dd yyyy") }
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container sm={2} xs={2} justify="center">
                    <Grid item alignContent="center" alignItems="center">
                        <Typography variant="h3">
                            1043
                            </Typography>
                        <Typography align="center" variant="subtitle1">
                            recovered
                            </Typography>
                    </Grid>
                </Grid>

                <Grid container sm={2} xs={2} justify="center">
                    <Grid item alignContent="center" alignItems="center">
                        <Typography variant="h3">
                            +19
                            </Typography>
                        <Typography align="center" variant="subtitle1">
                            from yesterday
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>

        </div>
    )
}

export default InfoHeader;
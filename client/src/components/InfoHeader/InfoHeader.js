import React from 'react'
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const InfoHeader = (props) => {
    return (
        <div style={{ margin: "1rem", marginTop: "0.75%" }}>

            <Grid container spacing={2} alignContent="space-between" alignItems="space-between" justify="center">

                <Grid container md={2} justify="center">
                    <Grid item alignContent="center" alignItems="center">
                        <Typography variant="h3" color="secondary">
                            1043
                            </Typography>
                        <Typography align="center" variant="subtitle1">
                            confirmed
                            </Typography>
                    </Grid>
                </Grid>

                <Grid container md={2} justify="center">
                    <Grid item alignContent="center" alignItems="center">
                        <Typography variant="h3" color="secondary">
                            +14
                            </Typography>
                        <Typography align="center" variant="subtitle1">
                            from yesterday
                            </Typography>
                    </Grid>
                </Grid>

                <Grid container md={4} justify="center">
                    <Grid item alignContent="center" alignItems="center">
                        <Typography align="center" variant="h2" color="primary">
                            Canada
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container md={2} justify="center">
                    <Grid item alignContent="center" alignItems="center">
                        <Typography variant="h3" color="secondary">
                            1043
                            </Typography>
                        <Typography align="center" variant="subtitle1">
                            recovered
                            </Typography>
                    </Grid>
                </Grid>

                <Grid container md={2} justify="center">
                    <Grid item alignContent="center" alignItems="center">
                        <Typography variant="h3" color="secondary">
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
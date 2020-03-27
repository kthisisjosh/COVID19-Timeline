import React from 'react'
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { startOfToday, format } from "date-fns";
import data from "../MainGraph/CasesData"

const InfoHeader = (props) => {

    const today = startOfToday();

    let confirmed = 0;
    let confirmedYes = 0;
    let recovered = "N/A";
    let recoveredYes = "N/A";

    const selectedDate = new Date(props.date);

    const month = selectedDate.getMonth();
    const day = selectedDate.getDate();

    if (month === 1) {
        confirmed = ((data[month - 1].daily[day - 11].cases));
        if (day === 11) {
            confirmedYes = 0;
        } else {
            confirmedYes = ((data[month - 1].daily[day - 11].cases) - (data[month - 1].daily[day - 12].cases));
        }
    }

    try {
        if (month > 1) {
            confirmed = ((data[month - 1].daily[day - 1].cases));
            if (day === 1) {
                confirmedYes = ((data[month - 1].daily[day - 1].cases) - 82);
            } else {
                confirmedYes = ((data[month - 1].daily[day - 1].cases) - (data[month - 1].daily[day - 2].cases));
            }
        }
    } catch (err) {
        confirmed = "N/A";
        confirmedYes = "N/A";
    }

    return (
        <div style={{ margin: "1rem", marginTop: "0.75%" }}>

            <Grid container spacing={2} alignContent="space-between" alignItems="center" justify="center">

                <Grid container sm={2} xs={2} item={true} justify="center">
                    <Grid item >
                        <Typography variant="h3">
                            {confirmed}
                        </Typography>
                        <Typography align="center" variant="subtitle1" style={{ color: "#c6c1ba" }}>
                            confirmed
                            </Typography>
                    </Grid>
                </Grid>

                <Grid container sm={2} xs={2} item={true} justify="center">
                    <Grid item >
                        <Typography variant="h3">
                            +{confirmedYes}
                        </Typography>
                        <Typography align="center" variant="subtitle1" style={{ color: "#c6c1ba" }}>
                            from yesterday
                            </Typography>
                    </Grid>
                </Grid>

                <Grid container xs={4} item={true} justify="center">
                    <Grid item >
                        <Typography align="center" variant="h3" style={{fontWeight: "bold"}}>
                            Canada
                        </Typography>
                        <Typography align="center" variant="h6" style={{ color: "#c6c1ba" }}>
                            map updated as of {format(today, "MMMM dd yyyy")}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container sm={2} xs={2} item={true} justify="center">
                    <Grid item >
                        <Typography variant="h3">
                            {recovered}
                        </Typography>
                        <Typography align="center" variant="subtitle1" style={{ color: "#c6c1ba" }}>
                            recovered
                            </Typography>
                    </Grid>
                </Grid>

                <Grid container sm={2} xs={2} item={true} justify="center">
                    <Grid item >
                        <Typography variant="h3">
                            +{recoveredYes}
                        </Typography>
                        <Typography align="center" variant="subtitle1" style={{ color: "#c6c1ba" }}>
                            from yesterday
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>

        </div>
    )
}

export default InfoHeader;
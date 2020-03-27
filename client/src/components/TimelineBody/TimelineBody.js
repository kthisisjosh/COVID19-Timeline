import React, { Component } from 'react'
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography";
import EventPane from "../EventPane/EventPane";
import InfoHeader from "../InfoHeader/InfoHeader";
import DateSlider from "../DateSlider/DateSlider";
import MainGraph from "../MainGraph/MainGraph";
import MainMap from "../MainMap/MainMap.js";
import Footer from "../Footer/Footer";
import { DateContext } from "../../contexts/DateContext";

class TimelineBody extends Component {
    render() {

        return (
            <DateContext.Consumer>{(context) => {
                const { selectedDate } = context;

                return (
                    <Grid container spacing={1} style={{ backgroundColor: "#393e46", height: "98.2vh", width: "99.5vw", paddingTop: "1.9vh", paddingBottom: 0 }}>

                        <Grid container spacing={1}>

                            <Grid item md={5} xs={12} zeroMinWidth style={{ height: "98" }}>
                                <Paper style={{ backgroundColor: "#222831", height: "91.5vh" }}>
                                    <Typography variant="h3" align="center">
                                        COVID-19 Timeline
                                    </Typography>
                                    <EventPane />
                                    <DateSlider />
                                </Paper>

                            </Grid>


                            <Grid item md={7} xs={12} zeroMinWidth style={{ height: "98" }}>
                                <Paper style={{ backgroundColor: "#222831", height: "91.5vh" }}>
                                    <InfoHeader date={selectedDate} />
                                    <MainMap />
                                    <MainGraph />
                                </Paper>
                            </Grid>

                        </Grid>




                        <Grid container style={{ height: "2vh", marginTop: "3vh" }}>
                            <Footer />
                        </Grid>
                    </Grid>
                )
            }}</DateContext.Consumer>
        )
    }
}

export default TimelineBody;
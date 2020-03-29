import React from 'react'
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

const TimelineBody = (props) => {


    return (
        <DateContext.Consumer>{(context) => {
            const { selectedDate } = context;

            return (
                <Grid container spacing={1} style={{ backgroundColor: "#222831", height: "98.2vh", width: "99.5vw", paddingTop: "1vh", paddingBottom: 0 }}>

                    <Grid container spacing={1}>

                        <Grid item md={5} xs={12} zeroMinWidth style={{ height: "98" }}>
                            <Paper style={{ backgroundColor: "#12171d", height: "91.5vh" }}>
                                <Typography variant="h3" align="center" style={{ paddingTop: "0.9rem" }}>
                                    COVID-19 Timeline
                                    </Typography>
                                <EventPane data={props.articleData}/>
                                <DateSlider />
                            </Paper>

                        </Grid>


                        <Grid item md={7} xs={12} zeroMinWidth style={{ height: "98", marginTop:"0.8vh" }}>
                            <Paper style={{ backgroundColor: "#12171d", height: "91.5vh" }}>
                                <InfoHeader date={selectedDate} country={props.country} data={props.caseData}/>
                                <MainMap style={props.mapStyle} mapStart={props.mapStart}/>
                                <MainGraph data={props.caseData}/>
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

export default TimelineBody;
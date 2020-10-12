import React from 'react'
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography";
import EventPane from "../EventPane/EventPane";
import InfoHeader from "../InfoHeader/InfoHeader";
import DateSlider from "../DateSlider/DateSlider";
import MainGraph from "../MainGraph/MainGraph";
import MainMap from "../MainMap/MainMap.js";
import moment from "moment"
import Footer from "../Footer/Footer";
import { DateContext } from "../../contexts/DateContext";
import { useMediaQuery } from 'react-responsive'

// <MainMap style={props.mapStyle} mapStart={props.mapStart}/>
const TimelineBody = (props) => {
    const isMobile = useMediaQuery({ query: '(min-device-width: 960px)' })
    const [date, setDate] = React.useState(moment().utc().startOf("day"))

    return (
        <DateContext.Consumer>{(context) => {
            const { selectedDate } = context;
            setDate(selectedDate)

            return (
                <Grid container className="main-container" spacing={1} style={{ backgroundColor: "#222831", height: "90%", paddingTop: "1vh", paddingBottom: 0 }}>

                    <Grid className="secondary-container" container spacing={1}>

                        <Grid className="first-container" item md={5} xs={12} zeroMinWidth>
                            <Paper style={{ backgroundColor: "#12171d"}}>
                                <Typography className="covid-title" variant="h3" align="center" style={{ paddingTop: "0.9rem", fontSize: 36 }}>
                                    COVID-19 Timeline
                                    </Typography>
                                <EventPane isMobile={isMobile} data={props.articleData} country={props.country}/>
                                <DateSlider isMobile={isMobile} date={date} />
                            </Paper>

                        </Grid>


                        <Grid item md={7} xs={12} zeroMinWidth style={{ height: "98", marginTop:"1vh" }}>
                            <Paper className="second-container" style={{ backgroundColor: "#12171d" }}>
                                <InfoHeader isMobile={isMobile} date={date} country={props.country}/>
                                <MainMap style={props.mapStyle} mapStart={props.mapStart}/>
                                <Paper className="second-container" style={{ backgroundColor: "#12171d", height: "9.5vh"}}></Paper>
                            </Paper>
                        </Grid>

                    </Grid>




                    <Grid container style={{ height: "2vh", marginTop: "5vh" }}>
                        <Footer />
                    </Grid>
                </Grid>
            )
        }}</DateContext.Consumer>
    )
}

export default TimelineBody;
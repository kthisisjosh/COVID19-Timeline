import React from 'react'
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography";
import EventPane from "../EventPane/EventPane";
import InfoHeader from "../InfoHeader/InfoHeader";
import DateSlider from "../DateSlider/DateSlider";
import MainGraph from "../MainGraph/MainGraph";
import MainMap from "../MainMap/MainMap.js";
import GitHubIcon from '@material-ui/icons/GitHub';

const TimelineBody = () => {
    return (

        <Grid container spacing={1} style={{ backgroundColor: "#393e46", height: "98vh", width: "99.5vw", marginTop: "1vh"}}>

            <Grid container spacing={1}>
                <Grid item md={5} xs={12} zeroMinWidth style={{ height: "98" }}>
                    <Paper style={{ backgroundColor: "#222831", height: "90vh"}}>
                        <Typography variant="h3" align="center">
                            COVID-19 Timeline
                        </Typography>
                        <EventPane />
                        <DateSlider />
                    </Paper>

                </Grid>


                <Grid item md={7} xs={12} zeroMinWidth style={{ height: "98" }}>
                    <Paper style={{ backgroundColor: "#222831", height: "90vh" }}>
                        <InfoHeader />
                        <MainMap />
                        <MainGraph />
                    </Paper>
                </Grid>
            </Grid>

            <Grid container style={{ height: "2vh", marginTop: "3vh" }}>
                <div style={{ textAlign: "center", margin: "auto" }}>
                    <Typography variant="body1" align="center">
                        | Data from: 
                        <a href="https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/health-professionals/epidemiological-summary-covid-19-cases.html" target="_blank">CAN</a> |

                        <a href="https://github.com/kthisisjosh/COVID19-Timeline/" target="_blank"> View on Github </a> |

                        <a href="http://kthisisjosh.github.io/" target="_blank">  ©Joshua Bautista </a> | 

                        <a href="https://github.com/kthisisjosh/" target="_blank"><GitHubIcon /></a> |

                        Last updated: March 26, 2020 16:43:20 GMT-0400 |

                    </Typography>
                </div>
            </Grid>
        </Grid>
    )
}

export default TimelineBody;
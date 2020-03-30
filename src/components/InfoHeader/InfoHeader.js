import React from 'react'
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Paper from "@material-ui/core/Paper";
import ToolTip from "@material-ui/core/Tooltip";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

const InfoHeader = (props) => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
    });

    let confirmed = 0;
    let confirmedYes = 0;
    let recovered = "N/A";
    let recoveredYes = "N/A";

    const selectedDate = new Date(props.date);

    const month = selectedDate.getMonth();
    const day = selectedDate.getDate();

    if (month === 1) {
        confirmed = ((props.data[month - 1].daily[day - 11].cases));
        if (day === 11) {
            confirmedYes = 0;
        } else {
            confirmedYes = ((props.data[month - 1].daily[day - 11].cases) - (props.data[month - 1].daily[day - 12].cases));
        }
    }

    try {
        if (month > 1) {
            confirmed = ((props.data[month - 1].daily[day - 1].cases));
            if (day === 1) {
                confirmedYes = ((props.data[month - 1].daily[day - 1].cases) - 82);
            } else {
                confirmedYes = ((props.data[month - 1].daily[day - 1].cases) - (props.data[month - 1].daily[day - 2].cases));
            }
        }
    } catch (err) {
        confirmed = "N/A";
        confirmedYes = "N/A";
    }

    const toggleDrawer = (anchor, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = anchor => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            style={{ backgroundColor: "#393E46", color: "#c43a31" }}
        >
            <List >
                <ListItem button key={uuidv4()} style={{ border: "0.5px solid black" }}>
                    <Link to="/world" style={{ fontSize: 30, color: "#c43a31", fontWeight: "bold", textDecorationLine: "none" }}>The World</Link>
                </ListItem>
                <ListItem button key={uuidv4()} style={{ border: "0.5px solid black" }}>
                    <Link to="/canada" style={{ fontSize: 30, color: "#c43a31", fontWeight: "bold", textDecorationLine: "none" }}>Canada</Link>
                </ListItem>
                <ListItem button key={uuidv4()} style={{ border: "0.5px solid black" }}>
                    <Link to="/usa" style={{ fontSize: 30, color: "#c43a31", fontWeight: "bold", textDecorationLine: "none" }}>United States of America</Link>
                </ListItem>
            </List>
        </div>
    );



    return (
        <div style={{ margin: "1rem", marginTop: "0.75%" }}>

            <Grid container spacing={2} alignContent="space-between" alignItems="center" justify="center">

                <Grid container sm={2} xs={2} item={true} justify="center">
                    <Grid item >
                        <Typography className="infoheader-confirmed-num-text" variant="h3" style={{fontSize: "38px"}}>
                            {confirmed}
                        </Typography>
                        <Typography className="infoheader-confirmed-text" align="center" variant="subtitle1" style={{ color: "#c6c1ba" }}>
                            confirmed
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container sm={2} xs={2} item={true} justify="center">
                    <Grid item >
                        <Typography className="infoheader-confirmed-yes-num-text" variant="h3" style={{fontSize: "38px"}}>
                            +{confirmedYes}
                        </Typography>
                        <Typography className="infoheader-confirmed-yes-text" align="center" variant="subtitle1" style={{ color: "#c6c1ba" }}>
                            from yesterday
                            </Typography>
                    </Grid>
                </Grid>

                <Grid container xs={4} item={true} justify="center">
                    <Grid item >

                        {['right'].map(anchor => (
                            <React.Fragment key={anchor}>
                                <ToolTip title="Change" arrow disableFocusListener>
                                    <Button onClick={toggleDrawer(anchor, true)} aria-label="change">
                                        <Paper className="glowing-border" variant="outlined" elevation="3" style={{ paddingRight: "2.8vw", backgroundColor: "#b0aca7"}}>
                                            <Typography className="infoheader-country-text" align="center" variant="h3" style={{ fontWeight: "bold", paddingLeft: "2.6vw" }}>
                                                {props.country}
                                            </Typography>
                                        </Paper>
                                    </Button>
                                </ToolTip>
                                <SwipeableDrawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} >
                                    {list(anchor)}
                                </SwipeableDrawer>
                            </React.Fragment>
                        ))}

                        <Typography className="infoheader-country-update-text" align="center" variant="h6" style={{ color: "#c6c1ba" }}>
                            map updated as of March 28 2020.
                        </Typography>

                    </Grid>
                </Grid>

                <Grid container sm={2} xs={2} item={true} justify="center">
                    <Grid item >
                        <Typography className="infoheader-recovered-num-text" variant="h3">
                            {recovered}
                        </Typography>
                        <Typography className="infoheader-recovered-text" align="center" variant="subtitle1" style={{ color: "#c6c1ba" }}>
                            recovered
                            </Typography>
                    </Grid>
                </Grid>

                <Grid container sm={2} xs={2} item={true} justify="center">
                    <Grid item >
                        <Typography className="infoheader-recovered-yes-num-text" variant="h3">
                            +{recoveredYes}
                        </Typography>
                        <Typography className="infoheader-recovered-yes-text" align="center" variant="subtitle1" style={{ color: "#c6c1ba" }}>
                            from yesterday
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>

        </div>
    )
}

export default InfoHeader;
import React, { Component } from "react";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import SliderRail from "./SliderRail/SliderRail";
import Handle from "./Handle/Handle";
import Track from "./Track/Track";
import Tick from "./Tick/Tick";
import { subDays, startOfToday, format } from "date-fns";
import { scaleTime } from "d3-scale";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import { DateContext } from "../../contexts/DateContext";
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const sliderStyle = {
    position: "relative",
    width: "100%"
};

function formatTick(ms) {
    return format(new Date(ms), "MMM dd");
}

const fullDay = 86400000;

const monthMSTimes = [{
    start: 1581397200000,
    end: 1582952400000
},
{
    start: 1583038800000,
    end: 1585627200000
},
{
    start: 1585713600000,
    end: 1588219200000
},
{
    start: 1588305600000,
    end: 1590897600000
},
{
    start: 1590984000000,
    end: 1593489600000
}]

class DateSlider extends Component {
    static contextType = DateContext;

    constructor() {
        super();

        const today = startOfToday();
        const fourDaysAgo = subDays(today, 4);

        this.state = {
            currentMonth: 1,
            selected: fourDaysAgo,
            dateSelected: new Date(1583038800000),
            min: new Date(1583038800000),
            max: new Date(1585627200000)
        };
    }

    changeMonth = (newMonthAdd) => {
        this.setState({ min: new Date(monthMSTimes[this.state.currentMonth + newMonthAdd].start), max: new Date(monthMSTimes[this.state.currentMonth + newMonthAdd].end) });
        this.setState({ currentMonth: this.state.currentMonth + newMonthAdd });
    }

    onUpdate = ([ms]) => {
        this.setState({
            dateSelected: new Date(ms)
        });
    };

    renderDateTime(date) {
        return (
            <div
                style={{
                    width: "80%",
                    textAlign: "center",
                    fontFamily: "Roboto",
                    paddingTop: "0.8%",
                    margin: 5
                }}
            >
                <div
                    style={{ fontSize: 50, fontWeight: "bold", color: "#c43a31" }}>

                    {format(date, "MMMM dd yyyy")}

                </div>
            </div>
        );
    }

    render() {
        const { min, max, selected, dateSelected } = this.state;
        const { updateSelectedDate } = this.context;

        const dateTicks = scaleTime()
            .domain([min, max])
            .ticks(8)
            .map(d => +d);

        return (
            <Paper style={{ backgroundColor: "#222831", height: "15vh" }}>

                <Fab style={{ float: "left", marginTop: "2%", marginLeft: "12%" }} aria-label="prev" size="small" onClick={() => {
                    if (this.state.currentMonth - 1 >= 0) {
                        this.changeMonth(-1)
                    }}}>
                    <ArrowLeftIcon />
                </Fab>

                <Fab style={{ float: "right", marginTop: "2%", marginRight: "12%" }} aria-label="next" size="small" onClick={() => {
                    if (this.state.currentMonth + 1 <= 4) {
                        this.changeMonth(1)
                    }}}>
                    <ArrowRightIcon />
                </Fab>

                {this.renderDateTime(dateSelected)}

                <div style={{ margin: "2%", marginTop: "4%", height: 60, width: "97%" }}>
                    <Slider
                        mode={1}
                        step={fullDay}
                        domain={[+min, +max]}
                        rootStyle={sliderStyle}
                        onUpdate={this.onUpdate}
                        onChange={updateSelectedDate}
                        values={[+selected]}
                    >
                        <Rail>
                            {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
                        </Rail>
                        <Handles>
                            {({ handles, getHandleProps }) => (
                                <div>
                                    {handles.map(handle => (
                                        <Handle
                                            key={handle.id}
                                            handle={handle}
                                            domain={[+min, +max]}
                                            getHandleProps={getHandleProps}
                                        />
                                    ))}
                                </div>
                            )}
                        </Handles>
                        <Tracks right={false}>
                            {({ tracks, getTrackProps }) => (
                                <div>
                                    {tracks.map(({ id, source, target }) => (
                                        <Track
                                            key={id}
                                            source={source}
                                            target={target}
                                            getTrackProps={getTrackProps}
                                        />
                                    ))}
                                </div>
                            )}
                        </Tracks>
                        <Ticks values={dateTicks}>
                            {({ ticks }) => (
                                <div style={{ paddingBottom: "1%" }}>
                                    {ticks.map(tick => (
                                        <Tick
                                            key={tick.id}
                                            tick={tick}
                                            count={ticks.length}
                                            format={formatTick}
                                        />
                                    ))}
                                </div>
                            )}
                        </Ticks>
                    </Slider>
                </div>
            </Paper>
        );
    }
}

export default DateSlider;
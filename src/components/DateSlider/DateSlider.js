import React, { Component } from "react";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import SliderRail from "./SliderRail/SliderRail";
import Handle from "./Handle/Handle";
import Track from "./Track/Track";
import Tick from "./Tick/Tick";
import { format } from "date-fns";
import { scaleTime } from "d3-scale";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import { DateContext } from "../../contexts/DateContext";
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import moment from "moment"
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const sliderStyle = {
    position: "relative",
    width: "100%"
};

function formatTick(ms) {
    return format(new Date(ms), "MMM dd");
}

const fullDay = 86400000;

class DateSlider extends Component {
    static contextType = DateContext;

    constructor(props) {
        super(props);

        this.state = {
            currentMonth: 1,
            selected: this.props.date.valueOf(),
            dateSelected: this.props.date.valueOf(),
            min: this.props.date.startOf("year").valueOf(),
            max: this.props.date.endOf("year").valueOf()
        };
    }

    onUpdate = ([ms]) => {
        this.setState({
            dateSelected: ms
        });
    };

    renderDateTime(date) {
        return (
            <div
                style={{
                    width: "80%",
                    textAlign: "center",
                    fontFamily: "Roboto",
                    paddingTop: this.props.isMobile ? "4%" : "5%",
                    margin: 5
                }}
            >
                <div
                    style={{ fontSize: this.props.isMobile ? 34 : 18, color: "#c43a31" }}>

                    {date.format("MMMM D YYYY")}
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
            <Paper className="dateslider-container" style={{ backgroundColor: "#12171d", height: "19vh" }}>

                <Fab className="dateslider-button" style={{ float: "left", marginTop: "5%", marginLeft: "2%" }} aria-label="prev" size="small" onClick={() => {
                    if (moment(this.props.date).subtract(1, "months").isAfter("2020-01-01")) {
                        updateSelectedDate(this.props.date.subtract(1, 'months'))
                    }
                }}>
                    <ArrowLeftIcon />
                </Fab>

                <Fab className="dateslider-button" style={{ float: "left", marginTop: "5%", marginLeft: "8%"  }} aria-label="prev" size="small" onClick={() => {
                    if (moment(this.props.date).subtract(1, "days").isAfter("2019-12-31")) {
                        updateSelectedDate(this.props.date.subtract(1, 'days'))
                    }
                }}>
                    <ArrowLeftIcon />
                </Fab>

                <Fab className="dateslider-button" style={{ float: "right", marginTop: "5%", marginRight: "2%" }} aria-label="next" size="small" onClick={() => {
                    if (moment(this.props.date).add(1, "months").isBefore()) {
                        updateSelectedDate(this.props.date.add(1, 'months'))
                    }
                }}>
                    <ArrowRightIcon />
                </Fab>

                <Fab className="dateslider-button" style={{ float: "right", marginTop: "5%", marginRight: "8%" }} aria-label="next" size="small" onClick={() => {
                    if (moment(this.props.date).add(0.5, "days").isBefore()) {
                        updateSelectedDate(this.props.date.add(0.5, 'days'))
                    }
                }}>
                    <ArrowRightIcon />
                </Fab>

                {this.renderDateTime(this.props.date)}

                {/*<div style={{ margin: "2%", marginTop: "6%", height: 60, width: "97%" }}>
                    <Slider
                        mode={1}
                        step={fullDay}
                        domain={[+min, +max]}
                        rootStyle={sliderStyle}
                        onUpdate={this.onUpdate}
                        onChange={([ms]) => updateSelectedDate(moment(ms))}
                        values={[this.props.date.valueOf()]}
                        disabled={true}
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
                                            disabled={true}
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
                </div>*/}
            </Paper>
        );
    }
}

export default DateSlider;
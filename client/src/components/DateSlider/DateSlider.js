import React, { Component } from "react";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import SliderRail from "./SliderRail/SliderRail";
import Handle from "./Handle/Handle";
import Track from "./Track/Track";
import Tick from "./Tick/Tick";
import { subDays, startOfToday, format } from "date-fns";
import { scaleTime } from "d3-scale";

const sliderStyle = {
    position: "relative",
    width: "100%"
};

function formatTick(ms) {
    return format(new Date(ms), "MMM dd");
}

const fullDay = 86400000;

class DateSlider extends Component {
    constructor() {
        super();

        const today = startOfToday();
        const fourDaysAgo = subDays(today, 4);
        const oneWeekAgo = subDays(today, 7);

        this.state = {
            selected: fourDaysAgo,
            dateSelected: fourDaysAgo,
            min: oneWeekAgo,
            max: today
        };
    }

    onChange = ([ms]) => {
        this.setState({
            selected: new Date(ms)
        });
    };

    onUpdate = ([ms]) => {
        this.setState({
            dateSelected: new Date(ms)
        });
    };

    renderDateTime(date) {
        return (
            <div
                style={{
                    width: "100%",
                    textAlign: "center",
                    fontFamily: "Arial",
                    margin: 5
                }}
            >
                <div style={{ fontSize: 35, fontWeight: "bold" }}>{format(date, "MMMM dd yyyy")}</div>
            </div>
        );
    }

    render() {
        const { min, max, selected, dateSelected } = this.state;

        const dateTicks = scaleTime()
            .domain([min, max])
            .ticks(8)
            .map(d => +d);

        return (
            <div>
                {this.renderDateTime(dateSelected)}
                <div style={{ margin: "2%", height: 120, width: "90%" }}>
                    <Slider
                        mode={1}
                        step={fullDay}
                        domain={[+min, +max]}
                        rootStyle={sliderStyle}
                        onUpdate={this.onUpdate}
                        onChange={this.onChange}
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
                                <div>
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
            </div>
        );
    }
}

export default DateSlider;
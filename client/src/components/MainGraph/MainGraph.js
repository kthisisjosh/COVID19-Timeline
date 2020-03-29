import React from "react";
import { VictoryChart, createContainer, VictoryTheme, VictoryTooltip, VictoryArea, VictoryAxis } from "victory";
import Paper from "@material-ui/core/Paper";
import { DateContext } from "../../contexts/DateContext";

let caseDataArray = [];
const month = [];
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "May";
month[5] = "June";
month[6] = "July";

const BrushCursorContainer = createContainer("brush", "voronoi");


const MainGraph = (props) => {

    caseDataArray = [];
    props.data.forEach((month) => {
        month.daily.forEach((day) => {
            const year = 2020;
            const monthNum = month.month;
            const date = day.day;

            caseDataArray.push({
                x: new Date(year, monthNum, date),
                y: day.cases
            })
        })
    })


    return (
        <DateContext.Consumer>{(context) => {
            const { selectedDate } = context;
            let firstDateBound = new Date(selectedDate - 100000000);
            let secondDateBound = new Date(selectedDate + 100000000);

            return (
                <Paper style={{ backgroundColor: "#12171d", height: "21.6vh" }}>
                    <VictoryChart
                        theme={VictoryTheme.grayscale}
                        animate={{ duration: 2500 }}
                        width={600}
                        height={125}
                        scale={{ x: "time" }}
                        padding={{ top: 10, bottom: 30, left: 50, right: 40 }}
                        containerComponent={
                            <BrushCursorContainer
                                allowDrag={false}
                                allowResize={false}
                                brushDimension="x"
                                brushDomain={{ x: [firstDateBound, secondDateBound] }}
                                brushStyle={{ fill: "black", fillOpacity: 0.6 }}
                                voronoiDimension="x"
                                labelComponent={
                                    <VictoryTooltip
                                        constrainToVisibleArea={true}
                                        flyoutHeight={30}
                                        flyoutWidth={50}
                                        pointerWidth={5}
                                        style={{ fill: "#c43a31" }}
                                    />
                                }
                                labels={({ datum }) => `${datum.y}
                    ${
                                    month[datum.x.getMonth()]
                                    + " " + datum.x.getDate()}`
                                }
                            />
                        }
                    >
                        <VictoryArea
                            style={{
                                data: { stroke: "tomato", strokeWidth: "3", fill: "#c43a31" }
                            }}
                            data={caseDataArray}
                        />

                        <VictoryAxis
                            style={
                                {
                                    tickLabels: {
                                        stroke: "#c6c1ba",
                                        fontSize: 10,
                                        padding: 6,
                                        letterSpacing: "1.5px"
                                    },
                                }
                            }
                        />

                        <VictoryAxis
                            dependentAxis
                            style={
                                {
                                    tickLabels: {
                                        stroke: "#c6c1ba",
                                        fontSize: 9,
                                        padding: 3,
                                        letterSpacing: "1.3px"
                                    },
                                }
                            }
                        />
                    </VictoryChart>
                </Paper>
            )
        }}</DateContext.Consumer>
    );
}

export default MainGraph;
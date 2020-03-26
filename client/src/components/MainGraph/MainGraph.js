import React from "react";
import { VictoryChart, createContainer, VictoryTheme, VictoryTooltip, VictoryArea } from "victory";
import data from "./CasesData";

let range = [0, 1, 2, 3, 4, 5, 6, 7];
let caseDataArray = [];
const month = new Array();
month[0]="Jan";
month[1]="Feb";
month[2]="Mar";
month[3]="Apr";
month[4]="May";
month[5]="June";
month[6]="July";

data.forEach((month) => {
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

const BrushCursorContainer = createContainer("brush", "voronoi");


class MainGraph extends React.Component {

    render() {
        return (
            <VictoryChart
                theme={VictoryTheme.grayscale}
                animate={{ duration: 2000 }}
                width={600}
                height={175}
                scale={{ x: "time" }}
                containerComponent={
                    <BrushCursorContainer
                    allowDrag={false}
                    allowResize={false}
                    brushDimension="x"
                    brushDomain={{x: [new Date(2020, 1, 13), new Date(2020, 1, 15)]}}
                    voronoiDimension="x"
                    labelComponent={
                        <VictoryTooltip 
                            constrainToVisibleArea={true}
                            flyoutHeight={30}
                            flyoutWidth={50}
                            pointerWidth={5}
                            style={{fill: "red"}}
                        />
                    }
                    labels={({datum}) => `${datum.y}
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

            </VictoryChart>
        );
    }
}

export default MainGraph;
import React from "react";
import { VictoryChart, VictoryLine, VictoryTheme, VictoryZoomContainer } from "victory";
import data from "./CasesData";

let range = [0, 1, 2, 3, 4, 5, 6, 7];
let caseDataArray = [];

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

console.log(caseDataArray);


class MainGraph extends React.Component {

    render() {
        return (
            <VictoryChart
                theme={VictoryTheme.grayscale}
                animate={{ duration: 3000 }}
                width={600}
                height={130}
                scale={{ x: "time" }}
            >
                <VictoryLine
                    style={{
                        data: { stroke: "tomato", strokeWidth: "3" }
                    }}
                    data={caseDataArray}

                />
            </VictoryChart>
        );
    }
}

export default MainGraph;
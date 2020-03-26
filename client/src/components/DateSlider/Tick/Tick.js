import React from "react";
import PropTypes from "prop-types";

function Tick({ tick, count, format }) {
    return (
        <div>
            <div
                style={{
                    position: "absolute",
                    marginTop: 14,
                    paddingBottom: "1%",
                    width: 1,
                    height: 5,
                    backgroundColor: "rgb(200,200,200)",
                    left: `${tick.percent}%`
                }}
            />
            <div
                style={{
                    position: "absolute",
                    marginTop: 22,
                    fontSize: 10,
                    paddingBottom: "1%",
                    textAlign: "center",
                    fontFamily: "Arial, san-serif",
                    marginLeft: `${-(100 / count) / 2}%`,
                    width: `${100 / count}%`,
                    left: `${tick.percent}%`,
                    color: "#c43a31"
                }}
            >
                {format(tick.value)}
            </div>
        </div>
    );
}

Tick.propTypes = {
    tick: PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        percent: PropTypes.number.isRequired
    }).isRequired,
    count: PropTypes.number.isRequired,
    format: PropTypes.func.isRequired
};

Tick.defaultProps = {
    format: d => d
};

export default Tick;
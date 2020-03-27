import React, { createContext, Component } from 'react';

export const DateContext = createContext();
const FebMapStyle = "mapbox://styles/kthisisjosh/ck89gkzb602l71ipr3sxx8sve";
const Mar24MapStyle = "mapbox://styles/kthisisjosh/ck8822dgd16941jm7qidyc2t9";

class DateContextProvider extends Component {
    state = {
        selectedDate: 1583038800000,
        selectedStyle: Mar24MapStyle
    }

    updateSelectedDate = (updatedSelectedDate) => {
        this.setState({ selectedDate: updatedSelectedDate });
    }

    getSelectedStyle = () => {
        if (this.state.selectedDate >= 1581397200000 && this.state.selectedDate <= 1582952400000) {
            this.setState({ selectedStyle: Mar24MapStyle });
            return FebMapStyle;
        } else if (this.state.selectedDate >= 1583038800000 && this.state.selectedDate <= 1585627200000) {
            this.setState({ selectedStyle: FebMapStyle });
            return Mar24MapStyle;
        }
    }

    render() {
        return (
            <DateContext.Provider value={{ ...this.state, updateSelectedDate: this.updateSelectedDate, getSelectedStyle: this.getSelectedStyle}}>
                {this.props.children}
            </DateContext.Provider>
        )
    }
}

export default DateContextProvider;
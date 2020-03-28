import React, { createContext, Component } from 'react';

export const DateContext = createContext();

class DateContextProvider extends Component {
    state = {
        selectedDate: 1583211600000,
    }

    updateSelectedDate = (updatedSelectedDate) => {
        this.setState({ selectedDate: updatedSelectedDate });
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
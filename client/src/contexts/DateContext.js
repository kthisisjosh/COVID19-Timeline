import React, { createContext, Component } from 'react';

export const DateContext = createContext();

class DateContextProvider extends Component {
    state = {
        selectedDate: new Date()
    }

    updateSelectedDate = (updatedSelectedDate) => {
        this.setState({selectedDate: updatedSelectedDate});
    }

    render() {
        return (
            <DateContext.Provider value={{ ...this.state, updateSelectedDate: this.updateSelectedDate }}>
                {this.props.children}
            </DateContext.Provider>
        )
    }
}

export default DateContextProvider;
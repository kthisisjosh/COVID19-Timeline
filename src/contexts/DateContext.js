import React, { createContext, Component } from 'react';
import moment from 'moment';

export const DateContext = createContext();

class DateContextProvider extends Component {
  state = {
    selectedDate: moment().utc().startOf('day'),
  };

  updateSelectedDate = (updatedSelectedDate) => {
    this.setState({ selectedDate: updatedSelectedDate });
  };

  render() {
    return (
      <DateContext.Provider
        value={{
          ...this.state,
          updateSelectedDate: this.updateSelectedDate,
          getSelectedStyle: this.getSelectedStyle,
        }}
      >
        {this.props.children}
      </DateContext.Provider>
    );
  }
}

export default DateContextProvider;

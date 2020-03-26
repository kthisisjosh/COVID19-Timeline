import React from 'react';
import TimelineBody from "./components/TimelineBody/TimelineBody";
import DateContextProvider from "./contexts/DateContext";

function App() {
  return (
    <div className="App">
      <DateContextProvider>
        <TimelineBody />
      </DateContextProvider>
    </div>
  );
}

export default App;

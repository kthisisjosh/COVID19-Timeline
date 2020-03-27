import React from 'react';
import Canada from "./countrypages/Canada";
import USA from "./countrypages/USA";
import DateContextProvider from "./contexts/DateContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <DateContextProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Canada} />
            <Route path="/canada" component={Canada} />
            <Route path="/usa" component={USA} />
          </Switch>
        </Router>
      </DateContextProvider>
    </div>
  );
}

export default App;

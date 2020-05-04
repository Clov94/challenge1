import React from "react";
import "./App.css";
import { TrackerPaymentsComponent } from "./components/tracker-payments.component";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="title">Payment Tracker</div>
        <TrackerPaymentsComponent className="body" />
      </div>
    );
  }
}

export default App;

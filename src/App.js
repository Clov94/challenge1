import React from 'react'
import './App.css'
import { TrackerPaymentsComponent } from './components/tracker-payments.component'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="title">payment tracker</div>
        <div className="body">
          <TrackerPaymentsComponent />
        </div>
      </div>
    )
  }
}

export default App

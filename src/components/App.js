import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date()
    };
  }

  currentTime() {
    this.setState({ time: new Date() });
  }

  componentDidMount() {
    this.update = setInterval(() => this.currentTime(), 1000);
  }

  componentWillUnmount() {
    // let clearSetInterval = setInterval(this.update, 1000);
    // clearInterval(clearSetInterval);
    clearInterval(this.update);
  }

  render() {
    const { time } = this.state;
    return (
      <div className="Clock">
        <h3 id="time">{time.toLocaleTimeString()}</h3>
      </div>
    );
  }
}

export default App;

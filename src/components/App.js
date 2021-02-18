import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.update = setInterval(() => {
      this.setState = { time: new Date() };
    }, 1 * 1000);
  }

  componentWillUnmount() {
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

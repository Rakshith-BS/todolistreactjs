import React, { Component } from "react";
import withCounter from "./withCounter";

export class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>Clicked {count} times</button>
      </div>
    );
  }
}

export default withCounter(ClickCounter);

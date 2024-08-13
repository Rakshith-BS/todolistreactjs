import React, { Component } from "react";

export class RegComp extends Component {
  render() {
    console.log("Inside regular component");
    return <div>RegComp {this.props.name}</div>;
  }
}

export default RegComp;

import React, { Component } from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

export class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Hello world",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Hello world",
      });
    }, 2000);
  }

  render() {
    console.log("inside parent component");
    return (
      <div>
        Parent component
        <PureComp name={this.state.name} />
        <RegComp name={this.state.name} />
      </div>
    );
  }
}

export default Parent;

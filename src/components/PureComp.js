import React, { PureComponent } from "react";

export class PureComp extends PureComponent {
  render() {
    console.log("Inside Pure component");
    return <div>PureComp {this.props.name}</div>;
  }
}

export default PureComp;

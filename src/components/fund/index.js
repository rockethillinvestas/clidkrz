import React, { Component } from "react";
import Areachart from "../graph/areachart";

class Fund extends Component {
  render() {
    return (
      <section className="fund">
        <h1>{this.props.data.name}</h1>
        <h2>{this.props.data.currentValue}</h2>
        <p>{this.props.data.startDate}</p>
        <p>{this.props.data.updatedDate}</p>
        <div className="graph">
          <Areachart data={this.props.data} />
        </div>
      </section>
    );
  }
}

export default Fund;

import React, { Component } from "react";
import Areachart from "../graph/areachart";
import { formatCurrency, calculateValue } from "../../utility/dataHandler";

class Fund extends Component {
  calculatePercentageChange(y1, y2) {
    var difference = y1 - y2;
    var percent = parseFloat(difference / y1 * 100).toFixed(2);
    return (
      <h1 style={percent > 0 ? { color: "green" } : { color: "red" }}>
        {percent}%
      </h1>
    );
  }

  calculateCurrencyChange(y1, y2) {
    var difference = y1 - y2;
    return (
      <h1 style={difference > 0 ? { color: "green" } : { color: "red" }}>
        {formatCurrency().format(difference)}
      </h1>
    );
  }

  render() {
    return (
      <section className="fund">
        <div className="fund-header">
          <h1>{this.props.data.name}</h1>
        </div>
        {/* 
        <h2>{formatCurrency().format(this.props.data.currentValue)}</h2> */}

        <div className="graph">
          <Areachart data={this.props.data} />
        </div>
        <div className="key-data">
          <div className="current-value">
            <h3>Gjeldende verdi</h3>
            <h1>{formatCurrency().format(this.props.data.currentValue)}</h1>
          </div>
          <div className="total-change">
            <h3>Total endring</h3>
            {this.calculatePercentageChange(
              this.props.data.currentValue,
              this.props.data.capital
            )}
          </div>
          <div className="last-change">
            <h3>Siste endring</h3>
            {this.calculatePercentageChange(
              this.props.data.currentValue,
              calculateValue(this.props.data, 2)
            )}
          </div>
          <div className="realization">
            <h3>Tap/Gevinst</h3>
            {this.calculateCurrencyChange(
              this.props.data.currentValue,
              this.props.data.capital
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Fund;

import React, { Component } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { graphDataHandler } from "../../utility/dataHandler";
import * as moment from "moment";
import "moment/locale/nb";

class Areachart extends Component {
  formatDate(e) {
    return moment(e).format("LTS");
  }

  render() {
    const data = graphDataHandler(
      this.props.data,
      this.props.data.capital / 100
    );

    return (
      <ResponsiveContainer style={{ gridColumn: "span 2" }}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="timestamp" tickFormatter={this.formatDate} />
          <YAxis
            type="number"
            domain={[0, dataMax => Math.ceil(dataMax * 1.25)]}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip labelFormatter={this.formatDate} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

export default Areachart;

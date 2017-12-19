import React, { Component } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { graphDataHandler } from "../../utility/dataHandler";
import * as moment from "moment";
import "moment/locale/nb";

class Areachart extends Component {
  formatDate(e) {
    return moment(e).format("LT");
  }

  render() {
    const data = graphDataHandler(
      this.props.data,
      this.props.data.capital / 100
    );

    return (
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="1" y2="0">
              <stop offset="5%" stopColor="#3C69FC" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#6387FC" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="timestamp" tickFormatter={this.formatDate} />
          <YAxis
            type="number"
            domain={[0, dataMax => Math.ceil(dataMax * 1.25)]}
            axisLine={false}
          />
          <Tooltip labelFormatter={this.formatDate} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#1D49B0"
            fill="url(#colorValue)"
            fillOpacity={1}
            strokeWidth={3}
            dot={{ stroke: "#1D49B0", strokeWidth: 3, fill: "white" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

export default Areachart;

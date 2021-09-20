import React, { Component } from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
export default class Chart extends Component {
  render() {
    const dataPointValues = this.props.dataPoints.map(
      (dataPoint) => dataPoint.value
    );
    const totalMaximum = Math.max(...dataPointValues);
    console.log("totalMaximum", totalMaximum);
    return (
      <div className="chart">
        {this.props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        ))}
      </div>
    );
  }
}

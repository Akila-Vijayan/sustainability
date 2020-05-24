import React, { Component } from "react";
import ReactSpeedometer from "react-d3-speedometer";

class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: this.props.score,
    };
  }
  render() {
    return (
        <div className="center">
        <ReactSpeedometer
        value={this.state.score}
        maxSegmentLabels={10}
        segments={200}
        minValue={0}
        maxValue={100}
      />
      </div>
    );
  }
}

export default Score;

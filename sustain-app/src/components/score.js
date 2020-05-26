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
    const style = {
      color: "Black",
      padding: "10px",
      fontFamily: "Calibri (Body)"
    };
    return (    
        <div align="center"><br/><br/><br/>
        <h4 style={style} >
        Your Sustainabilty Score is {this.state.score}<br/><p></p>
         </h4>
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

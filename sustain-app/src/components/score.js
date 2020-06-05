import React, { Component } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import Table from 'react-bootstrap/Table'

class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: this.props.score,
    };
  }
  render() {
    return (
        <div align="center">
          <h3> Your Sustainability Score is {this.state.score} </h3>
          <hr/>
          <div>
            <ReactSpeedometer
            value={this.state.score}
            maxSegmentLabels={10}
            segments={100}
            minValue={0}
            maxValue={100}
            width={500}/>
          </div>
          <div align = "left">
            To increase your sustainability score, please opt for the below Lloyds Products,<br/><br/>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th> Products </th>
                  <th> Offers </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Green Credit Card</td>
                  <td>Exclusively for buying solar panels or heaters</td>
                </tr>
                <tr>
                  <td>Mortgages – Green Offers</td>
                  <td>When buying house with eco-friendly amenities, will provide offers on interest rates</td>
                </tr>
              </tbody>
            </Table>
          </div>
      </div>
    );
  }
}

export default Score;

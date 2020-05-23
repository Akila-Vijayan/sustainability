import React, {Component} from 'react';


export default class Home extends Component {
  render () {
    const style1 = {
      color: "Black",
      fontFamily: "Times New Roman",
      padding: "20px",
      backgroundColor: "#d7c3d4"
    };
    const style2 = {
      color: "Black",
      fontFamily: "Arial",
      padding: "20px"
    };
    const style3 = {
      color: "Black",
      fontFamily: "Edwardian Script ITC",
      padding: "20px"
    };
    return (
      <div>
        <p align="center">
        <i>
        <h2 style={style1}> Did you know? </h2>

        <h3 style={style2}>

        Turn it off - Leaving your electricals on standby needlessly uses up energy.
        Switching it off reduces your carbon footprint and cuts down your enery bills!

        </h3>

        <h1 style={style3}> Know your Sustainability Score </h1>

        <h5><a href="http://localhost:3000/signup">Click Here</a></h5>
        </i>
        </p>
      </div>
    );
  }
}

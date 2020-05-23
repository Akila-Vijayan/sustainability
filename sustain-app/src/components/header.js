import React, {Component} from 'react';

export default class Header extends Component {
  render () {
    const title = {
      color: "Black",
      backgroundColor: "#00cc00",
      padding: "20px",
      fontFamily: "Edwardian Script ITC"
    };
    return (
      <div>
        <p>
          <h1 style={title} align="center"> <b> LBG - Sustainable Living </b> </h1>
        </p>
      </div>
    );
  }
}

import React, {Component} from 'react';
import Bgi from './images/BackgroundImage.jpg';
import '../App.css';

export default class Header extends Component {
  render () {
    const title = {
      color: "White",
      padding: "50px",
      fontFamily: "Monotype Corsiva",
      fontSize:"55px",
      height:"150px"
    };
    return (
      <div className="background-banner" style={{backgroundImage: `url(${Bgi})` }}>
        <h1 style={title} align="center"> <b> Sustainability Check </b> </h1>
      </div>
    );
  }
}

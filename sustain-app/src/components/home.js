import React, {Component} from 'react';
import { Slide } from 'react-slideshow-image';
import '../App.css';
import image1 from './images/Image1.jpg';
import image2 from './images/Image2.jpg';
import image3 from './images/Image3.jpg';
import image4 from './images/Image4.jpg';
import Bg from './images/sustainabilitybackground.jpg';

export default class Home extends Component {
   render () {
    const style1 = {
      background: "Black",
      fontFamily: "Calibri (Body)",
      padding: "12px",
      fontSize:"20px",
      width:"15%",
      height:"50px"
    };
    const style2 = {
      color: "Black",
      fontFamily: "Book Antiqua",
      fontSize:"30px",
      padding: "10px"
    };
    const style3 = {
      color: "Black",
      fontFamily: "Book Antiqua",
      fontSize:"32px",
      padding: "45px",
      height:"100px"
    };
    
    const properties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      pauseOnHover: true,
      onChange: (oldIndex, newIndex) => {
        console.log(
          `Slide transition finished from ${oldIndex} to ${newIndex}`
        );
      }
    };

     
     return (
      <div className="background-banner">
        <p align="center">
        <i>
        <h2 style={style2}><b> Did you know?</b> </h2>
        <Slide {...properties}>
            <div className="each-slide">
            <img src={image1} />
            </div>
            <div className="each-slide">
            <img src={image2} />
            </div>
            <div className="each-slide">
            <img src={image3} />
            </div>
            <div className="each-slide">
            <img src={image4} />
            </div>
          </Slide>
          <div>
        </div>
        </i>
    <div className="background-banner" style={{backgroundImage: `url(${Bg})` }}>
        <h1 style={style3} align="center"><b><i>To know your Sustainability Score</i></b> </h1>
        <h4 style={style1} align="center"><a href="http://localhost:3000/signup">Click here</a></h4>  
    </div> 
        </p>
      </div>
    );
  }
}

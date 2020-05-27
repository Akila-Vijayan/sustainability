import React, {Component} from 'react';
import {Redirect} from 'react-router';
import axios from 'axios';
import Bg1 from './images/Template.jpg';


export default class SignUp extends Component {
  constructor(props){
    super(props);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangePostcode = this.onChangePostcode.bind(this);
    this.onChangeEmailID = this.onChangeEmailID.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstname: '',
      lastname: '',
      postcode: '',
      emailid: ''
    }
  }

  onChangeFirstName (e) {
    this.setState({
      firstname: e.target.value
    });
  }

  onChangeLastName (e) {
    this.setState({
      lastname: e.target.value
    });
  }

  onChangePostcode (e) {
    this.setState({
      postcode: e.target.value
    });
  }

  onChangeEmailID (e) {
    this.setState({
      emailid: e.target.value
    });
  }

  onSubmit (e) {
    e.preventDefault();

    console.log ('Form submitted');
    console.log (`First name: ${this.state.firstname}`);
    console.log (`Last name: ${this.state.lastname}`);
    console.log (`Post Code: ${this.state.postcode}`);
    console.log (`Email ID: ${this.state.emailid}`);

    const custDetails = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      postcode: this.state.postcode,
      emailid: this.state.emailid
    }

    axios.post('http://localhost:4000/sustain/register', custDetails)
         .then (res => console.log(res.data));

    this.setState({
      firstname: '',
      lastname: '',
      postcode: '',
      emailid: ''
    });

    this.props.history.push('/creditScore');
  }

  render () {
    const style = {
      color: "Black",
      padding: "20px",
      fontFamily: "Calibri (Body)",
      fontSize:"20px"
    };
    return (
      <div align="center" style={{backgroundImage: `url(${Bg1})` }}>
        <h4 style={style} >
        Welcome! <br/><p></p> Please enter your details to move onto checklist.... <br/>
         <br/> 
        <form onSubmit = {this.onSubmit}>
          <div>
             <label>  First Name  </label>{" "}<label></label>{" "}
             <input type='text' value={this.state.firstname} onChange={this.onChangeFirstName}/>
          </div>
          <br/>
          <div>
             <label> Last Name  </label>{" "}<label></label>{" "}
             <input type='text' value={this.state.lastname} onChange={this.onChangeLastName}/>
          </div>
          <br/>
          <div>
          
          <label> Postcode  </label>{" "}<label></label>{" "}<label></label>{" "}<label></label>{" "}
    
             <input type='text' value={this.state.postcode} onChange={this.onChangePostcode}/>
          </div>
          <br/>
          <div>
             <label> Email ID  </label>{" "}<label></label>{" "}<label></label>{" "}<label></label>{" "}<label></label>{" "}
             <input type='text' value={this.state.emailid} onChange={this.onChangeEmailID}/>
          </div>
          <br/>
          <div align="center">
          <input className="btn btn-success" type='submit' value='Register'/>
          </div>
        </form>
        </h4>
      </div>
    );
  }
}

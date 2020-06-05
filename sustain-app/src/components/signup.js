import React, {Component} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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

    this.props.history.push('/checkList');
  }

  render () {
    return (
      <div align="center" style={{backgroundImage: `url(${Bg1})` }}>
        <br/> Welcome!
        <br/> <br/>Please enter your details to move onto the checklist.... <br/> <br/>

        <Form onSubmit = {this.onSubmit}>

          <Form.Group as={Row} controlId="firstname">
            <Form.Label column sm={2}>
              First Name
            </Form.Label>
            <Col sm={5}>
              <Form.Control type="text" value={this.state.firstname} onChange={this.onChangeFirstName} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="lastname">
            <Form.Label column sm={2}>
              Last Name
            </Form.Label>
            <Col sm={5}>
              <Form.Control type="text" value={this.state.lastname} onChange={this.onChangeLastName} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="postcode">
            <Form.Label column sm={2}>
              Post Code
            </Form.Label>
            <Col sm={5}>
              <Form.Control type="text" value={this.state.postcode} onChange={this.onChangePostcode} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="emailid">
            <Form.Label column sm={2}>
              Email ID
            </Form.Label>
            <Col sm={5}>
              <Form.Control type="email" value={this.state.emailid} onChange={this.onChangeEmailID} />
            </Col>
          </Form.Group>

          <br/>
          <Button variant="success" type="submit">
            Submit
          </Button>

        </Form>
        <br/> <br/>
      </div>
    );
  }
}

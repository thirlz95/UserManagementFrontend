/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Alerts from '../components/notification/alerts';

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: [],
      variant: null,
      headingMsg: null,
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  sendData = () => {
    const { password, email } = this.state;
    axios.post('http://localhost:5000/api/users', {
      email,
      password
    }).then(response => {
      console.log('res', response);
      this.setState({
        message: response.data,
        variant: 'success',
        headingMsg: 'Success, your account has been created'
      })
    }).catch(err => {
      console.log('err', err.response.data);
      this.setState({
        message: err.response.data,
        variant: 'danger',
        headingMsg: 'Oh snap! You got an error!',
      })
    });
  };

  render() {
    const { message, variant, headingMsg } = this.state;
    console.log(this.state);
    return(
      <div>
        <Form>
        { message ? 
          <Alerts variant={variant} heading={headingMsg} message={message} />
          : null 
        }
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.onChange} />
            <Form.Text className="text-muted">
              Please use your accenture email, otherwise this won't work.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" onChange={this.onChange} />
            <Form.Text className="text-muted">
              Please enter a password longer than 6 charcters.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" onClick={this.sendData}>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default Register;

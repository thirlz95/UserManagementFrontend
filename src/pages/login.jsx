import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Alerts from '../components/notification/alerts';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: null,
      variant: null,
      headingMsg: null,
      token: null,
    }
  }

    onChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    sendData = () => {
      const { password, email } = this.state;
      axios.post('http://localhost:5000/api/auth', {  
        email,
        password
      }).then(response => {
        console.log('res', response);
        localStorage.setItem('x-auth-token', response.data.token)
        console.log('TOKEN?', response.data.token);
        this.props.history.push('/mainPage');
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
      return (
        <div>
          <Form>
            {message ?
              <Alerts variant={variant} heading={headingMsg} message={message} />
              : null
            }
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.onChange} />
              <Form.Text className="text-muted">
                Please use your accenture email.
                    </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" onChange={this.onChange} />
            </Form.Group>
            <Button variant="primary" onClick={this.sendData}>
              Submit
            </Button>
          </Form>
        </div>
      )
    }
  }

  export default Login; 

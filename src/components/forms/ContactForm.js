import React, { Component } from 'react';
import axios from 'axios';
import Alerts from '../notification/alerts';

class ContactForm extends Component {
  constructor(props){
    super(props); 
    this.state = {
      message: '',
      variant: '',
      headingMsg: '',
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    const { name, email, emailMessage } = this.state;
    // pevent default form behaviour
    e.preventDefault();

    axios.post('http://localhost:5000/api/email', {
      email,
      name,
      emailMessage,
    }).then(response => {
      if (response.data.msg === 'success') {
        this.setState({
          message: response.data.msg,
          variant: 'success',
          headingMsg: 'Message Sent!',
        })
        this.resetForm()
      } 
    }).catch(err => {
      console.log('err', err.message);
      this.setState({
        message: err.message,
        variant: 'danger',
        headingMsg: 'Oh snap! You got an error!',
      })
    });
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      message: '',
    });
  }

  render() {
    const { message, variant, headingMsg } = this.state;
    console.log(this.state);
    return (
      <div className="col-sm-12 col-md-8 offset-md-2">
          {message ?
            <Alerts variant={variant} heading={headingMsg} message={message} />
            : null
          }
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" className="form-control" id="name" name='name' onChange={this.onChange} aria-describedby="name input"/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="email" name='email' onChange={this.onChange} aria-describedby="email input" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" name='emailMessage' id="message" onChange={this.onChange} aria-describedby="email input"></textarea>
          </div>
          <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default ContactForm;

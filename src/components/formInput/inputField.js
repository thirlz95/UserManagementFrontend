import React, { Component } from 'react'
import { Form } from 'react-bootstrap';

export default class InputField extends Component {

  onChange = e => {
    console.log('oioi', e.target.value);
    this.props.onChange(e);
  };

  render() {
    return (
      <Form.Group controlId="formBasicEmail">
        <Form.Label>{this.props.description}</Form.Label>
        <Form.Control
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.onChange}
        />
      </Form.Group>
    )
  }
}

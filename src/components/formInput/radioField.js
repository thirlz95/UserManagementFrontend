import React, { Component } from 'react'
import { FormGroup, Label, Input } from 'react-bootstrap';

export default class Coaching extends Component {
onChange = e => {
    console.log('oioi', e.target.value);
    this.props.onChange(e);
  };

  render() {
    return (
      <div>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Option one is this and that—be sure to include why it's great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Option two can be something else and selecting it will deselect option one
          </Label>
        </FormGroup>
      </div>
    )
  }
}

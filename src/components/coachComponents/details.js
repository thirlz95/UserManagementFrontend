import React, { Component } from 'react'
import { Row, Col, FormGroup, Label, Input,  } from 'reactstrap';
import InputField from '../formInput/inputField';
import Form from '../addSkills/Form';

export default class Details extends Component {

  onChange = e => {
    console.log('Passing from Details Component', e.target.value);
    this.props.onChange(e);
  };

  render() {
    if (this.props.currentStep !== 1) {
      return null
    } 
    return (
      <Row className="my-4" id="landing">
        <Col className="justify-content-center col-md-8">
          <InputField
            description="EID"
            placeholder="john.a.doe"
            name="eid"
            onChange={this.onChange}
            value={this.props.savedDetails.eid}
            type="text"
          />
          <InputField
            description="First Name"
            placeholder="John"
            name="firstName"
            onChange={this.onChange}
            value={this.props.savedDetails.firstName}
            type="text"
          />
          <InputField
            description="Last Name "
            placeholder="Doe"
            name="lastName"
            value={this.props.savedDetails.lastName}
            onChange={this.onChange}
            type="text"
          />
          <div style={{ marginBottom: '20px' }}>
            <Label check>What is your gender?</Label>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="gender" value='male' checked={this.props.savedDetails.gender === 'male'} onChange={this.onChange} />
                Male
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="gender" value='female' checked={this.props.savedDetails.gender === 'female'} onChange={this.onChange} />
                Female
              </Label>
            </FormGroup>
            <FormGroup check disabled>
              <Label check>
                <Input type="radio" name="gender" value='non-binary' checked={this.props.savedDetails.gender === 'non-binary'} onChange={this.onChange} />
                Non Binary
              </Label>
            </FormGroup>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <Label check>Would you like to be a coach / be coached or both?<span className='manditory'>*</span></Label>
            <FormGroup check>
              <Label check>
                <Input 
                  type="radio"
                  name="role"
                  value='coach'
                  checked={this.props.savedDetails.role === 'coach'}
                  onChange={this.onChange}
                />
                Coach
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input 
                  type="radio"
                  name="role"
                  value='coached'
                  checked={this.props.savedDetails.role === 'coached'}
                  onChange={this.onChange}
                />
                Coached
                </Label>
            </FormGroup>
            <FormGroup check disabled>
              <Label check>
                <Input type="radio" name="role" value='both' checked={this.props.savedDetails.role === 'both'} onChange={this.onChange} />
                Both
                </Label>
            </FormGroup>
          </div>
          <InputField
            description="Role Title"
            placeholder="JavaScript Developer"
            name="jobTitle"
            onChange={this.onChange}
            value={this.props.savedDetails.jobTitle}
            type="text"
          />
          <Label text>What do your skills include?<span className='manditory'>*</span></Label>
          <Form />
        </Col>
      </Row>
    )
  }
}
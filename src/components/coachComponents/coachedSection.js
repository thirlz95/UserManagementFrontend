import React, { Component, Fragment } from 'react'
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';

export default class CoachedSection extends Component {
  constructor(props) {
    super(props);
    console.log('props', this.props.details);

  }

  onChange = e => {
    this.props.onChange(e);
  };

  render() {
    if (this.props.currentStep !== 3) {
      return null
    } 
    return (
      <Fragment>
        <Row className="my-6" id="landing">
          <Col className="justify-content-center col-md-8">
            <h5 style={{ fontFamily: 'Graphik', fontSize: "60px", color: 'var(--primary-blue)', fontWeight: "bold" }}>Be coached </h5>
            <p> Fill all manditory fields marked
              <span className='manditory'>
                *
              </span>
            </p>
            <div style={{ marginBottom: '20px' }}>
              <Label check>Would you like a coach who is level 7 or above?</Label>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="any-level-coach" value='true' onChange={this.onChange} />
                  Yes
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="any-level-coach" value='false' onChange={this.onChange} />
                  No
                </Label>
              </FormGroup>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <Label check>Would you like a coach who can teach you a new technical skill?<span className='manditory'>*</span></Label>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="same-level-coach" value='true' onChange={this.onChange} />
                  Yes
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="same-level-coach" value='false' onChange={this.onChange} />
                  No
                  </Label>
              </FormGroup>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <Label check>Would you like a coach who can teach you more about their role?<span className='manditory'>*</span></Label>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="shadow" value='true' onChange={this.onChange} />
                  Yes
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="shadow" value='false' onChange={this.onChange} />
                  No
                  </Label>
              </FormGroup>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <Label check>Would you be happy to coach more than one person?<span className='manditory'>*</span></Label>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="multi-coach" value={true} onChange={this.onChange} />
                  Yes
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="multi-coach" value={false} onChange={this.onChange} />
                  No
                  </Label>
              </FormGroup>
            </div>
          </Col>
        </Row>
      </Fragment>
    )
  }
}

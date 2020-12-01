import React, { Component, Fragment } from 'react'
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';
import BtnBlue from '../buttons/BtnBlue';

export default class CoachSection extends Component {
  constructor(props){
    super(props);
    console.log('props', props);
 
  }

  onChange = e => {
    console.log('Passing back to coaching Component');
    this.props.onChange(e);
  };

  render() {
    if (this.props.currentStep !== 2) {
      return null
    } 
    return (
      <Fragment>
        <Row className="my-6" id="landing">
          <Col className="justify-content-center col-md-8">
            <h4 style={{ fontFamily: 'Graphik', fontSize: "60px", color: 'var(--primary-blue)', fontWeight: "bold" }}>Be a coach </h4>
            <p> Fill all manditory fields marked
              <span className='manditory'>
                *
              </span>
            </p>
            <div style={{ marginBottom: '20px' }}>
              <Label check>Are you open to connect with someone at any level?</Label>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="anyLevelCoach" value={true} onChange={this.onChange} />
                  Yes
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="anyLevelCoach" value={false} onChange={this.onChange} />
                  No
                </Label>
              </FormGroup>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <Label check>Are you open to connect with someone at the same level, to help them develop a specific skill?<span className='manditory'>*</span></Label>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="sameLevelCoach" value={true} onChange={this.onChange} />
                  Yes
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="sameLevelCoach" value={false} onChange={this.onChange} />
                  No
                  </Label>
              </FormGroup>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <Label check>Would you be happy for someone to shadow you?<span className='manditory'>*</span></Label>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="shadow" value={true} onChange={this.onChange} />
                  Yes
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="shadow" value={false} onChange={this.onChange} />
                  No
                  </Label>
              </FormGroup>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <Label check>Would you be happy to coach more than one person?<span className='manditory'>*</span></Label>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="multiCoach" value={false} onChange={this.onChange} />
                  Yes
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="multiCoach" value={false} onChange={this.onChange} />
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

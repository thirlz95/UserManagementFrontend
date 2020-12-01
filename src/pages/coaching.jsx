import React, { Component, Fragment } from 'react'
import { Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";
import axios from 'axios';

import RegisterImg from '../assets/register.png';
import Title from '../components/text/Title';
import BtnBlue from '../components/buttons/BtnBlue';
import Breadcrumbs from '../components/coachComponents/breadcrumb';
import Details from '../components/coachComponents/details'
import CoachSection from '../components/coachComponents/coachSection';
import CoachedSection from '../components/coachComponents/coachedSection';
import Alerts from '../components/notification/alerts';

export default class Coaching extends Component {

  constructor(props) {
    super(props);
    this.state = {
      skills: [],
      currentStep: 1, 
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  _next = () => {
    let { 
      currentStep,
      role,
      eid,
      firstName,
      lastName,
      gender,
      jobTitle,
      sameLevelCoach,
      shadow,
      anyLevelCoach,
    } = this.state; 
    // change below to switch, would be cleaner
    if (currentStep === 1 && role !== 'coached' && eid && firstName && lastName && gender && jobTitle) {
      // if user selects to be a coach or both +1 
      currentStep = currentStep >= 2 ? 3: currentStep + 1
      this.setState({
        currentStep: currentStep
      })
    } else if (currentStep === 1 && role === 'coached' && eid && firstName && lastName && gender && jobTitle) {
      // if user doesn't select to be a coach or both +2 
      currentStep = currentStep >= 2 ? 3: currentStep + 2
      this.setState({
        currentStep: currentStep
      })
    } else if(currentStep === 1 && !role && !eid && !firstName && !lastName && !gender && !jobTitle) {
      // checks if state exists otherwise it will prompt error for user to fill fields 
      this.setState({
        currentStep,
        message: 'You must complete the below fields before continuing',
        variant: 'danger',
        headingMsg: 'Oh snap! You got an error!',
      })
    } else if (currentStep === 2 && role === 'coach' && anyLevelCoach && sameLevelCoach && shadow) {
      // finished their journey of signing up just to be a coach
      this.setState({
        currentStep: currentStep
      })
    } else if (currentStep === 2 && !anyLevelCoach || !sameLevelCoach || !shadow) {
      this.setState({
        message: 'You must complete the below fields before continuing',
        variant: 'danger',
        headingMsg: 'Oh snap! You got an error!',
      })
    } else if (currentStep === 2 && role === 'both' && anyLevelCoach && sameLevelCoach && shadow) {
      currentStep = currentStep >= 2 ? 3: currentStep + 1
      this.setState({
        currentStep: currentStep
      })
    }
  }
    
  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !== 1) {
      return (
        <BtnBlue onClick={this._prev} content='Back' />
      )
    }
    return null;
  }

  nextButton() {
    let { currentStep, role } = this.state;
    if(currentStep < 3){
      return (
        <BtnBlue onClick={this._next} content='Next' />      
      )
    }
    else if (currentStep === 3 || currentStep === 2 && role === 'coach') {
      return (
        <BtnBlue onClick={this.submitData} content='Submit' />    
      )
    }
    return null;
  }

  submitData = async () => {
    let { 
      role,
      eid,
      firstName,
      lastName,
      gender,
      jobTitle,
      sameLevelCoach,
      shadow,
      anyLevelCoach,
    } = this.state

    const jwt = await localStorage.getItem('x-auth-token');
    const _id = await localStorage.getItem('_id');

    console.log('Submit data methord called, gotta send state Object to API from here'); 

    axios.put(`http://localhost:5000/api/auth/${_id}`, {
      role,
      eid,
      firstName,
      lastName,
      gender,
      jobTitle,
      sameLevelCoach,
      shadow,
      anyLevelCoach,
    },
    {
    headers: {
      'x-auth-token': jwt //the token is a variable which holds the token
    },
  }).then(response => {
      console.log(response);
      // throw users to see they're matches
      this.props.history.push('/mymatches');
    }).catch(err => {
      console.log(err);
    })
  }
  
  render() {
    console.log('State', this.state)
    return (
      <Fragment>
        {/* top graphic and text */}
        <Animated animationInDelay={650} animationIn="fadeIn">
          <Row>
            <Col>
              <Title content="Coach / Coachee Sign up" type="hero"></Title>
              <hr className="hr-blue my-5"></hr>
            </Col>
            <Col className="text-center">
              <img
                alt="Equality Allies"
                src={RegisterImg}
                width="50%"
              />
            </Col>
          </Row>
        </Animated>
        <Breadcrumbs formSection={this.state.currentStep} />
        { this.state.message ? 
          <Alerts variant={this.state.variant} heading={this.state.headingMsg} message={this.state.message} />
          : null 
        }
        {/* Toggles different sections of form, passes state as props and will submit at the end */}
        <Details currentStep={this.state.currentStep} onChange={this.onChange} savedDetails={this.state}/>
        <CoachedSection currentStep={this.state.currentStep} onChange={this.onChange} />
        <CoachSection currentStep={this.state.currentStep}onChange={this.onChange} />
        <Row>
          <Col className='justify-content-end col-md-12'>
          {this.previousButton()}
          {this.nextButton()}
          </Col>
        </Row> 
      </Fragment>
    )
  }
}

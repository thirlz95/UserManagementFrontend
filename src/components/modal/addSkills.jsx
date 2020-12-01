import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, } from 'reactstrap';
import axios from 'axios';
import InputField from '../formInput/inputField';

class AddSkills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  addNewSkill = async () => {
    const { title, experience } = this.state;
    const _id = localStorage.getItem('_id');
    const jwt =  await localStorage.getItem('x-auth-token');
    console.log('jwt', jwt);

    axios.put(`http://localhost:5000/api/auth/${_id}`, {
      title, 
      experience,
    },
    {
    headers: {
      'x-auth-token': jwt //the token is a variable which holds the token
    },
  }).then(response => {
      console.log(response);
      // could set state here for throwing a success notification
      
    }).catch(err => {
      console.log(err);
    })
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add A New Skill</ModalHeader>
          <ModalBody>
            {/* if you extend the skill capturue please ensure you update the backend @POST /api/auth/ */}
            <FormGroup>
              <InputField
                description="Skill Title"
                type="text" 
                className="form-control"
                id="skill-title"
                name='title'
                onChange={this.onChange}
                aria-describedby="skill input"
              />
            </FormGroup>
            <FormGroup>
              <InputField
                description="Experience" 
                type="text" 
                className="form-control"
                id="skill-title"
                name='experience'
                onChange={this.onChange}
                aria-describedby="experience years"
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addNewSkill}>Add Skill</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddSkills;
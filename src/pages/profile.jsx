/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, FormGroup, Form } from 'react-bootstrap';
import placeholder from '../assets/placeholder-person.jpeg';
import Spinner from '../components/spinner/spinner';
import PersonInfo from '../components/cards/PersonInfo';
import SkillCard from '../components/cards/skillCard';
import Textarea from 'react-textarea-autosize';
import BtnBlue from '../components/buttons/BtnBlue';
import BtnBlueOutlined from '../components/buttons/BtnBlueOutlined';

require('../assets/styles/profile.css');

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      person: [],
      disabled: true,
      edited: false
    };
  }

  componentDidMount = async () => {
    const jwt = await localStorage.getItem('x-auth-token');

    axios
      .get('http://localhost:5000/api/auth', {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': jwt
        }
      })
      .then(response => {
        this.setState({
          bio: response.data.bio,
          person: JSON.parse(JSON.stringify(response.data)),
          loading: false
        });
      })
      .catch(error => {
        console.log(error.message);
        throw error;
      });
  };

  editBio = () => {
    this.setState(prevState => ({
      disabled: !prevState.disabled
    }));
  };

  saveBio = async () => {
    const jwt = await localStorage.getItem('x-auth-token');
    const _id = await localStorage.getItem('_id');
    const { updateBio } = this.state;
    axios
      .put(
        `http://localhost:5000/api/auth/${_id}`,
        {
          updateBio
        },
        {
          headers: {
            'x-auth-token': jwt //the token is a variable which holds the token
          }
        }
      )
      .then(response => {
        this.setState({
          person: JSON.parse(JSON.stringify(response.data)),
          loading: false,
          bio: updateBio,
          edited: true,
          disabled: true
        });
      })
      .catch(error => {
        console.log(error.message);
        throw error;
      });
  };

  updateBio = e => {
    this.setState({
      person: {
        bio: e.target.value
      },
      updateBio: e.target.value
    });
  };

  render() {
    const { person, loading, updateBio, edited } = this.state;
    return (
      <Container>
        <Row id="profile">
          {loading ? <Spinner /> : null}
          <Col
            style={{ display: 'inline-block', verticalAlign: 'middle' }}
            className="col-md-1">
            <img
              src={placeholder}
              className="img-circle"
              alt="image"
              aria-label={`image of ${person.email}`}
            />
          </Col>
          <Col className="personInfoLayout" xs="6">
            <PersonInfo
              name={person.name}
              email={person.email}
              role={person.role}
              date={person.date}
            />
          </Col>
        </Row>
        <Row>
          <Col
            style={{ display: 'inline-block', verticalAlign: 'middle' }}
            className="col-md-1"
          />
          <Col className="col-md-6">
            <Form.Label>Tell everyone about yourself</Form.Label>
            <FormGroup>
              <Textarea
                style={{ width: '100%' }}
                onChange={this.updateBio}
                onSubmit={() => this.saveBio}
                placeholder="Past roles, experiences, hobbies, etc"
                name="bio"
                minRows={5}
                maxRows={10}
                useCacheForDOMMeasurements
                disabled={this.state.disabled}
                value={edited ? updateBio : person.bio}
              />
              <Container
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  height: '50px',
                  padding: 0
                }}>
                <BtnBlueOutlined onClick={this.editBio} content="Edit" />
                <BtnBlue onClick={this.saveBio} content="Save" />
              </Container>
            </FormGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;

import React, { Component } from 'react';
import { Container, Row, Col, FormGroup, Form } from 'react-bootstrap';
import Textarea from 'react-textarea-autosize';
import BtnBlue from '../buttons/BtnBlue';
import BtnBlueOutlined from '../buttons/BtnBlueOutlined';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };
  }

  cancel = () => {
      console.log(this.state.comment);
      this.setState({
          comment: ''
      })
  }

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.comment);
    this.props.makeComment(this.state.comment);
    this.setState({
      comment: ''
    });
  };

  onChange = e => {
    console.log('oioi', e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log('Page Props', this.props)
    return (
      <Container>
        <FormGroup>
          <Col className="col-md-6">
            <Form.Label>{this.props.description}</Form.Label>
            <Textarea
              style={{ width: '100%' }}
              onChange={this.onChange}
              placeholder={this.props.placeholder}
              name={this.props.name}
              minRows={3}
              maxRows={7}
              useCacheForDOMMeasurements
            />
            <BtnBlueOutlined onClick={this.cancel} content="Cancel" />
            <BtnBlue onClick={this.onSubmit} content="Add Comment" />
          </Col>
        </FormGroup>
      </Container>
    );
  }
}

export default CommentBox;

import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const Alerts = (props) => {
  console.log('props', props);
  const [show, setShow] = useState(true);
  if (show && props.variant !== null) {
    return (
      <Alert variant={props.variant} onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{props.heading}</Alert.Heading>
        {props.message.errors
          ? props.message.errors.map(({msg}, idx) => (
          <p key={idx}>{msg}</p>
          )): <p>{props.message.msg}</p>
        }
      </Alert>
    );
  } return <p>Please enter the below form with your details</p>
}

export default Alerts; 
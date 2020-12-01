import React from 'react';
import { Card, CardHeader, CardBody, CardText } from 'reactstrap';
import moment from 'moment';
require('../../assets/styles/profile.css')

const PersonInfo = (props) => {
    console.log('Props', props);
  return (
      <Card>
        <CardHeader>Details</CardHeader>
        <CardBody className='card-layout'>
          <CardText><span>Name:</span>{props.name}</CardText>
          <CardText><span>Email Address:</span> {props.email}</CardText>
          <CardText><span>Role:</span> {props.role}</CardText>
          <CardText><span>Member Since:</span> {moment(props.date).format("DD/MM/YYYY")}</CardText>
        </CardBody>
      </Card>
    )
}

export default PersonInfo;
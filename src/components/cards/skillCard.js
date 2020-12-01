import React, { Component } from 'react';
import { Card, CardHeader, CardBody, CardText } from 'reactstrap';
import AddSkills from '../modal/addSkills';

class SkillCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    }
  }

  toggleModal = () => {
    this.setState({
      toggle: true,
    });
  }
  render() {
    const { toggle } = this.state;
    const { skills } = this.props; 
    return (
      <Card>
        <CardHeader style={{ display: 'flex', justifyContent: 'space-between' }}>
          Your Recorded Skills
          <button className="btn btn-outline-success btn-sm" onClick={this.toggleModal}>Add Skills</button>
          { toggle ?
            <AddSkills />
          : null
        }
        </CardHeader>
        <CardBody className='card-layout'>
          { skills.map(({ title }, idx) => (
              <CardText key={idx}><span>title:</span>{title}</CardText>
            ))
          }
        </CardBody>
      </Card>
    )
  }
}

export default SkillCard;
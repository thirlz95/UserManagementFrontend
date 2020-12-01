import React from 'react';
import magnifyGraphic from '../assets/magnifyGraphic.png'

// bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// components
import MatchCardList from '../components/cards/MatchCardList';

//animate
import {Animated} from "react-animated-css";

// array 
import { users } from '../users';

// text
import Title from '../components/text/Title';
import BodyText from '../components/text/BodyText';

const MatchesPage = () => {
    return (
        <div>
            {/** top graphic and text */}
            <Animated animationInDelay={650} animationIn="fadeIn"> 
                <Row>
                        <Col>
                            <Title content="My Matches" type="hero"></Title>
                            <hr className="hr-blue my-5"></hr>
                        </Col>
                        <Col className="text-center">
                            <img
                                alt="Equality Allies"
                                src={magnifyGraphic}
                                width="50%"
                            />
                        </Col>
                </Row>
            </Animated>
            <Animated animationInDelay={750} animationIn="fadeIn"> 
                <BodyText 
                content=
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                spacing="my-5"
                ></BodyText> 
            </Animated>
            {/** cards */}
            <MatchCardList users={users} />
        </div>
    );
}

export default MatchesPage;
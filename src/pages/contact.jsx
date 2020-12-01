import React from 'react';
// img
import magnifyGraphic from '../assets/magnifyGraphic.png'
// bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//animate
import {Animated} from "react-animated-css";
// content comps
import Title from '../components/text/Title';
import BodyText from '../components/text/BodyText';
// form
import ContactForm from '../components/forms/ContactForm';

const ContactPage = () => {
    return (
        <div>
            <Animated animationInDelay={650} animationIn="fadeIn">    
                    <Row>
                        <Col>
                            <Title content="Contact us" type="hero"></Title>
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
            <Animated animationInDelay={850} animationIn="fadeIn"> 
                <ContactForm></ContactForm>
            </Animated>
        </div>
    );
}

export default ContactPage;
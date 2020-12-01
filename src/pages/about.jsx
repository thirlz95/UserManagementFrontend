import React from 'react';
// bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//img
import littleLogo from '../assets/littleLogo.png'
// local component(s)
import EACardWhite from '../components/cards/EACardWhite';
//animate
import {Animated} from "react-animated-css";
// content comps
import Title from '../components/text/Title';
import BodyText from '../components/text/BodyText';
import CookieConsent from 'react-cookie-consent';

const AboutPage = () => {
    return (
        <div>
        <CookieConsent>
        <h5>Privacy Policy</h5>
        <br/>
        <p>
            Your privacy is important to us. It is Accenture's policy to respect your privacy regarding any information we may collect from you across our website, http://equalityallies.com, and other sites we own and operate.
            We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
            We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.
            We don’t share any personally identifying information publicly or with third-parties, except when required to by law.
        </p>
        <br/>
        <p>
            Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
            You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
            Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
            This policy is effective as of 3 September 2019.
        </p>
        </CookieConsent>
        <Animated animationInDelay={650} animationIn="fadeIn">    
                <Row>
                    <Col>
                        <Title content="About us" type="hero"></Title>
                        <hr className="hr-blue my-5"></hr>
                    </Col>
                    <Col className="text-center">
                        <img
                            alt="Equality Allies"
                            src={littleLogo}
                            width="20%"
                        />
                    </Col>
                </Row>
        </Animated>
        <Animated animationInDelay={950} animationIn="fadeIn">    
            <BodyText 
                content=
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            ></BodyText>    
            <Title content="5050 BY 2020" type="h1-grad" spacing="my-4"></Title>
            <BodyText 
                content=
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            ></BodyText>
        </Animated>   
                <Row className="my-5">   
                    <Col>
                        <Animated animationInDelay={1100} animationIn="fadeInUp"> 
                            <EACardWhite
                                title=
                                    'Become an ally'
                                content=
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
                            />
                        </Animated>
                    </Col>
                    <Col>
                        <Animated animationInDelay={1250} animationIn="fadeInUp"> 
                            <EACardWhite
                                title=
                                    'Being a mentor'
                                content=
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
                            />
                        </Animated>
                    </Col>
                    <Col>
                        <Animated animationInDelay={1400} animationIn="fadeInUp"> 
                            <EACardWhite
                                title=
                                    'Being a mentee'
                                content=
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
                            />
                        </Animated>
                    </Col>
                </Row>
        </div>
    );
}

export default AboutPage;
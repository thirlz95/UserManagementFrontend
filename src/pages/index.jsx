import React from 'react';
import bigLogo from '../assets/bigLogo.png'
import { Link } from "react-router-dom";
  
// bootstrap
import {Row, Col} from 'react-bootstrap';
import EACardImg from '../components/cards/EACardImg'
import BtnBlueOutlined from '../components/buttons/BtnBlueOutlined';
//animate
import {Animated} from "react-animated-css";
// content comps
import Title from '../components/text/Title';
import BodyText from '../components/text/BodyText';

const MainPage = () => {
    return (
        <div>
            {/** top logo and text */}
            <section>
                <Row className="my-4" id="landing">
                    <Col className="justify-content-center my-auto">
                        <Animated animationInDelay={950} animationIn="fadeIn">    
                            <img
                            alt="Equality Allies"
                                src={bigLogo}
                            />
                        </Animated>
                    </Col>
                    <Col className="my-auto">  
                        <Animated animationInDelay={750} animationIn="fadeIn">     
                            <Title content="Coaching Connections" type="hero"></Title>
                            <hr className="hr-blue my-5"></hr>
                        </Animated>
                        <Animated animationInDelay={950} animationIn="fadeIn">  
                            <BodyText content="Connect - Coach - Continue to grow" spacing="my-3"></BodyText>
                        </Animated>
                        <Animated animationInDelay={1050} animationIn="fadeIn">  
                            <Link to='/coaching'>
                                <BtnBlueOutlined content={"Get started"} spacing={"my-3"} />
                            </Link> 
                        </Animated>
                    </Col>
                </Row>
            </section>
            {/** categories head and text */}
            <section>
                <Row className="my-5">   
                    <Col>
                        <Animated animationInDelay={1100} animationIn="fadeIn"> 
                            <Title content="Categories" type="h1"></Title>
                            <hr className="hr-black my-3"></hr>
                            <BodyText content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." spacing="my-3"></BodyText>
                        </Animated>
                    </Col>
                </Row>
                {/** cards */}
                <Row className="my-4">
                    <Col>
                        <Animated animationInDelay={1100} animationIn="fadeInUp"> 
                            <EACardImg 
                                src="https://via.placeholder.com/10" 
                                content='Social Connection'
                                />
                        </Animated>
                    </Col>
                    <Col>  
                        <Animated animationInDelay={1250} animationIn="fadeInUp"> 
                            <EACardImg 
                                src="https://via.placeholder.com/10" 
                                content='Upskilling'
                            />
                        </Animated>
                    </Col>
                    <Col>
                        <Animated animationInDelay={1400} animationIn="fadeInUp"> 
                            <EACardImg 
                                src="https://via.placeholder.com/10" 
                                content= 'Professional Guidance' 
                            />
                        </Animated>
                    </Col>
                    <Col>
                        <Animated animationInDelay={1550} animationIn="fadeInUp"> 
                            <EACardImg 
                                src="https://via.placeholder.com/10" 
                                content= 'General Advice' 
                            />
                        </Animated>
                    </Col>
                </Row>
            </section>
        </div>
    );
}
                
export default MainPage;
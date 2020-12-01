import React from 'react';
// bootstrap
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
//animate
import {Animated} from "react-animated-css";
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// styles
import cardStyles from '../../assets/styles/cards.module.css'; // Import css modules stylesheet as styles
import textStyles from '../../assets/styles/text.module.css'; // Import css modules stylesheet as styles
import buttonStyles from '../../assets/styles/buttons.module.css'; // Import css modules stylesheet as styles
// modal
import MatchCardModal from '../core/MatchCardModal';

const MatchCard = (props) => {

        // easy access props
        const name = props.user;
        const fName = name.split(" ")[0];
        const title = props.title;
        const experience = props.experience;
        const offering = props.offering;
        const interval = props.space;
        const description = props.description;
        const skills = props.skils;

        // for modal
        const [modalShow, setModalShow] = React.useState(false);

        return (
            <Col xs={12} sm={6} lg={4} className="mt-5">
                <Animated animationInDelay={interval} animationIn="fadeInUp"> 
                    <Card className={cardStyles.card}>
                        <Card.Body>
                            <Card.Title className={`${textStyles.h2} blue py-1`}>
                                {name}
                            </Card.Title>
                            <Card.Subtitle className={textStyles.BodyTextBold}>
                                {title}
                            </Card.Subtitle>
                            <Card.Subtitle className={`${textStyles.BodyText} py-2`}>
                                {experience} years experience
                            </Card.Subtitle>
                            <div className={`${textStyles.BodyText} py-2 m-0`}>
                                    <Row className="p-1 pt-4 text-center">
                                    {/* RENDERING SOCIAL ICON w/ Conditional  */}
                                    {offering.includes("Social Connection") ? 
                                        <div className={`col ${cardStyles.cardIcons}`}>
                                            <FontAwesomeIcon icon="users" size="2x"></FontAwesomeIcon>
                                            <p><small className="black">Social</small></p>
                                        </div> 
                                    : false}
                                    {/* RENDERING ADVICE ICON w/ Conditional*/}
                                    {offering.includes("Advice") ? 
                                        <div className={`col ${cardStyles.cardIcons}`}>
                                            <FontAwesomeIcon icon="comments" size="2x"></FontAwesomeIcon>
                                            <p><small className="black">Advice</small></p>
                                        </div> 
                                    : false}                                    
                                    {/* RENDERING UPSKILLING ICON w/ Conditional  */}
                                    {offering.includes("Upskilling") ? 
                                        <div className={`col ${cardStyles.cardIcons}`}>
                                            <FontAwesomeIcon icon="book" size="2x"></FontAwesomeIcon>
                                            <p><small className="black">Upskilling</small></p>
                                        </div> 
                                    : false}                                    
                                    {/* RENDERING Professional Guidance ICON w/ Conditional  */}
                                    {offering.includes("Professional Guidance") ? 
                                        <div className={`col ${cardStyles.cardIcons}`}>
                                            <FontAwesomeIcon icon="people-carry" size="2x"></FontAwesomeIcon>
                                            <p><small className="black">Guidance</small></p>
                                        </div> 
                                    : false}
                                    </Row>
                            </div>

                            <Card.Footer className={`${textStyles.BodyText} ${cardStyles.cardFooter}`}>
                                <div className="text-right">
                                    {/* modal trigger */}
                                    <Button
                                        onClick={() => setModalShow(true)}
                                        className={buttonStyles.btnMatch}>
                                        Request {fName}
                                    </Button>
                                </div>    
                                <div>
                                {/* modal */}
                                <MatchCardModal 
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                    name={fName}
                                    description={description}
                                    skills={skills}
                                />
                                </div>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Animated>
            </Col>
        )
    }

export default MatchCard;
import React from 'react';
import Modal from 'react-bootstrap/Modal';
// text
import BodyText from '../text/BodyText';
import Title from '../text/Title';
// buttons
import BtnBlue from '../buttons/BtnBlue';
import BtnBlueOutlined from '../buttons/BtnBlueOutlined';

// really bad practice but I have to put props in and spread them due to the way the bootstrap modal works (onHide callback) - 
// if this is to be used, name, description and skills should be provided

const MatchCardModal = (props) => {

    return (
        
            <Modal
                {...props}
                size="lg"
                aria-labelledby="MatchCardModal"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="MatchCardModal">
                        <Title content={`Request ${props.name}`} type="h1" colour='blue'></Title>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Title content='Description' type="h2"></Title>
                    <BodyText content={props.description} />
                    <BodyText content={props.skills} />
                </Modal.Body>
                <Modal.Footer>
                    <BtnBlueOutlined 
                        onClick={props.onHide}
                        content='Close'/>
                    <BtnBlue 
                        content='Request'/>
                </Modal.Footer>
            </Modal>
    )
}

export default MatchCardModal;
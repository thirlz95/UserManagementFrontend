import React from 'react';
import Card from 'react-bootstrap/Card';
// styles
import cardStyles from '../../assets/styles/cards.module.css'; // Import css modules stylesheet as styles
import textStyles from '../../assets/styles/text.module.css'; // Import css modules stylesheet as styles

const EACardImg = ({src, content}) => {
    return (
        <Card className={cardStyles.card}>
        <Card.Img variant="top" src={src} />
        <Card.Body>
                <h6 className={textStyles.bodyTextBold}>
                    {content}
                </h6>
        </Card.Body>
    </Card>
    )
}

export default EACardImg;
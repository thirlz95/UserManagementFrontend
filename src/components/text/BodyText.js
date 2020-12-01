import React from 'react';
import styles from '../../assets/styles/text.module.css'; // Import css modules stylesheet as styles

const BodyText = ({content, spacing, bold, colour}) => {
    let classes;

    if (bold === true) {
        classes = `${colour} ${spacing} ${styles.bodyTextBold}`;
    } else {
        classes = `${colour} ${spacing} ${styles.bodyText}`;
    }

    return (
        <p className={classes}>{content}</p>
    )
}

export default BodyText;
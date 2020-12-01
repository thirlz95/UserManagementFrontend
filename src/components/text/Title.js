import React from 'react';
import styles from '../../assets/styles/text.module.css'; // Import css modules stylesheet as styles

const Title = ({content, spacing, type, colour}) => {
    let classes;

//     using correct class
    switch (type) {
        case "hero":
            classes = `${colour} ${spacing} ${styles.heroTitle}`;
            break;
        case "h1":
                classes = `${colour} ${spacing} ${styles.h1}`;
                break;
        case "h1-grad":
                classes = `${colour} ${spacing} ${styles.h1Gradient}`;
                break;
        case "h2":
                classes = `${colour} ${spacing} ${styles.h2}`;
                break;
        case "h2-grad":
                classes = `${colour} ${spacing} ${styles.h2Gradient}`;
                break;
        default: 
            break;
    }

    return (
        <div className={classes}>{content}</div>
    )
}

export default Title;
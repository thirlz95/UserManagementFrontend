import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from '../../assets/styles/buttons.module.css'; // Import css modules stylesheet as styles

// have hamburger with logo/login next to it (like portal)

const BtnRed = ({content, spacing, onClick}) => {
    const classes = `btn-lg ${spacing} ${styles.btnRed}`;
    return (
        <Button variant="primary" className={classes} onClick={onClick}>
            {content}
        </Button>
    )
}

export default BtnRed;
import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from '../../assets/styles/buttons.module.css'; // Import css modules stylesheet as styles

// have hamburger with logo/login next to it (like portal)

const BtnBlueOutlined = ({content, spacing, onClick}) => {
    const classes = `btn-lg ${spacing} ${styles.btnBlueO}`;
    return (
        <Button variant="primary" className={classes} onClick={onClick} id='button-right'>
            {content}
        </Button>
    )
}

export default BtnBlueOutlined;
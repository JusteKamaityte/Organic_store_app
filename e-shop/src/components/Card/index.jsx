import React from 'react';
import styles from './index.module.scss';

const Card = (props) => {
    console.log(props);
    return (
    <React.Fragment>
        <div className={styles.Card}>
        {props.title} - {props.children}
        </div>
    </React.Fragment>
    )    
}

export default Card

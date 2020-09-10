import React from 'react';
import styles from './index.module.scss';

const Card = (props) => {
    console.log(props);
    return (
        <div className={styles.Card}>
            {props.title} - {props.children}
        </div>
    )
}

export default Card

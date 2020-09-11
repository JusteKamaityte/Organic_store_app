import React from 'react';
import styles from './index.module.scss';

const Button = (props) => {
    console.log(props);
    return (
        <div className={styles.Button}>{props.title}</div>
    )
}

export default Button

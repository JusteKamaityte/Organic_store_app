import React from 'react';
import styles from './index.module.scss';

const ItemCard = (props) => {
    console.log(props);
    return (
        <React.Fragment>
            <strong>{props.title}</strong>
            <div>{props.description}</div>
            <p>{props.description}</p>
            <img src={props.description} alt={props.title}></img>
        </React.Fragment>
    )
}

export default ItemCard

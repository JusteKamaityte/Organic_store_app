import styles from './index.module.scss';

const Card = (props) => {
    console.log(props);
    return (
    <strong>{props.title}</strong>
    <div >{props.description}</div>
    <p>{props.description}</p>
    <img src={props.description} alt={props.title}></img>
    <Button></Button>
    <Button></Button>
    )
}

export default ItemCard

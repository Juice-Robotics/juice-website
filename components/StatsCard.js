import styles from '../styles/StatsCard.module.css'

const StatsCard = (props) => {
    const hook = props.hook
    const description = props.description
    const citation = props.citation

    return (<div className={styles.card}>
        <h3>{hook}</h3>
        <p>{description}{citation ? <sup>{citation}</sup> : ""}</p>
    </div>)
}

export default StatsCard
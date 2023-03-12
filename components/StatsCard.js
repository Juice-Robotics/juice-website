import styles from '../styles/StatsCard.module.css'

import CountUp from 'react-countup';

const StatsCard = (props) => {
    const number = props.number
    const prefix = props.prefix
    const suffix = props.suffix
    const description = props.description
    const citation = props.citation

    return (<div className={styles.card}>
        <h3>{prefix}<CountUp end={number} duration={1}/>{suffix}</h3>
        <p>{description}{citation ? <sup>{citation}</sup> : ""}</p>
    </div>)
}

export default StatsCard
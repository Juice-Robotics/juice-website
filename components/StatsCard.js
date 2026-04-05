import styles from '../styles/StatsCard.module.css'
import CountUp from 'react-countup';

const StatsCard = (props) => {
    const { number, prefix, suffix, description, citation, dark } = props;

    return (
        <div className={styles.card}>
            <h3 style={{ color: dark ? 'white' : undefined }}>
                {prefix}
                <CountUp
                    end={number}
                    duration={1}
                    separator=","
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                />
                {suffix}
            </h3>

            <p style={{ color: dark ? 'white' : undefined }}>
                {description}
                {citation ? <sup>{citation}</sup> : ""}
            </p>
        </div>
    )
}

export default StatsCard
import styles from '../styles/TimelineSee.module.css';

export default function TimelineCard({ title, image, short, full, active, onClick }) {
    return (
        <div
            className={styles.card}
            onClick={onClick}
        >
            <img src={image} className={styles.image} />

            <h3>{title}</h3>

            <p className={active ? styles.fullText : styles.shortText}>
                {active ? full : short}
            </p>
        </div>
    )
}
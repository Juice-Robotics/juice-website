import styles from '../styles/PressReleaseCard.module.css'


export function PressReleaseCard(props) {
    const thumnail = props.thumbnail
    const title = props.title
    const date = props.date
    const redirect = props.redirect

    return (
        <div className={styles.card} 
        onClick={() => window.location = redirect}
        >
            <div className={styles.imgWrapper}>
                <img src={thumnail}></img>
            </div>
            <div className={styles.bodyContent}>
                <h1>{title}</h1>
                <h2>{date}</h2>
            </div>
        </div>
    )
}
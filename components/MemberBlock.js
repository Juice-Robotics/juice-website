import styles from '../styles/MemberBlock.module.css'

const MemberBlock = (props) => {
    const side = props.side
    const name = props.name
    const description = props.description
    const title = props.title
    const headshot = props.headshot
    const headshotOptions = props.headshotOptions

    return (
        <div className={side == "LEFT" ? styles.left : styles.right}>
            <div className={styles.text}>
                <h2>{name}</h2>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className={styles.headshotContainer}>
                <img src={headshot} style={headshotOptions}></img>
            </div>
        </div>
        )
}

export default MemberBlock
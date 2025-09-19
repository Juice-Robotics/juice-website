import styles from '../styles/MemberBlock.module.css'

const MemberBlock = (props) => {
    const side = props.side
    const name = props.name
    const description = props.description
    const title = props.title
    const headshot = props.headshot
    const headshotOptions = props.headshotOptions

    const headshotAbsPath = '..\\public' + headshot + '?webp'

    return (
        <div className={side == "LEFT" ? styles.left : styles.right}>
            <div className={styles.text}>
                <h2>{name}</h2>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className={styles.headshotContainer}>
                <img src={headshot} style={headshotOptions}></img>
                {/* <picture>
                            <source
                                srcSet={require(headshotAbsPath)}
                                type="image/webp"
                                // width="181"
                                alt={name + " Headshot Picture"}
                                style={headshotOptions}
                            />
                            <img src={headshot} alt={name + " Headshot Picture"} style={headshotOptions}></img>
                        </picture> */}
            </div>
        </div>
        )
}

export default MemberBlock
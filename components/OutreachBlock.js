import styles from '../styles/OutreachBlock.module.css'

const OutreachBlock = (props) => {
    const side = props.side
    const title = props.title
    const description = props.description
    const callToAction = props.callToAction
    const visual = props.visual

    return (<div className={side == "LEFT" ? styles.left : styles.right}>
        <div className={styles.text}>
            <h2>{title}</h2>
            <p>{description}</p>
            {() => {
                // if (callToAction != null) {
                    if (callToAction.type == "LINK_BUTTON") {
                        return (<a href={callToAction.href}>{callToAction.text}</a>)
                    }
                // }
            }}
        </div>
        <div className={styles.visual}>
                
        </div>
    </div>)
}

export default OutreachBlock
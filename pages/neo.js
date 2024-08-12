import NavBar from '../components/Navbar'
import styles from '../styles/ComingSoon2.module.css'

export default function Neo(props) {
    const dark = props.dark;
    return (
        <>
        <NavBar dark={dark} page="home" />
        <div className={styles.main}>
           <h1 className={styles.glitch} data-text="COMING SOON">COMING SOON</h1>
           <p>Check out <a href="/gallery">these pictures</a> while you're at it</p>
        </div>
        </>
    )
}
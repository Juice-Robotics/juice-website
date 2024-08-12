import NavBar from '../components/Navbar'
import styles from '../styles/ComingSoon2.module.css'
import Link from "next/link";

export default function Neo(props) {
    const dark = props.dark;
    return (
        <>
        <NavBar dark={dark} page="home" />
        <div className={styles.main}>
           <h1 className={styles.glitch} data-text="COMING SOON">COMING SOON</h1>
           <p>Check out <Link href="/gallery">these pictures</Link> while you&apos;re at it</p>
        </div>
        </>
    )
}
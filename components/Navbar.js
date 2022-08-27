import Link from "next/link";
import { useState } from "react";
import styles from '../styles/Navbar.module.css'

const NavBar = (props) => {
    var [navActivity, setNavActivity] = useState(false)
    const dark = props.dark
    const page = props.page

    return (
        <nav className={styles.nav + " " + (dark ? styles.dark : styles.light)}>
            <Link href="/">
                <div className={styles.logo}>
                    <picture>
                        <source
                            srcSet={require("../public/assets/" + (dark ? "dark" : "light") + "/logo.png?webp")}
                            type="image/webp"
                            // width="98.26"
                            alt="Juice 16236 Logo"
                        />
                        <img src={"/assets/" + (dark ? "dark" : "light") + "/logo.png"} alt="Juice 16236 Logo"></img>
                    </picture>
                </div>
            </Link>
            <ul className={`${styles.navLinks}  ${navActivity ? styles.navActive : ""}`}>
                <li className={page == "home" ? styles.active : ""}><Link href="/" >Home</Link></li>
                <li className={page == "about" ? styles.active : ""}><Link href="/about">About</Link></li>
                <li className={page == "sponsors" ? styles.active : ""}><Link href="/sponsors">Sponsors</Link></li>
                {/* <li className={page == "outreach" ? styles.onPage : ""}><Link href="/outreach">Outreach</Link></li> */}
                <li className={page == "contact" ? styles.active : ""}><Link href="/contact">Contact</Link></li>
            </ul>
            <div className={`${styles.burger}  ${navActivity ? styles.toggle : ""}`} onClick={(e) => {
                if (!navActivity) {
                    setNavActivity(true)
                } else {
                    setNavActivity(false)
                }
            }}>
                <div className={styles.line1}></div>
                <div className={styles.line2}></div>
                <div className={styles.line3}></div>
            </div>
        </nav>
    );
};

export default NavBar;
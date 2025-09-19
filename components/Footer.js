import Link from "next/link";
import { useState } from "react";
import styles from '../styles/Footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import copypasta from '../data/copypasta.json'
// import the icons you need
import {
    faYoutube,
    faInstagram,
    faTwitter,
    faGithub
} from "@fortawesome/free-brands-svg-icons";

import {faEnvelope} from '@fortawesome/free-solid-svg-icons'


const NavBar = (props) => {
    var [navActivity, setNavActivity] = useState(false)
    const dark = props.dark

    return (
        <footer className={styles.footerDistributed + " " + styles.footer + " " + (dark ? styles.dark : styles.light)}>

            <div className={styles.footerLeft}>
                <picture>
                    <source
                        srcSet={require("../public/assets/" + (dark ? "dark" : "light") + "/logo.png?webp")}
                        type="image/webp"
                        width="181"
                        alt="Juice 16236 Logo"
                    />
                    <img src={"/assets/" + (dark ? "dark" : "light") + "/logo.png"} alt="Juice 16236 Logo"></img>
                </picture>
                {/* <h3><span>juice</span>robotics<span>.org</span></h3> */}

                <p className={styles.footerLinks}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/sponsors">Sponsors</Link>
                    {/* <Link href="/outreach">Outreach</Link> */}
                    <Link href="/contact">Contact</Link>
                    <Link href="/press">Press</Link>
                </p>

                <p className={styles.footerCompanyName}>© {new Date().getFullYear()} Juice 16236. All Rights Reserved.</p>
            </div>

            <div className={styles.footerCenter}>
                <div>
                <FontAwesomeIcon icon={faTwitter} className={styles.i}/>
                    <p><Link href="https://twitter.com/ftcteam16236">@ftcteam16236</Link></p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faEnvelope} className={styles.i}/>
                    <p><Link href="mailto:ftcteam16236@gmail.com">ftcteam16236@gmail.com</Link></p>
                </div>
            </div>
            <div className={styles.footerRight}>
                <p className={styles.footerCompanyAbout}>
                    <span>ABOUT TEAM JUICE 16236</span>
                    {copypasta.about}</p>
                <div className={styles.footerIcons}>
                    <a alt="Juice's YouTube Channel" href="https://www.youtube.com/channel/UCDixouMNi5Kr-GYOzkJOmjg" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} className={styles.i}/></a>
                    <a alt="Juice's Instagram" href="https://www.instagram.com/team_16236/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className={styles.i}/></a>
                    <a alt="Juice's Twitter" href="https://twitter.com/ftcteam16236?lang=en" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} className={styles.i}/></a>
                    <a alt="Contact Juice" href="mailto:ftcteam16236@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} className={styles.i}/></a>
                    <a alt="Juice's GitHub" href="https://github.com/Juice-Robotics" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className={styles.i}/></a>
                </div>
            </div>
        </footer>
    );
};

export default NavBar;
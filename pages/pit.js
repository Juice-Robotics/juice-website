import Head from 'next/head'
import styles from '../styles/Pit.module.css'
import { NextSeo } from 'next-seo';
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import sponsors from '../data/sponsors.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import {
    faYoutube,
    faInstagram,
    faTwitter,
    faGithub
} from "@fortawesome/free-brands-svg-icons";

import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

export default function Pit(props) {
    const dark = props.dark
    return <div className={(dark ? styles.dark : styles.light)}>
        <NextSeo title="Worlds 2023 Pit | Juice 16236" />
        <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <NavBar dark={dark} />
        <main className={styles.main}>
            <section className={styles.hero}>
                <h1>WELCOME TO THE</h1>
                <h1>JUICE PIT</h1>
                <p>WORLDS &apos;23 EDITION</p>
            </section>

            <section className={styles.sponsors}>
                <h2>SPONSORED BY</h2>
                {sponsors.map(sponsor => (
                <a href={sponsor.website} target="_blank" key={sponsors.findIndex(x => {x.website == sponsor.website}).toString()} rel="noreferrer"><img alt={sponsor.name + " Logo"} src={sponsor.logo} /></a>
              ))}
            </section>

            <section className={styles.socials}>
                <h2>DONT FORGET TO <span>FOLLOW US</span></h2>
                <div className={styles.socialIcons}>
                    <a alt="Juice's YouTube Channel" href="https://www.youtube.com/channel/UCDixouMNi5Kr-GYOzkJOmjg" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} className={styles.i}/></a>
                    <a alt="Juice's Instagram" href="https://www.instagram.com/team_16236/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className={styles.i}/></a>
                    <a alt="Juice's Twitter" href="https://twitter.com/ftcteam16236?lang=en" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} className={styles.i}/></a>
                    <a alt="Contact Juice" href="mailto:ftcteam16236@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} className={styles.i}/></a>
                    <a alt="Juice's GitHub" href="https://github.com/Juice-Robotics" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className={styles.i}/></a>
                </div>
            </section>
        </main>
        <Footer dark={dark} />
    </div>
}
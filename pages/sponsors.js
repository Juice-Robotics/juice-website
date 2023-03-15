import Head from 'next/head'
import styles from '../styles/Sponsors.module.css'
import { NextSeo } from 'next-seo';
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Sponsors(props) {
    const dark = props.dark
    return <div className={(dark ? styles.dark : styles.light)}>
        <NextSeo title="Sponsors | Juice 16236" />
        <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <NavBar dark={dark} page="sponsors" />
        <main className={styles.main}>
            <h1>We <span>Thank</span> all of our <span>Sponsors!</span></h1>
            <p>We would not exist without them!</p>

            <h3 style={{ color: "#FF9626" }}>2022-23 SPONSORS</h3>
            <div className={styles.sponsors}>
            <a href="https://www.micron.com/" target="_blank" rel="noreferrer"><img alt="Micron Logo" src="https://media-www.micron.com/-/media/client/global/images/image-gallery/micron-logos/micron-logo_blue_rgb.png?mh=130&mw=215&rev=0b9311bd21024a0aa43d029537692066"/></a>
              <a href="https://www.1517fund.com/" target="_blank" rel="noreferrer"><img alt="1517 Logo" src="https://uploads-ssl.webflow.com/5d9cd3e9b5891d594e90e914/5e25be0eacccd1fa2c17c8d2_1517%20Logo%20Cropped.png"/></a>
              <a href="https://www.acec-ca.org/" target="_blank" rel="noreferrer"><img alt="ACEC California Logo" src="https://cdn.ymaws.com/acec-ca.site-ym.com/graphics/logo.png"/></a>
              <a href="http://sacedm.com/" target="_blank" rel="noreferrer"><img alt="Sac EDM & Waterjet, Inc. Logo" src="https://image4.owler.com/logo/sac-edm---waterjet_owler_20220118_141150_original.png"/></a>
              <a href="http://www.inductiveautomation.com/" target="_blank" rel="noreferrer"><img alt="Inductive Automation Logo" src="https://inductiveautomation.com/static/images/logos/inductive-automation-logo.png"/></a>
              <a href="http://www.powdercraftofrocklin.com/" target="_blank" rel="noreferrer"><img alt="Powdercraft of Rocklin Logo" src="/assets/powder-craft-logo.png"/></a>
              <a href="https://cncmadness.com/" target="_blank" rel="noreferrer"><img alt="CNC Madness Logo" src="/assets/cnc-madness.png"/></a>
            </div>

            <h2 style={{color: "#FF9626", fontSize: "40px"}}>Want to sponsor us?</h2>
            <p>Email us at <a href="mailto:ftcteam16236@gmail.com">ftcteam16236@gmail.com</a> with your work email and we will get to you as soon as we can!</p>
            <a href="./sponsors/brief"><button>View our Sponsors Brief</button></a>

            <br/>
            <br/>
            <h2 style={{marginBottom: 0}}>Not an organization/company?</h2>
            <p>You can still support us by donating to our <a href="https://gofund.me/c9d087b6">GoFundMe</a>!</p>
        </main>
        <Footer dark={dark} />
    </div>
}
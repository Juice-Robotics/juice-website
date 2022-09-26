import Head from 'next/head'
import styles from '../../styles/SponsorsBrief.module.css'
import { NextSeo } from 'next-seo';
import NavBar from '../../components/Navbar'
import Footer from '../../components/Footer'
import StatsCard from '../../components/StatsCard';

export default function SponsorsBrief(props) {
    const dark = props.dark
    return <div className={(dark ? styles.dark : styles.light)}>
        <NextSeo title="Sponsors Brief | Juice 16236" />
        <Head>
            <link rel="icon" href="../favicon.ico" />
        </Head>

        <NavBar dark={dark} page="sponsors" />
        <main className={styles.main}>
            <h1>We Are <span>Juice</span>.</h1>

            {/* <h3 style={{ color: "#FF9626" }}>2021-22 SPONSORS</h3>
            <div className={styles.sponsors}>
                <a href="https://www.micron.com/" target="_blank" rel="noreferrer"><img alt="Micron Logo" src="https://media-www.micron.com/-/media/client/global/images/image-gallery/micron-logos/micron-logo_blue_rgb.png?mh=130&mw=215&rev=0b9311bd21024a0aa43d029537692066" /></a>
                <a href="https://www.1517fund.com/" target="_blank" rel="noreferrer"><img alt="1517 Logo" src="https://uploads-ssl.webflow.com/5d9cd3e9b5891d594e90e914/5e25be0eacccd1fa2c17c8d2_1517%20Logo%20Cropped.png" /></a>
                <a href="https://www.acec-ca.org/" target="_blank" rel="noreferrer"><img alt="ACEC California Logo" src="https://cdn.ymaws.com/acec-ca.site-ym.com/graphics/logo.png" /></a>
                <a href="http://sacedm.com/" target="_blank" rel="noreferrer"><img alt="Sac EDM & Waterjet, Inc. Logo" src="https://image4.owler.com/logo/sac-edm---waterjet_owler_20220118_141150_original.png" /></a>
                <a href="http://www.inductiveautomation.com/" target="_blank" rel="noreferrer"><img alt="Inductive Automation Logo" src="https://inductiveautomation.com/static/images/logos/inductive-automation-logo.png" /></a>
            </div> */}

            <section className={styles.statsSection}>
                <h2>Why Juice?</h2>
                <div className={styles.statsSectionStats}>
                    <StatsCard hook="7+" description="Awards Won" />
                    <StatsCard hook="$5,000+" description="raised through sponsors" citation="1" />
                    <StatsCard hook="400+ people impacted" description="through Juice Outreach Program" citation="2" />
                </div>
                <small><sup>1</sup> 2022-23 Public Juice Financials  </small>
                <small> <sup>2</sup> Internal Data Estimates</small>
            </section>

            <section className={styles.info}>
                <h2>Some Juicy <span>Info</span></h2>
                <ul>
                    <li>Founded in <span>2019</span></li>
                    <li>Initiative of <span>Slient Bot Deadly</span></li>
                    <li><span>8</span> members, 9<sup>th</sup> - 10<sup>th</sup> grade</li>
                </ul>
            </section>

            <section className={styles.financials}>
                <h2>Juice <span>2021-22 Financials</span> Report</h2>
                <div className={styles.downloads}>
                    <a><div>
                        <div className={styles.document} data-type="PDF" />
                        2021-22 Financial Report Letter
                    </div></a>
                    <a><div>
                        <div className={styles.document} data-type="XLXS" />
                        2021-22 Budget
                    </div></a>
                    <a><div>
                        <div className={styles.document} data-type="XLXS" />
                        2022-23 Budget
                    </div></a>
                </div>
                <h3 style={{ color: "#FF9626" }}>2021-22 SPONSORS</h3>
                <div className={styles.sponsors}>
                    <a href="https://www.micron.com/" target="_blank" rel="noreferrer"><img alt="Micron Logo" src="https://media-www.micron.com/-/media/client/global/images/image-gallery/micron-logos/micron-logo_blue_rgb.png?mh=130&mw=215&rev=0b9311bd21024a0aa43d029537692066" /></a>
                    <a href="https://www.1517fund.com/" target="_blank" rel="noreferrer"><img alt="1517 Logo" src="https://uploads-ssl.webflow.com/5d9cd3e9b5891d594e90e914/5e25be0eacccd1fa2c17c8d2_1517%20Logo%20Cropped.png" /></a>
                    <a href="https://www.acec-ca.org/" target="_blank" rel="noreferrer"><img alt="ACEC California Logo" src="https://cdn.ymaws.com/acec-ca.site-ym.com/graphics/logo.png" /></a>
                    <a href="http://sacedm.com/" target="_blank" rel="noreferrer"><img alt="Sac EDM & Waterjet, Inc. Logo" src="https://image4.owler.com/logo/sac-edm---waterjet_owler_20220118_141150_original.png" /></a>
                    <a href="http://www.inductiveautomation.com/" target="_blank" rel="noreferrer"><img alt="Inductive Automation Logo" src="https://inductiveautomation.com/static/images/logos/inductive-automation-logo.png" /></a>
                </div>
            </section>

            <section className={styles.contact}>
            <h2>Want to sponsor us?</h2>
            <p>Email us at <a href="mailto:ftcteam16236@gmail.com">ftcteam16236@gmail.com</a> with your work email and we will get to you as soon as we can!</p>
            </section>
        </main>
        <Footer dark={dark} />
    </div>
}
import Head from 'next/head'
import styles from '../../styles/SponsorsBrief.module.css'
import { NextSeo } from 'next-seo';
import NavBar from '../../components/Navbar'
import Footer from '../../components/Footer'
import StatsCard from '../../components/StatsCard';
import React from 'react';
import sponsors from '../../data/sponsors.json'
import Carousel from 'nuka-carousel/lib/carousel';
import { useEffect } from 'react';

export default function SponsorsBrief(props) {
    const dark = props.dark
    const errorRef = React.createRef();
    var [slidesNumber, setSlidesNumber] = React.useState(4);
    useEffect(() => {
        var isMobileView = (navigator.userAgent).match(
            /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
        ) ? true : false

        setSlidesNumber(isMobileView ? 1 : 4)
    })
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
                    <StatsCard number={15} prefix="" suffix="+" description="awards won" />
                    <StatsCard number={5000} prefix="$" suffix="+" description="fundraised" citation="1" />
                    <StatsCard number={3700} prefix="" suffix="+ people impacted" description="through the Juice Outreach Program" citation="2" />
                    <StatsCard number={10} prefix="" suffix="+ countries impacted" description="through the Juice Outreach Program" citation="2" />
                    <StatsCard number={9} prefix="Ranked #" suffix="" description="in the world" citation="3" />
                </div>
                <small><sup>1</sup> 2022-23 Juice Financials  </small>
                <small>  <sup>2</sup> Internal Data</small>
                <small>  <sup>3</sup> FTCStats.org 2023 Offensive Power Ranking (OPR)</small>
            </section>

            <section className={styles.info}>
                <h2>Some Juicy <span>Facts</span></h2>
                <ul>
                    <li>Founded in <span>2019</span></li>
                    <li>Based in <span>Folsom, CA</span></li>
                    <li>Initiative of <span>Slient Bot Deadly 501(c)3</span></li>
                    <li><span>5</span> members, 9<sup>th</sup> - 10<sup>th</sup> grade</li>
                </ul>
            </section>

            <section className={styles.financials}>
                <h2>Juice <span>2021-22 Financials</span> Report</h2>
                <div className={styles.downloads}>
                    {/* <a onClick={() => { errorRef.current.style.display = "block"; errorRef.current.style.opacity = 1 }}><div>
                        <div className={styles.document} data-type="PDF" />
                        2021-22 Financial Report Letter
                    </div></a> */}
                    <a onClick={() => { errorRef.current.style.display = "block"; errorRef.current.style.opacity = 1 }}><div>
                        <div className={styles.document} data-type="XLXS" />
                        2021-22 Budget
                    </div></a>
                    <a onClick={() => { errorRef.current.style.display = "block"; errorRef.current.style.opacity = 1 }}><div>
                        <div className={styles.document} data-type="XLXS" />
                        2022-23 Budget
                    </div></a>
                </div>

                <div className={styles.error} ref={errorRef}>
                    <p>Email us at <a href="mailto:ftcteam16236@gmail.com">ftcteam16236@gmail.com</a> for these documents.</p>
                </div>

                <h3 style={{ color: "#FF9626" }}>2022-23 SPONSORS</h3>
                {/* <div className={styles.sponsors}>
                    <a href="https://www.micron.com/" className={styles.white} target="_blank" rel="noreferrer"><img alt="Micron Logo" src="https://media-www.micron.com/-/media/client/global/images/image-gallery/micron-logos/micron-logo_blue_rgb.png?mh=130&mw=215&rev=0b9311bd21024a0aa43d029537692066" /></a>
                    <a href="https://www.1517fund.com/" className={styles.white} target="_blank" rel="noreferrer"><img alt="1517 Logo" src="https://uploads-ssl.webflow.com/5d9cd3e9b5891d594e90e914/5e25be0eacccd1fa2c17c8d2_1517%20Logo%20Cropped.png" /></a>
                    <a href="https://www.acec-ca.org/" className={styles.white} target="_blank" rel="noreferrer"><img alt="ACEC California Logo" src="https://cdn.ymaws.com/acec-ca.site-ym.com/graphics/logo.png" /></a>
                    <a href="http://sacedm.com/" className={styles.halfwhite} target="_blank" rel="noreferrer"><img alt="Sac EDM & Waterjet, Inc. Logo" src="https://image4.owler.com/logo/sac-edm---waterjet_owler_20220118_141150_original.png" /></a>
                    <a href="http://www.inductiveautomation.com/" className={styles.white} target="_blank" rel="noreferrer"><img alt="Inductive Automation Logo" src="https://inductiveautomation.com/static/images/logos/inductive-automation-logo.png" /></a>
                    <a href="http://www.powdercraftofrocklin.com/" target="_blank" rel="noreferrer"><img alt="Powdercraft of Rocklin Logo" src="/assets/powder-craft-logo.png"/></a>
                    <a href="https://cncmadness.com/" className={styles.white} target="_blank" rel="noreferrer"><img alt="CNC Madness Logo" src="/assets/cnc-madness.png" /></a>
                </div> */}
                <div className={styles.sponsors}>
              {sponsors.map(sponsor => (
                <a href={sponsor.website} className={styles[sponsor.logoStyle]} target="_blank" key={sponsors.findIndex(x => {x.website == sponsor.website}).toString()} rel="noreferrer"><img alt={sponsor.name + " Logo"} src={sponsor.logo}/></a>
              ))}
            </div>
            </section>

            <section className={styles.album}>
                <h2>The Juice <span>Album</span></h2>
                <Carousel slidesToShow={slidesNumber} wrapAround="true" className='carousel' enableKeyboardControls="true" cellAlign='center'>
                    <img src="\assets\team\team pic.jpg" />
                    <img src="\assets\robot.jpg" />
                    <img src="\assets\robot-hat.jpg" />
                    <img src="\assets\IMG_9287.jpg" />
                    <img src="\assets\IMG_7298.jpg" />
                    <img src="\assets\team\team_2022.png" />
                </Carousel>
            </section>

            <section className={styles.contact}>
                <h2>Want to sponsor us?</h2>
                <p>Email us at <a href="mailto:ftcteam16236@gmail.com">ftcteam16236@gmail.com</a> with your work email and we will get to you as soon as we can!</p>
            </section>
        </main>
        <Footer dark={dark} />
    </div>
}
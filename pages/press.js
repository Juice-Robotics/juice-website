import Head from 'next/head'
import styles from '../styles/SponsorsBrief.module.css'
import { NextSeo } from 'next-seo';
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import StatsCard from '../components/StatsCard';
import React from 'react';
import { PressReleaseCard } from '../components/PressReleaseCard';
import Carousel from 'nuka-carousel/lib/carousel';
import { useEffect } from 'react';
import sponsors from '../data/sponsors.json';


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
        <NextSeo title="Press | Juice 16236" />
        <Head>
            <link rel="icon" href="../favicon.ico" />
        </Head>

        <NavBar dark={dark} />
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

            <section className={styles.statsSection + " selectContrast"}>
                <h2>Some Juicy Numbers</h2>
                <div className={styles.statsSectionStats}>
                    <StatsCard number={15} prefix="" suffix="+" description="awards won" />
                    <StatsCard number={20} prefix="" suffix="+" description="matches won this season" citation="" />
                    <StatsCard number={5000} prefix="" suffix="+ people impacted" description="through the Juice Outreach Program" citation="1" />
                    <StatsCard number={10} prefix="" suffix="+ countries impacted" description="through the Juice Outreach Program" citation="1" />
                    <StatsCard number={9} prefix="Rank #" suffix="" description="in the world" citation="2" />
                </div>
                <small>  <sup>1</sup> Internal Data</small>
                <small>  <sup>2</sup> FTCStats.org 2023 Offensive Power Ranking (OPR)</small>
            </section>

            <section className={styles.info}>
                <h2>Juice <span>Trivia</span></h2>
                <ul>
                    <li>Founded in <span>2019</span></li>
                    <li>Based in <span>Folsom, CA</span></li>
                    <li>Initiative of <span>Silent Bot Deadly 501(c)3</span></li>
                    <li><span>6</span> members, 9<sup>th</sup> - 10<sup>th</sup> grade</li>
                </ul>

                <h3 style={{ color: "#FF9626" }}>ABOUT TEAM JUICE</h3>
                <p>Team Juice was founded in September 2019, initially as part of the Folsom High School robotics club but soon as a private team under Silent Bot Deadly STEM Education Inc (SBD), a 501(c)(3) not-for-profit organization dedicated to educating the youth about science, technology, engineering, and math.</p>
                <p>We have had multiple accomplishments over the years, making it to the Worlds Championships both in our rookie year and current year, but also helping the disabled community of Sacramento learn STEM skills, or excite local elementary schoolers into the wonderful world of robotics.</p>
                <p>Team Juice’s mission is to promote interest in the field of STEM in our community through competing in the FIRST Tech Challenge and providing multiple outreach events/opportunities to the community around us.</p>

                <h3 style={{ color: "#FF9626" }}>TEAM JUICE BIO</h3>
                <p>Team Juice 16236 is an award-winning competitive robotics team in Folsom, CA. Founded in 2019, our team comprises of eight high school and middle school students. Team Juice competes in the FIRST® Tech Challenge (FTC), an international robotics competition open to grades 7-12. We are an official initiative under Silent Bot Deadly which is a 501(c)(3) Non-Profit.</p>
            </section>

            <section className={styles.financials}>
                <h2>Juice <span>2022-23 Sponsors</span></h2>

                {/* <div className={styles.sponsors}>
                    <a href="https://www.micron.com/" className={styles.white} target="_blank" rel="noreferrer"><img alt="Micron Logo" src="https://media-www.micron.com/-/media/client/global/images/image-gallery/micron-logos/micron-logo_blue_rgb.png?mh=130&mw=215&rev=0b9311bd21024a0aa43d029537692066" /></a>
                    <a href="https://www.1517fund.com/" className={styles.white} target="_blank" rel="noreferrer"><img alt="1517 Logo" src="https://uploads-ssl.webflow.com/5d9cd3e9b5891d594e90e914/5e25be0eacccd1fa2c17c8d2_1517%20Logo%20Cropped.png" /></a>
                    <a href="https://www.acec-ca.org/" className={styles.white} target="_blank" rel="noreferrer"><img alt="ACEC California Logo" src="https://cdn.ymaws.com/acec-ca.site-ym.com/graphics/logo.png" /></a>
                    <a href="http://sacedm.com/" className={styles.halfwhite} target="_blank" rel="noreferrer"><img alt="Sac EDM & Waterjet, Inc. Logo" src="https://image4.owler.com/logo/sac-edm---waterjet_owler_20220118_141150_original.png" /></a>
                    <a href="http://www.inductiveautomation.com/" className={styles.white} target="_blank" rel="noreferrer"><img alt="Inductive Automation Logo" src="https://inductiveautomation.com/static/images/logos/inductive-automation-logo.png" /></a>
                    <a href="http://www.powdercraftofrocklin.com/" target="_blank" rel="noreferrer"><img alt="Powdercraft of Rocklin Logo" src="/assets/powder-craft-logo.png" /></a>
                    <a href="https://cncmadness.com/" className={styles.white} target="_blank" rel="noreferrer"><img alt="CNC Madness Logo" src="/assets/cnc-madness.png" /></a>
                </div> */}

                <div className={styles.sponsors}>
                    {sponsors.map(sponsor => (
                        <a href={sponsor.website} className={styles[sponsor.logoStyle]} target="_blank" key={sponsors.findIndex(x => {x.website == sponsor.website}).toString()} rel="noreferrer"><img alt={sponsor.name + " Logo"} src={sponsor.logo} /></a>
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

            <section className={styles.financials}>
                <h2>Juice-<span>Press Releases</span></h2>
                <div className={styles.pressReleases}>
                    <PressReleaseCard title="Folsom-based Robotics Team Qualifies for World Championship" date="March 14, 2023" thumbnail="\assets\team\team pic.jpg" redirect="\assets\press-releases\Juice_Worlds_2023_Press_Release.pdf" />
                </div>
            </section>

            <section className={styles.contact}>
                <h2>Want to contact us?</h2>
                <p>Email us at <a href="mailto:ftcteam16236@gmail.com">ftcteam16236@gmail.com</a>  and we will get to you as soon as we can!</p>
            </section>
        </main>
        <Footer dark={dark} />
    </div>
}
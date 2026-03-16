import Head from 'next/head'
import styles from '../styles/Press.module.css'
import { NextSeo } from 'next-seo';
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import StatsCard from '../components/StatsCard';
import React from 'react';
import { PressReleaseCard } from '../components/PressReleaseCard';
import Carousel from 'nuka-carousel/lib/carousel';
import { useEffect } from 'react';
import sponsors from '../data/sponsors.json';
import copypasta from '../data/copypasta.json'


import localFont from 'next/font/local'
// import './globals.css'

const programOT = localFont({
    src: [
        // Regular
        { path: '../fonts/program/Program-Regular.woff2', weight: '400', style: 'normal' },
        // { path: '../fonts/program/Program-RegularItalic.woff2', weight: '400', style: 'italic' },
        // Medium
        { path: '../fonts/program/Program-Medium.woff2', weight: '500', style: 'normal' },
        // { path: '../fonts/program/Program-MediumItalic.woff2', weight: '500', style: 'italic' },
        // Bold
        { path: '../fonts/program/Program-Bold.woff2', weight: '700', style: 'normal' },
        // { path: '../fonts/program/Program-BoldItalic.woff2', weight: '700', style: 'italic' },
        // Black
        // { path: '../fonts/program/Program-Black.woff2', weight: '900', style: 'normal' },
        // { path: '../fonts/program/Program-BlackItalic.woff2', weight: '900', style: 'italic' },
    ],
    variable: '--font-program', // The CSS variable to use in vanilla CSS
})

// Repeat for the Narrow/Condensed version to handle font-stretch properly
const programOTNarrow = localFont({
    src: [
        { path: '../fonts/program/ProgramNarrow-Regular.woff2', weight: '400', style: 'normal' },
        // { path: '../fonts/program/ProgramNarrow-RegularItalic.woff2', weight: '400', style: 'italic' },
        { path: '../fonts/program/ProgramNarrow-Medium.woff2', weight: '500', style: 'normal' },
        // { path: '../fonts/program/ProgramNarrow-MediumItalic.woff2', weight: '500', style: 'italic' },
        { path: '../fonts/program/ProgramNarrow-Bold.woff2', weight: '700', style: 'normal' },
        // { path: '../fonts/program/ProgramNarrow-BoldItalic.woff2', weight: '700', style: 'italic' },
    ],
    variable: '--font-program-narrow',
})

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
            <section className={styles.latestNews + ` ${programOT.variable} ${programOTNarrow.variable}`}>
                <div className={styles.indicator}>
                    LATEST NEWS
                </div>
                <h1>Folsom Robotics Team Secures Third World Championship Qualification</h1>
                <h3>MARCH 6, 2026</h3>
                <p>Team Juice 16236 becomes one of the first non-Bay Area NorCal teams to qualify for the World
                    Championships three times.</p>
                <a href="\assets\press-releases\Juice_Worlds_2026_Press_Release.pdf"><button>READ MORE</button></a>
            </section>

            <section className={styles.financials}>
                <h2><i>Juice-</i><span><i>Press</i> Releases</span></h2>
                <div className={styles.pressReleases}>
                    <PressReleaseCard title="Folsom Robotics Team Secures Third World Championship Qualification" date="March 6, 2026" thumbnail="\assets\team\team_2026.JPG" redirect="\assets\press-releases\Juice_Worlds_2026_Press_Release.pdf" />
                    <PressReleaseCard title="Folsom-based Robotics Team Qualifies for World Championship" date="March 14, 2023" thumbnail="\assets\team\team pic.jpg" redirect="\assets\press-releases\Juice_Worlds_2023_Press_Release.pdf" />
                </div>
            </section>

            <section className={styles.statsSection + " selectContrast"}>
                <h2>Some Juicy Numbers</h2>
                <div className={styles.statsSectionStats}>
                    <StatsCard number={15} prefix="" suffix="+" description="awards won" />
                    <StatsCard number={20} prefix="" suffix="+" description="matches won this season" citation="" />
                    <StatsCard number={10000} prefix="" suffix="+ people impacted" description="through the Juice Outreach Program" citation="1" />
                    <StatsCard number={10} prefix="" suffix="+ countries impacted" description="through the Juice Outreach Program" citation="1" />
                    <StatsCard number={9} prefix="Rank #" suffix="" description="in the world" citation="2" />
                </div>
                <small>  <sup>1</sup> Internal Data</small>
                <small>  <sup>2</sup> FTCStats.org 2023 Offensive Power Rating (OPR)</small>
            </section>

            <section className={styles.info}>
                <h2>Juice <span>Trivia</span></h2>
                <ul>
                    <li>Founded in <span>2019</span></li>
                    <li>Based in <span>Folsom, CA</span></li>
                    <li>Initiative of <span>Silent Bot Deadly 501(c)3</span></li>
                    <li><span>15</span> members, 8<sup>th</sup> - 12<sup>th</sup> grade</li>
                </ul>

                <h3 style={{ color: "#FF9626" }}>ABOUT TEAM JUICE</h3>
                <p>Team Juice was founded in September 2019, initially as part of the Folsom High School robotics club but soon as a private team under Silent Bot Deadly STEM Education Inc (SBD), a 501(c)(3) not-for-profit organization dedicated to educating the youth about science, technology, engineering, and math.</p>
                <p>We have had multiple accomplishments over the years, making it to the Worlds Championships in 2020 (our rookie year), 2023, and 2026, but also adovacting for STEM education at the State and National level, or excite local elementary schoolers into the wonderful world of robotics.</p>
                <p>Team Juice’s mission is to promote interest in the field of STEM in our community through competing in the FIRST Tech Challenge and providing multiple outreach events/opportunities to the community around us.</p>

                <h3 style={{ color: "#FF9626" }}>TEAM JUICE BIO</h3>
                <p>{copypasta.about}</p>
            </section>

            <section className={styles.financials}>
                <h2>Juice <span>2025-26 Sponsors</span></h2>
                <div className={styles.sponsors}>
                    {sponsors.map(sponsor => (
                        <a href={sponsor.website} className={styles[sponsor.logoStyle]} target="_blank" key={sponsors.findIndex(x => { x.website == sponsor.website }).toString()} rel="noreferrer"><img alt={sponsor.name + " Logo"} src={sponsor.logo} /></a>
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
                <h2>Want to contact us?</h2>
                <p>Email us at <a href="mailto:ftcteam16236@gmail.com">ftcteam16236@gmail.com</a>  and we will get to you as soon as we can!</p>
            </section>
        </main>
        <Footer dark={dark} />
    </div>
}
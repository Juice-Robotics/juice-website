import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import React from 'react'
import { NextSeo } from 'next-seo';
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import sponsors from '../data/sponsors.json'
import CountUp from 'react-countup';
import Link from "next/link";
import copypasta from '../data/copypasta.json'

export default function Home(props) {
  const dark = props.dark
  return (
    <div className={(dark ? styles.dark : styles.light)}>
      <Head>
        <title>Juice 16236</title>

        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /> */}
      </Head>

      <NextSeo
        title="Team Juice 16236 - Home"
        description="Juice 16236 is a FTC Team based in Folsom, CA."
        canonical="https://juicerobotics.org/"
        openGraph={{
          url: 'https://juicerobotics.org',
          title: 'Juice 16236',
          description: 'Juice 16236 is a FIRST® Tech Challenge team based in Folsom, CA.',
          images: [
            {
              url: 'https://cdn.discordapp.com/attachments/949530485023977482/949530599318765578/JUICE_16236.png',
              alt: 'Juice 16236 Logo',
              type: 'image/png',
            },
            {
              url: 'https://juicerobotics.org/_next/static/images/roseville-bot-06f35766e1f5fa17f99db81fc713c278.jpg.webp',
              alt: 'Juice 16236 CENTERSTAGE Robot',
              type: 'image/jpeg',
            },
          ],
          site_name: 'Juice 16236',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[{
          property: 'theme-color',
          content: '#fe8f00'
        }]}
      />

      <NavBar dark={dark} page="home" />
      <main className={styles.main}>
        <div className={styles.dots}>
          <section className={styles.robotStack}>
            <h1 className={styles.topText}>JUICE</h1>
            <picture>
              <source
                srcSet={require("../public/assets/robot-trans-3.png?webp")}
                type="image/webp"
                width="900"
                alt=""
              />
              <img src={"/assets/robot-trans-3.png"} alt="Juice 16236 Logo"></img>
            </picture>
            <h1 className={styles.bottomText}>16236</h1>
          </section>
        </div>

        <section className={styles.miniStats}>
          <div className={styles.smolSponsorsSection}>
            <p>SPONSORED BY</p>
            <div className={styles.scroller}>
              <ul className={styles.innerScroller}>
                {sponsors.map(sponsor => (
                  <li key={sponsors.findIndex(x => { x.website == sponsor.website }).toString()}><a href={sponsor.website} target="_blank" rel="noreferrer"><img alt={sponsor.name + " Logo"} src={sponsor.logo} className={sponsor.imgClass == "grayscaleSponsor" ? styles.grayscaleSponsor : ""} /></a></li>
                ))}
                {sponsors.map(sponsor => (
                  <li key={sponsors.findIndex(x => { x.website == sponsor.website }).toString() + "2"}><a href={sponsor.website} target="_blank" rel="noreferrer"><img alt={sponsor.name + " Logo"} src={sponsor.logo} className={sponsor.imgClass == "grayscaleSponsor" ? styles.grayscaleSponsor : ""} /></a></li>
                ))}
              </ul>
            </div>
          </div>

          <h2>Ranked <span style={{ color: "#FF9626" }}>#9
            {/* <CountUp
            start={1929}
            end={9}
            duration={1}
            useEasing={true}
            easingFn={(t, b, c, d) => {
              return (t==d) ? b+c : c * (-Math.pow(2, -2 * t/d) + 1) + b;
            }}
            // separator=","
            enableScrollSpy={true}
            scrollSpyOnce={true} /> */}
            </span> out of 6,000+</h2>
          <small>IN THE 2023 SEASON</small>
          <div className={styles.statsContainer}>
            <div className={styles.statsCard}>
              <h3>Award Winning Robots</h3>
              <p>15+ awards and 50+ matches won in team history</p><br />
              <Link href="/neo"><a className={styles.button}>MEET THE ROBOT</a></Link>
            </div>
            <div className={styles.statsCard}>
              <h3><CountUp
                end={10000}
                duration={1}
                separator=","
                enableScrollSpy={true}
                scrollSpyOnce={true} />+ people impacted</h3>
              <p>in <bold style={{ fontWeight: "700" }}>10+ countries</bold> through the Juice Outreach Program</p><br />
              <Link href="/outreach"><a className={styles.button}>LEARN MORE</a></Link>
            </div>
            <div className={styles.statsCard}>
              <div>
                <h3><CountUp
                  end={2}
                  duration={0.25}
                  separator=","
                  enableScrollSpy={true}
                  scrollSpyOnce={true} />x NorCal Champions</h3>
                <p>and played in every NorCal Championship playoffs since 2019</p>
              </div>
              <Link href="/about"><a className={styles.button}>MEET THE TEAM</a></Link>
            </div>

            {/* <div className={styles.statsCard}>
              <StatsCard number={10000} prefix="" suffix="+ people impacted" description="through the Juice Outreach Program" citation="1" />
            </div>
            <div className={styles.statsCard}>
              <StatsCard number={10000} prefix="" suffix="+ people impacted" description="through the Juice Outreach Program" citation="1" />
            </div> */}
          </div>

        </section>

        <section className={styles.aboutSection}>
          <div className={styles.picColumn}>
            <picture>
              <source
                srcSet={require("../public/assets/team/team_2025.jpg?webp")}
                type="image/webp"
                // width="181"
                alt="Team Juice (2022)"
              />
              <img src={"/assets/team/team_2025.png"} alt="Juice 16236 2021-22"></img>
            </picture>
            <picture>
              <source
                srcSet={require("../public/assets/folsom-bot.jpg?webp")}
                type="image/webp"
                // width="181"
                alt='Juice 16236 Award-Winning "REDEMPTION v3" Robot'
              />
              <img src={"/assets/folsom-bot.jpg"} alt='Juice 16236 Award-Winning "REDEMPTION v3" Robot'></img>
            </picture>
          </div>
          <div>
            <h2>ABOUT <span style={{ color: "#FF9626" }}>TEAM JUICE</span></h2>
            <p>{copypasta.about}</p>

            <h3 style={{ color: "#FF9626" }}>2024-25 SPONSORS</h3>
            {/* <div className={styles.sponsors}>
              <a href="https://www.micron.com/" target="_blank" rel="noreferrer"><img alt="Micron Logo" src="https://media-www.micron.com/-/media/client/global/images/image-gallery/micron-logos/micron-logo_blue_rgb.png?mh=130&mw=215&rev=0b9311bd21024a0aa43d029537692066"/></a>
              <a href="https://www.1517fund.com/" target="_blank" rel="noreferrer"><img alt="1517 Logo" src="https://uploads-ssl.webflow.com/5d9cd3e9b5891d594e90e914/5e25be0eacccd1fa2c17c8d2_1517%20Logo%20Cropped.png"/></a>
              <a href="https://www.acec-ca.org/" target="_blank" rel="noreferrer"><img alt="ACEC California Logo" src="https://cdn.ymaws.com/acec-ca.site-ym.com/graphics/logo.png"/></a>
              <a href="http://sacedm.com/" target="_blank" rel="noreferrer"><img alt="Sac EDM & Waterjet, Inc. Logo" src="https://image4.owler.com/logo/sac-edm---waterjet_owler_20220118_141150_original.png"/></a>
              <a href="http://www.inductiveautomation.com/" target="_blank" rel="noreferrer"><img alt="Inductive Automation Logo" src="https://inductiveautomation.com/static/images/logos/inductive-automation-logo.png"/></a>
              <a href="http://www.powdercraftofrocklin.com/" target="_blank" rel="noreferrer"><img alt="Powdercraft of Rocklin Logo" src="/assets/powder-craft-logo.png"/></a>
              <a href="https://cncmadness.com/" target="_blank" rel="noreferrer"><img alt="CNC Madness Logo" src="/assets/cnc-madness.png"/></a>
            </div> */}

            <div className={styles.sponsors}>
              {sponsors.map(sponsor => (
                <a href={sponsor.website} target="_blank" key={sponsors.findIndex(x => { x.website == sponsor.website }).toString()} rel="noreferrer"><img alt={sponsor.name + " Logo"} src={sponsor.logo} className={sponsor.imgClass == "grayscaleSponsor" ? styles.grayscaleSponsor : ""} /></a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer dark={dark} />

    </div>
  )
}

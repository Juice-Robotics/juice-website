import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import React from 'react'
import { NextSeo } from 'next-seo';
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import sponsors from '../data/sponsors.json'

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
              url: 'https://media.discordapp.net/attachments/884550121503752222/947384156403417088/Full_robot_v2_arm_up_2022-Feb-27_06-37-45AM-000_CustomizedView6366346004_jpg.jpeg',
              alt: 'Juice 16236 Freight Frenzy Robot v2',
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

        <section className={styles.aboutSection}>
          <div className={styles.picColumn}>
            <picture>
              <source
                srcSet={require("../public/assets/team/team_2024.jpg?webp")}
                type="image/webp"
                // width="181"
                alt="Team Juice (2022)"
              />
              <img src={"/assets/team/team_2024.png"} alt="Juice 16236 2021-22"></img>
            </picture>
            <picture>
              <source
                srcSet={require("../public/assets/worlds-bot.png?webp")}
                type="image/webp"
                // width="181"
                alt='Juice 16236 Award-Winning "REDEMPTION v3" Robot'
              />
              <img src={"/assets/worlds-bot.png"} alt='Juice 16236 Award-Winning "REDEMPTION v3" Robot'></img>
            </picture>
          </div>
          <div>
            <h2>ABOUT <span style={{ color: "#FF9626" }}>TEAM JUICE</span></h2>
            <p>Team Juice 16236 is a competitive robotics team in Folsom, CA. Founded in 2019, our team comprises of eight high school and middle school students. Team Juice competes in the FIRST Tech Challenge (FTC), an international robotics competition open to grades 7-12. We are an official initiative under Silent Bot Deadly which is a 501(c)(3) Non-Profit.</p>

            <h3 style={{ color: "#FF9626" }}>2023-24 SPONSORS</h3>
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
                <a href={sponsor.website} target="_blank" key={sponsors.findIndex(x => {x.website == sponsor.website}).toString()} rel="noreferrer"><img alt={sponsor.name + " Logo"} src={sponsor.logo} className={sponsor.imgClass == "grayscaleSponsor" ? styles.grayscaleSponsor : ""}/></a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer dark={dark} />

    </div>
  )
}

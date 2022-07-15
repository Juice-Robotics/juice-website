import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import { NextSeo } from 'next-seo';
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  const dark = true

  return (
    <div className={(dark ? styles.dark : styles.light)}>
      <Head>
        <title>Juice 16236</title>

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet" />
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /> */}
      </Head>

      <NextSeo
        title="Juice 16236"
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

      <NavBar dark={dark}/>
      <main className={styles.main}>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
      </main>

      <Footer dark={dark}/>

    </div>
  )
}

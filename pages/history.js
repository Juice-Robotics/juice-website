import Head from 'next/head'
import styles from '../styles/History.module.css'
import { NextSeo } from 'next-seo';
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import Timeline from '../components/Timeline'
import timelineData from './timeline.json'
import Image from 'next/image'

export default function History(props) {
    const dark = props.dark
    return (
        <div className={styles.page}>
            <div className={dark ? styles.dark : styles.light}>
                <Head>
                    <title>History | Juice 16236</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <NextSeo
                    title="History | Juice 16236"
                    description="Explore the history and achievements of FTC Team Juice 16236."
                    canonical="https://juicerobotics.org/history"
                />

                <NavBar dark={dark} page="history" />

                <main className={styles.main}>
                                    <h1>Our <span>History</span></h1>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '5px',
                            marginBottom: '50px',
                            transform: 'translateX(-20px)'
                        }}
                    >
                        <Image
                            src="/assets/dark/logo.png"
                            alt="Logo"
                            width={400}
                            height={400}
                            style={{ objectFit: 'contain', height: 'auto', width: '400px' }}
                        />
                    </div>
                    <p className={styles.summary}>
                        Our journey has been marked by significant achievements, from winning
                        <span style={{ color: '#FF9626' }}> two Northern California Championships </span>
                        to competing as
                        <span style={{ color: '#FF9626' }}> Alliance Captain at the FIRST Championship Franklin Division Finals</span>.
                        Each season has been a stepping stone, building on our successes and learning from our challenges.
                    </p>
                    <Timeline dark={dark} data={timelineData.timeline} />
                </main>

                <Footer dark={dark} />
            </div>
        </div>
    );
}
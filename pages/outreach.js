import Head from 'next/head'
import styles from '../styles/Sponsors.module.css'
import { NextSeo } from 'next-seo';
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import OutreachBlock from '../components/OutreachBlock';

export default function Sponsors(props) {
    const dark = props.dark
    return <div className={(dark ? styles.dark : styles.light)}>
        <NextSeo title="Sponsors | Juice 16236" />
        <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <NavBar dark={dark} page="outreach" />
        <main className={styles.main}>
            <h1>OUTREACH</h1>
            <p>We like to give back to the community in any way!</p>
            <OutreachBlock
                side="LEFT"
                title="FTC for VS Code"
                description="FTC coding requires an IDE made for app development, typically Android Studio. However, Android Studio is heavy, hard to run, and not very user-friendly. With 175+ downloads and growing daily, our goal is to fix all of that!"
                visual={{type: "IMAGE", path: "/public/assets/ftc-for-vscode.png"}}
                callToAction={{
                    type: "LINK_BUTTON",
                    href: "https://youtube.com",
                    text: "yt"
                }}
            />
        </main>
        <Footer dark={dark} />
    </div>
}
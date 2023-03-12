import Head from 'next/head'
import styles from '../styles/About.module.css'
import { NextSeo } from 'next-seo';
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import MemberBlock from '../components/MemberBlock';

export default function About(props) {
    const dark = props.dark
    return <div className={(dark ? styles.dark : styles.light)}>
        <NextSeo title="About | Juice 16236" />
        <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <NavBar dark={dark} page="about" />

        <main className={styles.main}>
            <section className={styles.aboutTeam}>
                <h1>About <span>Team Juice</span></h1>
                <div className={styles.aboutRow}>
                    <div className={styles.picColumn}>
                        <picture>
                            <source
                                srcSet={require("../public/assets/team/team_2022.png?webp")}
                                type="image/webp"
                                // width="181"
                                alt="Team Juice (2022)"
                            />
                            <img src={"/assets/team/team_2022.png"} alt="Juice 16236 Logo"></img>
                        </picture>
                    </div>
                    <div>
                        <p>Team Juice 16236 is a competitive robotics team in Folsom, CA. Founded in 2019, our team comprises of six high school students. Team Juice competes in the FIRST Tech Challenge (FTC), an international robotics competition open to grades 7-12. We are an official initiative under Silent Bot Deadly which is a 501(c)(3) Non-Profit.</p>

                        <h3 style={{ color: "#FF9626" }}>2022-23 SPONSORS</h3>
                        <div className={styles.sponsors}>
                            <a href="https://www.micron.com/" target="_blank" rel="noreferrer"><img alt="Micron Logo" src="https://media-www.micron.com/-/media/client/global/images/image-gallery/micron-logos/micron-logo_blue_rgb.png?mh=130&mw=215&rev=0b9311bd21024a0aa43d029537692066" /></a>
                            <a href="https://www.1517fund.com/" target="_blank" rel="noreferrer"><img alt="1517 Logo" src="https://uploads-ssl.webflow.com/5d9cd3e9b5891d594e90e914/5e25be0eacccd1fa2c17c8d2_1517%20Logo%20Cropped.png" /></a>
                            <a href="https://www.acec-ca.org/" target="_blank" rel="noreferrer"><img alt="ACEC California Logo" src="https://cdn.ymaws.com/acec-ca.site-ym.com/graphics/logo.png" /></a>
                            <a href="http://sacedm.com/" target="_blank" rel="noreferrer"><img alt="Sac EDM & Waterjet, Inc. Logo" src="https://image4.owler.com/logo/sac-edm---waterjet_owler_20220118_141150_original.png" /></a>
                            <a href="http://www.inductiveautomation.com/" target="_blank" rel="noreferrer"><img alt="Inductive Automation Logo" src="https://inductiveautomation.com/static/images/logos/inductive-automation-logo.png" /></a>
                            <a href="http://www.powdercraftofrocklin.com/" target="_blank" rel="noreferrer"><img alt="Powdercraft of Rocklin Logo" src="/assets/powder-craft-logo.png"/></a>
                            <a href="https://cncmadness.com/" target="_blank" rel="noreferrer"><img alt="CNC Madness Logo" src="/assets/cnc-madness.png" /></a>
                            {/* <picture>
                                <source
                                    srcSet={require("../public/assets/Silent Bot Deadly.png?webp")}
                                    type="image/webp"
                                    // width="181"
                                    alt="Team Juice (2022)"
                                />
                                <img src={"/assets/Silent Bot Deadly.png"} alt="Juice 16236 Logo"></img>
                            </picture> */}
                        </div>
                    </div>
                </div>
            </section>


            <section className={styles.aboutFTCGame}>
                <div className={styles.titleGameBanner}>
                    <div className={styles.bgImg}></div>
                    <h1>About <span>FTC</span> and the <span>Game</span></h1>
                </div>
                <p>FIRST Tech Challenge (FTC)  is a robotics competition for students in grades 7–12 to compete head to head, by designing, building, and programming a robot to compete in an alliance format against other teams. Last year, over 679,000 students from 110 countries competed in FTC. Teams design, program, and build a robot to compete in a field game while also promoting STEM within their community. They gain valuable experience using industry-standard tools such as Android Studio and Autodesk Inventor, which they can later apply in the engineering workforce.<br /><br /> From the machines that move us to the food that sustains us to the wireless technologies that connect us, energy plays an essential role in keeping our world running. During our 2022-2023 robotics season, FIRST® ENERGIZE℠ presented by Qualcomm, FIRST teams across our programs will reimagine the future of sustainable energy and power their ideas forward.</p>
            </section>

            <section>
                <h1>Meet the <span>Team</span></h1>
                <MemberBlock side="LEFT" name="Hunter" title="Team Captain" headshot="\assets\team\hunter.jpg" description="Hunter is a freshmen at Folsom High. This year is his 2nd year on Team Juice and in FTC. He looks forward to applying mechanical concepts and math to design intuitive components that will tackle this year's challenge. This is also his first year of being on the software team and learning all about programming in FTC. Outside of robotics, he likes to play tennis and learn about rockets." />
                <MemberBlock side="RIGHT" name="Spandhana" title="Team Vice Captain" headshot="\assets\team\ana.jpg" description="Hi, my name is Spandhana I am the vice-captain of Juice meaning I help CAD, design, and manage the team. I attend Folsom High School as a sophomore and am a cross country runner. I work at my local animal shelter and rewatch Schitt's Creek in my free time. #INeedMoreJoos" />
                <MemberBlock side="LEFT" name="Siddharth" title="Lead Software Developer" headshot="\assets\team\best_jooser.jpg" description="Siddharth Ray is the Software Lead Developer on Juice and this is his second year being on Juice. He helps manage and develop the software that runs on our robot, as well as coding outreach projects and help manage financials. He attends Vista del Lago High School as a freshman. Outside of Team Juice, Siddharth Ray is the founder and CEO of DJFlame, captain of the Vista del Lago Solar Car Racing Team, and is a film-maker." headshotOptions={{}} />
                <MemberBlock side="RIGHT" name="Anya" title="Hardware Member" headshot="\assets\team\anya.jpg" description="Anya is part of the hardware team on Team Juice. Currently, she is a freshman attending Vista del Lago High School. In her free time, she enjoys singing, reading, and cooking. She loves public speaking and participates in Speech and Debate and in Model UN. She also loves to travel and hopes to visit 50 countries in her lifetime." />
                <MemberBlock side="LEFT" name="Ahana" title="Software Member" headshot="\assets\team\ahana.jpg" description="Ahana Raghavan is in 9th grade at Vista Del Lago High School.  Ahana is a member of the software team on Team Juice and she wants to take up coding (as it piques her interest). Reading about the future of genomics and neuroscience and writing about it is one of her favorite things to do. Ahana finds joy in learning about and contributing to her culture by interning at an entrepreneurial venture aimed at keeping traditional roots alive. She creates podcasts to help people of all ages explore their traditions and values. Participating in debate tournaments is one of her deepest passions and it lets her channel her passion for research." />
                <MemberBlock side="RIGHT" name="Aditya" title="Hardware Member" headshot="\assets\team\aditya.jpg" description="Aditya Rajeev is a 9th grader at Vista Del Lago High School. Aditya is a member of the hardware team on Team Juice. Reading and studying chemistry is one of the things he likes to do. He also enjoys performing in classical arts, like Indian vocal, Violin, and Drums. Participating in Math and Science tournaments is one of his deepest passions and allows him to focus in on the academic aspect." />
                {/* <MemberBlock side="LEFT" name="Sanjitha" title="Hardware Member" headshot="\assets\team\aditya.jpg" description="Aditya Rajeev is a 9th grader at Vista Del Lago High School. Aditya is a member of the hardware team on Team Juice. Reading and studying chemistry is one of the things he likes to do. He also enjoys performing in classical arts, like Indian vocal, Violin, and Drums. Participating in Math and Science tournaments is one of his deepest passions and allows him to focus in on the academic aspect."/> */}
            </section>

        </main>

        <Footer dark={dark} />
    </div>
}
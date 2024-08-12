import Head from 'next/head'
import styles from '../styles/About.module.css'
import { NextSeo } from 'next-seo';
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import MemberBlock from '../components/MemberBlock';
import sponsors from '../data/sponsors.json'

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
                                srcSet={require("../public/assets/team/team_2024.jpg?webp")}
                                type="image/webp"
                                // width="181"
                                alt="Team Juice (2022)"
                            />
                            <img src={"/assets/team/team_2024.jpg"} alt="Team Juice (2022)"></img>
                        </picture>
                    </div>
                    <div>
                        <p>Team Juice 16236 is a competitive robotics team in Folsom, CA. Founded in 2019, our team comprises of eight high school and middle school students. Team Juice competes in the FIRST Tech Challenge (FTC), an international robotics competition open to grades 7-12. We are an official initiative under Silent Bot Deadly which is a 501(c)(3) Non-Profit.</p>

                        <h3 style={{ color: "#FF9626" }}>2023-24 SPONSORS</h3>
                        {/* <div className={styles.sponsors}>
                            <a href="https://www.micron.com/" target="_blank" rel="noreferrer"><img alt="Micron Logo" src="https://media-www.micron.com/-/media/client/global/images/image-gallery/micron-logos/micron-logo_blue_rgb.png?mh=130&mw=215&rev=0b9311bd21024a0aa43d029537692066" /></a>
                            <a href="https://www.1517fund.com/" target="_blank" rel="noreferrer"><img alt="1517 Logo" src="https://uploads-ssl.webflow.com/5d9cd3e9b5891d594e90e914/5e25be0eacccd1fa2c17c8d2_1517%20Logo%20Cropped.png" /></a>
                            <a href="https://www.acec-ca.org/" target="_blank" rel="noreferrer"><img alt="ACEC California Logo" src="https://cdn.ymaws.com/acec-ca.site-ym.com/graphics/logo.png" /></a>
                            <a href="http://sacedm.com/" target="_blank" rel="noreferrer"><img alt="Sac EDM & Waterjet, Inc. Logo" src="https://image4.owler.com/logo/sac-edm---waterjet_owler_20220118_141150_original.png" /></a>
                            <a href="http://www.inductiveautomation.com/" target="_blank" rel="noreferrer"><img alt="Inductive Automation Logo" src="https://inductiveautomation.com/static/images/logos/inductive-automation-logo.png" /></a>
                            <a href="http://www.powdercraftofrocklin.com/" target="_blank" rel="noreferrer"><img alt="Powdercraft of Rocklin Logo" src="/assets/powder-craft-logo.png"/></a>
                            <a href="https://cncmadness.com/" target="_blank" rel="noreferrer"><img alt="CNC Madness Logo" src="/assets/cnc-madness.png" /></a>
                        </div> */}
                        <div className={styles.sponsors}>
                        {sponsors.map(sponsor => (
                <a href={sponsor.website} target="_blank" key={sponsors.findIndex(x => {x.website == sponsor.website}).toString()} rel="noreferrer"><img alt={sponsor.name + " Logo"} src={sponsor.logo} className={sponsor.imgClass == "grayscaleSponsor" ? styles.grayscaleSponsor : ""}/></a>
              ))}
            </div>
                    </div>
                </div>
            </section>


            <section className={styles.aboutFTCGame}>
                <div className={styles.titleGameBanner}>
                    <div className={styles.bgImg}></div>
                    <h1>About <span>FTC</span> and the <span>Game</span></h1>
                </div>
                <p>
                    <i>FIRST</i>® Tech Challenge (FTC)  is a robotics competition for students in grades 7–12 to compete head to head, by designing, building, and programming a 
                    robot to compete in an alliance format against other teams. Last year, over 679,000 students from 110 countries competed in FTC. Teams design, program, 
                    and build a robot to compete in a field game while also promoting STEM within their community. They gain valuable experience using industry-standard tools 
                    such as Android Studio and Autodesk Inventor, which they can later apply in the engineering workforce. 
                    <a href="https://firstinspires.org/" target="_blank" rel="noreferrer"> Learn more about <i>FIRST</i>® and FTC here.</a>
                    <br /><br /> 
                    During the 2024-2025 <i>FIRST</i> season, <i>FIRST</i>® DIVE<sup>SM</sup> presented by Qualcomm, teams will use their STEM and collaboration skills to explore life beneath 
                    the surface of the ocean. In the INTO THE DEEP<sup>SM</sup> presented by RTX challenge, launching September 7, 2024, <i>FIRST</i> Tech Challenge teams will dive their robots 
                    into the depths of the ocean to explore the unknown and reveal its wonders. <a href="https://info.firstinspires.org/first-in-show" target="_blank" rel="noreferrer">Learn more about INTO THE DEEP<sup>SM</sup> and <i>FIRST</i>® DIVE<sup>SM</sup> here.</a></p>
            </section>

            <section>
                <h1>Meet the <span>Team</span></h1>
                <MemberBlock side="LEFT" name="Hunter" title="Team Captain" headshot="\assets\team\hunty.png" description="Hunter is a sophomore at Folsom High. This year is his 3rd year on Team Juice and in FTC. He looks forward to applying mechanical concepts and math to design intuitive components that will tackle this year's challenge. This is also his second year of being on the software team. Outside of robotics, he likes to play tennis and learn about rockets." />
                <MemberBlock side="RIGHT" name="Spandhana" title="Team Vice Captain" headshot="\assets\team\ana.jpg" description="Spandhana is vice-captain and a hardware member of Juice. She looks forward to designing a cool robot for every game and loves building the robot while actively fixing problems and iterating as the season goes on. Outside of robotics, Spandhana runs cross country and volunteers at the local Sacramento animal shelter. #INeedMoreJoos" />
                <MemberBlock side="LEFT" name="Siddharth" title="Lead Software Developer" headshot="\assets\team\sid2.jpg" description="Siddharth Ray is the Software Lead Developer on Juice and this is his third year being on Juice. He helps manage and develop the software that runs on our robot, as well as coding outreach projects and help manage financials. He attends Vista del Lago High School as a sophomore. Outside of Team Juice, Siddharth Ray is the founder and CEO of DJFlame, captain of the Vista Solar Car Racing Team, and is a film-maker." headshotOptions={{}} />
                <MemberBlock side="RIGHT" name="Anya" title="Outreach Lead" headshot="\assets\team\anya2.png" description="Anya is part of the hardware team on Team Juice. Currently, she is a sophomore attending Vista del Lago High School. In her free time, she enjoys singing, reading, and cooking. She loves public speaking and participates in Speech and Debate and in Model UN. She also loves to travel and hopes to visit 50 countries in her lifetime." />
                <MemberBlock side="LEFT" name="Aditya" title="Hardware Member" headshot="\assets\team\aditya.jpg" description="Aditya Rajeev is a 10th grader at Vista Del Lago High School. Aditya is a member of the hardware team on Team Juice. Reading and studying chemistry is one of the things he likes to do. He also enjoys performing in classical arts, like Indian vocal, Violin, and Drums. Participating in Math and Science tournaments is one of his deepest passions and allows him to focus in on the academic aspect." />
                <MemberBlock side="RIGHT" name="Edem" title="Hardware Member" headshot="\assets\team\edem.jpg" description="Edem is entering 8th grade in Sutter Middle School. This will be his first year on the team as a hardware member. Outside if robotics, he does Speech and Debate, and loves to play instruments like the trombone and piano."/>
                <MemberBlock side="LEFT" name="Zhiming" title="Software Member" headshot="\assets\team\zhiming.png" description="Zhiming Qi is in her first year at Juice, where she is a member of the software programming team. She is looking forward to using her mathematical knowledge for practical use in robotics. Besides FTC, she enjoys competing in CyberPatriot tournaments, as well as playing tennis and performing violin. She is a freshman at Folsom High School."/>
                <MemberBlock side="RIGHT" name="Shyam" title="Hardware Member" headshot="\assets\team\shyam.jpg" description="Shyam is a member of the hardware team on Juice and specializes in CAD. As a Junior at Folsom High, this will be his third year competing in FTC. Each year, he looks forward to applying his skills to create innovative solutions to a new challenge. Outside of robotics, he enjoys playing the drums, snowboarding, and training for his private pilot license."/>
                <MemberBlock side="LEFT" name="Justin" title="Software Member" headshot="\assets\team\justin.jpg" description="As a sophomore in high school, Justin is starting his first year as a part of Team Juice. He hopes to use his math and coding skills well and additionally having a good experience with the rest of the team. He also enjoys playing tennis and locally volunteering with his friends in his free time"/>
                <MemberBlock side="RIGHT" name="Sanjoli" title="Outreach Member" headshot="\assets\team\sanjoli.png" description="Sanjoli Ray is an 8th grader at Sutter Middle School. She is attending her first year at Juice’s outreach program, where she will help promote STEM education in the community. Sanjoli is also passionate about singing and music, having been in choir for 5 years. Sanjoli is excited to aim inspiring others to join robotics."/>
            </section>

        </main>

        <Footer dark={dark} />
    </div>
}
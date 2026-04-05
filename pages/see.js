import Head from 'next/head'
import Footer from '../components/Footer'
import styles from '../styles/About.module.css'
import { NextSeo } from 'next-seo';
import NavBar from '../components/Navbar'
import StatsCard from '../components/StatsCard';
import { useState } from "react";
import TimelineCard from '../components/TimelineCard';
import TimelinePopup from '../components/TimelinePopup';

export default function SEE(props) {
    const Bold = ({ children }) => (
    <strong style={{ color: "orange", fontWeight: "bold" }}>
        {children}
    </strong>
);
    const StatBox = ({ children }) => (
    <div style={{
        border: "2px solid orange",
        borderRadius: "10px",
        padding: "10px",
        minWidth: "100px",
        boxShadow: "0 0 12px rgba(255,165,0,0.4)"
    }}>
        {children}
    </div>
);
    const dark = props.dark
    const [active, setActive] = useState(null);

    return (
        <div className={dark ? styles.dark : styles.light}>
            <NextSeo title="S.E.E. | Juice 16236" />
            <NavBar dark={dark} page="S.E.E." />

            <main> 
                <h1 style={{ textAlign: "center", color: "orange", fontSize: "42px" }}>
                    Support for <span>Equal Experience</span>
                </h1>

                <div
                    style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        marginTop: '20px',
                        marginBottom: '60px',
                        textAlign: 'center',
                        fontSize: '18px',
                        lineHeight: '1.6'
                    }}
                >
                    <p>
                        This year, Team Juice 16236 founded a program called <Bold>S.E.E., Support for Equal Experience</Bold>, with the goal of creating an <Bold>equal opportunity and experience for all</Bold>. Throughout the season, we have been working with our <Bold>local mobility specialists</Bold> to create items that can not only make the daily lives of the visually impaired easier, but also <Bold>bring joy</Bold>.
                    </p>
                </div>

                {/* Timeline Section */}
                <section style={{ width: "90%", margin: "80px auto", color: "white" }}>
                <h2 style={{ textAlign: "center", color: "orange", fontSize: "30px" }}>
                    Timeline
                </h2>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start"
                        }}
                    >
                        {/* ITEM 1 */}
                        <div onClick={() => setActive(1)} style={{ width: "200px", textAlign: "center", cursor: "pointer" }}>
                            <h4 style={{ marginBottom: "5px", opacity: 0.7 }}>PAST</h4>
                            <p style={{ fontSize: active === 1 ? "18px" : "14px" }}>Caneholders for the Visually Impaired</p>
                            <div style={{ height: "20px", width: "2px", background: "white", margin: "0 auto" }} />
                            <img src="/assets/caneholder.jpg" style={{ width: "70px", height: "70px", borderRadius: "50%", objectFit: "cover", border: "3px solid orange", margin: "10px auto" }} />
                            <div style={{ height: "20px", width: "2px", background: "white", margin: "0 auto" }} />
                            <p style={{ fontSize: active === 1 ? "18px" : "14px" }}>
                                {active === 1
                                    ? <>In our local special education classrooms, we noticed a recurring problem: visually impaired students had no dedicated place to store their canes, forcing them to lean their canes against their desks where they fall and create a distraction. After seeing this problem recur over and over again, our outreach and hardware subdivisions <Bold>collectively came together</Bold>, exchanged ideas, and created a solution to this problem. We <Bold>designed</Bold> and <Bold>3D printed cane holders</Bold> that could easily be attached to students’ desks, <Bold>creating a designated storage place</Bold> for canes when they are not in use.</>
                                    : "3D Printed Solution"}
                            </p>
                        </div>

                        {/* ITEM 2 */}
                        <div onClick={() => setActive(2)} style={{ width: "200px", textAlign: "center", cursor: "pointer" }}>
                            <h4 style={{ marginBottom: "5px", opacity: 0.7 }}>PAST</h4>
                            <p style={{ fontSize: active === 2 ? "18px" : "14px" }}>Tic-Tac-Toe</p>
                            <div style={{ height: "20px", width: "2px", background: "white", margin: "0 auto" }} />
                            <img src="/assets/tictactoe.jpg" style={{ width: "70px", height: "70px", borderRadius: "50%", objectFit: "cover", border: "3px solid orange", margin: "10px auto" }} />
                            <div style={{ height: "20px", width: "2px", background: "white", margin: "0 auto" }} />
                            <p style={{ fontSize: active === 2 ? "18px" : "14px" }}>
                                {active === 2
                                    ? <>We also noticed that many of these visually impaired students <Bold>didn’t have access to inclusive games</Bold>. For kids, games are the biggest form of joy, learning, and connection. However, when game pieces are indistinguishable by touch and boards lack the tactile landmarks necessary for kids to determine where they are in the game, it turns joy into frustration. This is why we created an <Bold>inclusive 3D-printed Tic-Tac-Toe with braille inscriptions</Bold> on each grid, allowing students to know exactly where they are on the board. This simple yet innovative solution enables visually impaired kids <Bold>to more easily create social connections</Bold> and <Bold>learn about game strategy</Bold>. </>
                                    : "Visual Accessibility"}
                            </p>
                        </div>

                        {/* ITEM 3 */}
                        <div onClick={() => setActive(3)} style={{ width: "200px", textAlign: "center", cursor: "pointer" }}>
                            <h4 style={{ marginBottom: "5px", opacity: 0.7 }}>PAST</h4>
                            <p style={{ fontSize: active === 3 ? "18px" : "14px" }}>Fusion</p>
                            <div style={{ height: "20px", width: "2px", background: "white", margin: "0 auto" }} />
                            <img src="/assets/fusion2.jpg" style={{ width: "70px", height: "70px", borderRadius: "50%", objectFit: "cover", border: "3px solid orange", margin: "10px auto" }} />
                            <div style={{ height: "20px", width: "2px", background: "white", margin: "0 auto" }} />
                            <p style={{ fontSize: active === 3 ? "18px" : "14px" }}>
                                {active === 3
                                    ? <>Previously, there was <Bold>no braille font</Bold> in Fusion that <Bold>met the mandated 1:1 ratio</Bold>. We worked extensively to create braille-inscribed Tic-Tac-Toe boards that <Bold>met the standard braille specifications</Bold> and eventually had this <Bold>implementation shared to all Fusion users</Bold>.</>
                                    : "Braille Inscription"}
                            </p>
                        </div>

                        {/* ITEM 4 */}
                        <div onClick={() => setActive(4)} style={{ width: "200px", textAlign: "center", cursor: "pointer" }}>
                            <h4 style={{ marginBottom: "5px", opacity: 0.7 }}>PRESENT</h4>
                            <p style={{ fontSize: active === 4 ? "18px" : "14px" }}>CTEBVI conference: 4/26</p>
                            <div style={{ height: "20px", width: "2px", background: "white", margin: "0 auto" }} />
                            <img src="/assets/conference.jpg" style={{ width: "70px", height: "70px", borderRadius: "50%", objectFit: "cover", border: "3px solid orange", margin: "10px auto" }} />
                            <div style={{ height: "20px", width: "2px", background: "white", margin: "0 auto" }} />
                            <p style={{ fontSize: active === 4 ? "18px" : "14px" }}>
                                {active === 4
                                    ? <>Distributed over <Bold>200+ STL files</Bold> of our Tic-Tac-Toe boards to the <Bold>CTEBVI Conference for the visually impaired</Bold>, allowing our work to be <Bold>accessible for all</Bold>.</>
                                    : "200+ Files Shared"}
                            </p>
                        </div>

                        {/* ITEM 5 */}
                        <div onClick={() => setActive(5)} style={{ width: "200px", textAlign: "center", cursor: "pointer" }}>
                            <h4 style={{ marginBottom: "5px", opacity: 0.7 }}>PRESENT</h4>
                            <p style={{ fontSize: active === 5 ? "18px" : "14px" }}>Wheelchair Guard for Disabled</p>
                            <div style={{ height: "20px", width: "2px", background: "white", margin: "0 auto" }} />
                            <img src="/assets/sideguard.jpg" style={{ width: "70px", height: "70px", borderRadius: "50%", objectFit: "cover", border: "3px solid orange", margin: "10px auto" }} />
                            <div style={{ height: "20px", width: "2px", background: "white", margin: "0 auto" }} />
                            <p style={{ fontSize: active === 5 ? "18px" : "14px" }}>
                                {active === 5
                                    ? <>We are currently working with a <Bold>physical therapist in the Folsom School District</Bold> to design a <Bold>guard</Bold> to prevent students’ hands from being stuck in the carriage of their wheelchair.</>
                                    : "Design with Physical Therapist"}
                            </p>
                        </div>

                        {/* ITEM 6 */}
                        <div onClick={() => setActive(6)} style={{ width: "200px", textAlign: "center", cursor: "pointer" }}>
                            <h4 style={{ marginBottom: "5px", opacity: 0.7 }}>FUTURE</h4>
                            <p style={{ fontSize: active === 6 ? "18px" : "14px" }}>Expanding Program to Help Elderly</p>
                            <div style={{ height: "20px", width: "2px", background: "white", margin: "0 auto" }} />
                            <img src="/assets/survey.jpg" style={{ width: "70px", height: "70px", borderRadius: "50%", objectFit: "cover", border: "3px solid orange", margin: "10px auto" }} />
                            <div style={{ height: "20px", width: "2px", background: "white", margin: "0 auto" }} />
                            <p style={{ fontSize: active === 6 ? "18px" : "14px" }}>
                                {active === 6
                                    ? <>We are currently working to <Bold>expand S.E.E.</Bold> to help solve <Bold>mobility issues elderly may have</Bold>. By reaching out to local senior homes, we identify common difficulties residents encounter, and come together as a team to design innovative solutions.</>
                                    : "Solve Mobility Issues"}
                            </p>
                        </div>

                        {/* ITEM 7 */}
                        <div onClick={() => setActive(7)} style={{ width: "200px", textAlign: "center", cursor: "pointer" }}>
                            <h4 style={{ marginBottom: "5px", opacity: 0.7 }}>FUTURE</h4>
                            <p style={{ fontSize: active === 7 ? "18px" : "14px" }}>Broadening our Program</p>
                            <div style={{ height: "20px", width: "2px", background: "white", margin: "0 auto" }} />
                            <img src="/assets/earth.jpg" style={{ width: "70px", height: "70px", borderRadius: "50%", objectFit: "cover", border: "3px solid orange", margin: "10px auto" }} />
                            <div style={{ height: "20px", width: "2px", background: "white", margin: "0 auto" }} />
                            <p style={{ fontSize: active === 7 ? "18px" : "14px" }}>
                                {active === 7
                                    ? <>We see ourselves turning S.E.E. into a <Bold>collaborative program between teams</Bold> from all over the country working to ensure equal experience for everyone.</>
                                    : "Collaboration with Others"}
                            </p>
                        </div>
                    </div>
                    {/*<div style={{ height: "4px", background: "white", marginTop: "30px" }} />*/}
                </section>

                {/* === POPUPS === */}
                {active !== null && (
                    <div onClick={() => setActive(null)} style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0,0,0,0.7)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1000,
                        padding: "20px",
                    }}>
                        <div onClick={(e) => e.stopPropagation()} style={{
                            background: "#111",
                            color: "white",
                            padding: "30px",
                            borderRadius: "15px",
                            maxWidth: "700px",
                            width: "85%",
                            maxHeight: "80vh",
                            display: "flex",
                            flexDirection: "column",
                            overflowY: "auto",
                            position: "relative",
                            lineHeight: "1.6",
                            boxSizing: "border-box",
                        }}>
                            <div onClick={() => setActive(null)} style={{
                                position: "absolute",
                                top: "10px",
                                right: "20px",
                                cursor: "pointer",
                                fontSize: "20px"
                            }}>✕</div>

                            {active === 1 && <TimelinePopup item={{
                                period: "Past",
                                title: "Cane Holders",
                                img: "/assets/caneholder.jpg",
                                fullDesc: ( <>In our local special education classrooms, we noticed a recurring problem: visually impaired students had no dedicated place to store their canes, forcing them to lean their canes against their desks where they fall and create a distraction. After seeing this problem recur over and over again, our outreach and hardware subdivisions <Bold>collectively came together</Bold>, exchanged ideas, and created a solution to this problem. We <Bold>designed</Bold> and <Bold>3D printed cane holders</Bold> that could easily be attached to students’ desks, <Bold>creating a designated storage place</Bold> for canes when they are not in use.</>)
                            }} />}
                            {active === 2 && <TimelinePopup item={{
                                period: "Past",
                                title: "Braille Tic-Tac-Toe",
                                img: "/assets/tictactoe.jpg",
                                fullDesc: ( <>We also noticed that many of these visually impaired students <Bold>didn’t have access to inclusive games</Bold>. For kids, games are the biggest form of joy, learning, and connection. However, when game pieces are indistinguishable by touch and boards lack the tactile landmarks necessary for kids to determine where they are in the game, it turns joy into frustration. This is why we created an <Bold>inclusive 3D-printed Tic-Tac-Toe with braille inscriptions</Bold> on each grid, allowing students to know exactly where they are on the board. This simple yet innovative solution enables visually impaired kids <Bold>to more easily create social connections</Bold> and <Bold>learn about game strategy</Bold>. </>)
                            }} />}
                            {active === 3 && <TimelinePopup item={{
                                period: "Past",
                                title: "Fusion",
                                img: "/assets/fusion.jpg",
                                fullDesc: ( <>Previously, there was <Bold>no braille font</Bold> in Fusion that <Bold>met the mandated 1:1 ratio</Bold>. We worked extensively to create braille-inscribed Tic-Tac-Toe boards that <Bold>met the standard braille specifications</Bold> and eventually had this <Bold>implementation shared to all Fusion users</Bold>.</>)
                            }} />}
                            {active === 4 && <TimelinePopup item={{
                                period: "Present",
                                title: "Conference",
                                img: "/assets/conference2.jpg",
                                fullDesc: ( <>Distributed over <Bold>200+ STL files</Bold> of our Tic-Tac-Toe boards to the <Bold>CTEBVI Conference for the visually impaired</Bold>, allowing our work to be <Bold>accessible for all</Bold>.</>)
                            }} />}
                            {active === 5 && <TimelinePopup item={{
                                period: "Present",
                                title: "Wheelchair Guard for Disabled",
                                img: "/assets/sideguard.jpg",
                                fullDesc: ( <>We are currently working with a <Bold>physical therapist in the Folsom School District</Bold> to design a <Bold>guard</Bold> to prevent students’ hands from being stuck in the carriage of their wheelchair.</>)
                            }} />}
                            {active === 6 && <TimelinePopup item={{
                                period: "Future",
                                title: "Expanding Program to Help Elderly",
                                img: "/assets/mobility.jpg",
                                fullDesc: ( <>We are currently working to <Bold>expand S.E.E.</Bold> to help solve <Bold>mobility issues elderly may have</Bold>. By reaching out to local senior homes, we identify common difficulties residents encounter, and come together as a team to design innovative solutions.</>)
                            }} />}
                            {active === 7 && <TimelinePopup item={{
                                period: "Future",
                                title: "Broadening our Program",
                                img: "/assets/twobots.jpg",
                                fullDesc: ( <>We see ourselves turning S.E.E. into a <Bold>collaborative program between teams</Bold> from all over the country working to ensure equal experience for everyone.</> )
                            }} />}
                        </div>
                    </div>
                )}

                {/* === STL DOWNLOAD SECTION === */}
                <section style={{
                    maxWidth: "800px",
                    margin: "40px auto",
                    fontSize: "18px",
                    lineHeight: "1.6",
                    color: "white",
                    textAlign: "center",
                    padding: "0 20px"
                }}>
                <h2 style={{ color: "orange", fontSize: "28px" }}>
                    Download Our 3D Designs (STL Files)
                </h2>
                    <p>
                        You can download the STL files for our S.E.E. projects to 3D print and use them in your classrooms, homes, or programs.
                    </p>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        <li><a href="/stl/Top layer.stl" download style={{ color: "orange", textDecoration: "underline" }}>Top Layer STL</a></li>
                        <li><a href="/stl/X4board.stl" download style={{ color: "orange", textDecoration: "underline" }}>X4 Board STL</a></li>
                        <li><a href="/stl/O4board.stl" download style={{ color: "orange", textDecoration: "underline" }}>O4 Board STL</a></li>
                    </ul>
                </section>

                {/* STATS SECTION */}
                <section className={styles.statsSection + " selectContrast"} style={{ color: 'orange', textAlign: 'center' }}>
                    <h2 style={{ color: "orange", fontSize: "28px" }}>
                        S.E.E. Stats
                    </h2>
                    <div className={styles.statsSectionStats} style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', marginTop: '30px' }}>
                        <StatBox>
                            <StatsCard number={10} suffix="+" description="special ed. classes" dark />
                        </StatBox>
                        <StatBox>
                            <StatsCard number={1000} suffix="+" description="impacted on Fusion" dark />
                        </StatBox>
                        <StatBox>
                            <StatsCard number={500} suffix="+" description="attending the conference" dark />
                        </StatBox>
                    </div>
                </section>
                {/* === CLOSING PARAGRAPH === */}
<                section style={{
                    maxWidth: "800px",
                    margin: "40px auto",
                    fontSize: "18px",
                    lineHeight: "1.6",
                    color: dark ? "white" : "black",
                    textAlign: "center",
                    padding: "0 20px"
                }}>
                <p>
                    Because of our <Bold>creative</Bold> and <Bold>accessible</Bold> solutions, we have been able to <Bold>bridge the accessibility gap</Bold> in our local classrooms. As we gather feedback from students and teachers, we are <Bold>actively refining</Bold> our designs and exploring ways to <Bold>expand our program.</Bold>
                </p>
                </section>
            </main>
            <Footer dark={dark} />
        </div>
    )
}
//notes to self add boxes around stats, fix timeline pictures
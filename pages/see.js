import Head from 'next/head'
import Footer from '../components/Footer'
import styles from '../styles/About.module.css'
import { NextSeo } from 'next-seo';
import NavBar from '../components/Navbar'
import StatsCard from '../components/StatsCard';
import { useState } from "react";
import TimelinePopup from '../components/TimelinePopup';
import CountUp from 'react-countup';

export default function SEE(props) {
    const dark = props.dark;
    const [active, setActive] = useState(null);

    const Bold = ({ children }) => (
        <strong style={{ color: "#FF9626", fontWeight: "bold" }}>
            {children}
        </strong>
    );

    const timelineData = [
        {
            id: 1,
            phase: "PAST",
            title: "Caneholders for the Visually Impaired",
            short: "3D Printed Solution",
            img: "/assets/caneholder.jpg",
            desc: <>In our local special education classrooms, we noticed a recurring problem: visually impaired students had no dedicated place to store their canes, forcing them to lean their canes against their desks where they fall and create a distraction. After seeing this problem recur over and over again, our outreach and hardware subdivisions <Bold>collectively came together</Bold>, exchanged ideas, and created a solution to this problem. We <Bold>designed</Bold> and <Bold>3D printed cane holders</Bold> that could easily be attached to students' desks, <Bold>creating a designated storage place</Bold> for canes when they are not in use.</>
        },
        {
            id: 2,
            phase: "PAST",
            title: "Tic-Tac-Toe",
            short: "Visual Accessibility",
            img: "/assets/tictactoe.jpg",
            desc: <>We also noticed that many of these visually impaired students <Bold>didn't have access to inclusive games</Bold>. For kids, games are the biggest form of joy, learning, and connection. However, when game pieces are indistinguishable by touch and boards lack the tactile landmarks necessary for kids to determine where they are in the game, it turns joy into frustration. This is why we created an <Bold>inclusive 3D-printed Tic-Tac-Toe with braille inscriptions</Bold> on each grid, allowing students to know exactly where they are on the board. This simple yet innovative solution enables visually impaired kids <Bold>to more easily create social connections</Bold> and <Bold>learn about game strategy</Bold>.</>
        },
        {
            id: 3,
            phase: "PAST",
            title: "Fusion",
            short: "Braille Inscription",
            img: "/assets/fusion2.jpg",
            desc: <>Previously, there was <Bold>no braille font</Bold> in Fusion that <Bold>met the mandated 1:1 ratio</Bold>. We worked extensively to create braille-inscribed Tic-Tac-Toe boards that <Bold>met the standard braille specifications</Bold> and eventually had this <Bold>implementation shared to all Fusion users</Bold>.</>
        },
        {
            id: 4,
            phase: "PRESENT",
            title: "CTEBVI Conference: 4/26",
            short: "200+ Files Shared",
            img: "/assets/conference.jpg",
            desc: <>Distributed over <Bold>200+ STL files</Bold> of our Tic-Tac-Toe boards to the <Bold>CTEBVI Conference for the visually impaired</Bold>, allowing our work to be <Bold>accessible for all</Bold>.</>
        },
        {
            id: 5,
            phase: "PRESENT",
            title: "Wheelchair Guard for Disabled",
            short: "Design with Physical Therapist",
            img: "/assets/sideguard.jpg",
            desc: <>We are currently working with a <Bold>physical therapist in the Folsom School District</Bold> to design a <Bold>guard</Bold> to prevent students' hands from being stuck in the carriage of their wheelchair.</>
        },
        {
            id: 6,
            phase: "FUTURE",
            title: "Expanding Program to Help Elderly",
            short: "Solve Mobility Issues",
            img: "/assets/survey.jpg",
            desc: <>We are currently working to <Bold>expand S.E.E.</Bold> to help solve <Bold>mobility issues elderly may have</Bold>. By reaching out to local senior homes, we identify common difficulties residents encounter, and come together as a team to design innovative solutions.</>
        },
        {
            id: 7,
            phase: "FUTURE",
            title: "Broadening our Program",
            short: "Collaboration with Others",
            img: "/assets/earth.jpg",
            desc: <>We see ourselves turning S.E.E. into a <Bold>collaborative program between teams</Bold> from all over the country working to ensure equal experience for everyone.</>
        }
    ];

    const activeItem = timelineData.find(item => item.id === active);
    const bgColor = dark ? "#080808" : "#f0f0f0";
    const textColor = dark ? "white" : "black";
    const cardBg = dark ? "linear-gradient(to left bottom, #000000, #020101, #050202, #070402, #080502, #0a0702, #0c0803, #0e0a03, #110c03, #140e02, #171002, #1a1102)" : "white";
    const cardBorder = dark ? "rgba(255, 153, 0, 0.171)" : "rgba(255, 153, 0, 0.35)";

    const phaseColors = {
        PAST: "rgba(255,150,38,0.45)",
        PRESENT: "#FF9626",
        FUTURE: "rgba(255,150,38,0.25)"
    };

    return (
        <div className={dark ? styles.dark : styles.light} style={{ backgroundColor: bgColor, color: textColor, minHeight: '100vh' }}>
            <NextSeo title="S.E.E. | Juice 16236" />
            <NavBar dark={dark} page="S.E.E." />

            <main className="see-main">

                {/* ── HERO ── */}
                <section className="hero-section">
                    <div className="dots-bg" />
                    <div className="hero-inner">
                        <p className="hero-eyebrow">Team Juice 16236</p>
                        <h1 className="hero-title">
                            Support for<br />
                            <span className="hero-accent">Equal Experience</span>
                        </h1>
                        <p className="hero-body">
                            This year, Team Juice 16236 founded <Bold>S.E.E.</Bold> — with the goal of creating an{' '}
                            <Bold>equal opportunity and experience for all</Bold>. Throughout the season, we have
                            been working with our <Bold>local mobility specialists</Bold> to create items that make
                            the daily lives of the visually impaired easier, and <Bold>bring joy</Bold>.
                        </p>
                    </div>
                </section>

                {/* ── STATS ── */}
                <section className="stats-section miniStats">
                    <div className="statsContainer">
                        {[
                            { number: 10, suffix: "+", description: "special ed. classes" },
                            { number: 1000, suffix: "+", description: "impacted on Fusion" },
                            { number: 500, suffix: "+", description: "attending the conference" },
                        ].map((stat, i) => (
                            <div key={i} className="statsCard">
                                <h3><CountUp
                                    end={stat.number}
                                    duration={1}
                                    separator=","
                                    enableScrollSpy={true}
                                    scrollSpyOnce={true}
                                />{stat.suffix}</h3>
                                <p style={{ color: textColor, opacity: 0.75, fontSize: "max(0.833vw, 15px)", position: "relative", zIndex: 1 }}>
                                    {stat.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── TIMELINE ── */}
                <section className="timeline-section">
                    <h2 className="section-heading">Our Timeline</h2>

                    {/* SVG rail — phase labels, line segments, dots, and stems all in one */}
                    <div className="timeline-rail-wrap">
                        <svg
                            viewBox="0 0 700 50"
                            preserveAspectRatio="none"
                            className="timeline-rail-svg"
                        >
                            {/* ── Phase labels ── */}
                            <text x="150" y="14" textAnchor="middle" fontSize="7" fontWeight="700" letterSpacing="2.5" fill={dark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.35)"} fontFamily="Poppins, sans-serif">PAST</text>
                            <text x="400" y="14" textAnchor="middle" fontSize="7" fontWeight="700" letterSpacing="2.5" fill="#FF9626" fontFamily="Poppins, sans-serif">PRESENT</text>
                            <text x="600" y="14" textAnchor="middle" fontSize="7" fontWeight="700" letterSpacing="2.5" fill={dark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.35)"} fontFamily="Poppins, sans-serif">FUTURE</text>

                            {/* ── Horizontal line segments ── */}
                            {/* Past: dashed gray, dot-to-dot from 50 to 300 */}
                            <line x1="50" y1="34" x2="300" y2="34"
                                stroke={dark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.18)"}
                                strokeWidth="1.5" strokeDasharray="5,4" strokeLinecap="round" />
                            {/* Present: solid orange, 300 to 500 */}
                            <line x1="300" y1="34" x2="500" y2="34"
                                stroke="#FF9626" strokeWidth="2" strokeLinecap="round" />
                            {/* Future: dashed gray, 500 to 650 */}
                            <line x1="500" y1="34" x2="650" y2="34"
                                stroke={dark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.18)"}
                                strokeWidth="1.5" strokeDasharray="5,4" strokeLinecap="round" />

                            {/* ── Dots on the line ── */}
                            {/* Past dots: hollow, gray border */}
                            {[50, 150, 250].map(x => (
                                <circle key={x} cx={x} cy="34" r="5.5"
                                    fill={bgColor}
                                    stroke={dark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.25)"}
                                    strokeWidth="1.5" />
                            ))}
                            {/* Present dots: filled orange, slightly larger with glow ring */}
                            {[350, 450].map(x => (
                                <g key={x}>
                                    <circle cx={x} cy="34" r="9"
                                        fill="rgba(255,150,38,0.15)" />
                                    <circle cx={x} cy="34" r="5.5"
                                        fill="#FF9626" />
                                </g>
                            ))}
                            {/* Future dots: hollow, dashed border (simulated with two circles) */}
                            {[550, 650].map(x => (
                                <circle key={x} cx={x} cy="34" r="5.5"
                                    fill={bgColor}
                                    stroke={dark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.18)"}
                                    strokeWidth="1.5" strokeDasharray="3,2" />
                            ))}

                            {/* ── Vertical stems down to cards ── */}
                            {[50, 150, 250].map(x => (
                                <line key={x} x1={x} y1="39" x2={x} y2="78"
                                    stroke={dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)"}
                                    strokeWidth="1" strokeDasharray="3,3" />
                            ))}
                            {[350, 450].map(x => (
                                <line key={x} x1={x} y1="39" x2={x} y2="78"
                                    stroke="rgba(255,150,38,0.4)"
                                    strokeWidth="1.5" />
                            ))}
                            {[550, 650].map(x => (
                                <line key={x} x1={x} y1="39" x2={x} y2="78"
                                    stroke={dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}
                                    strokeWidth="1" strokeDasharray="3,3" />
                            ))}
                        </svg>
                    </div>

                    {/* Cards */}
                    <div className="timeline-grid">
                        {timelineData.map((item) => (
                            <div
                                key={item.id}
                                className={`t-card t-card--${item.phase.toLowerCase()}`}
                                style={{
                                    background: cardBg,
                                    borderColor: active === item.id ? "#FF9626" : cardBorder,
                                    "--phase-color": phaseColors[item.phase]
                                }}
                                onClick={() => setActive(item.id)}
                            >
                                <div className="t-card-img-wrap">
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <h3 className="t-card-title">{item.title}</h3>
                                <p className="t-card-short">{item.short}</p>
                                <span className="t-card-cta">Read More →</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── POPUP ── */}
                {active !== null && activeItem && (
                    <div className="popup-overlay" onClick={() => setActive(null)}>
                        <div className="popup-box" onClick={(e) => e.stopPropagation()} style={{ backgroundColor: dark ? "#0e0a03" : "#fff", color: textColor, borderColor: "rgba(255,150,38,0.35)" }}>
                            <button className="popup-close" onClick={() => setActive(null)}>✕</button>
                            <TimelinePopup item={{
                                period: activeItem.phase,
                                title: activeItem.title,
                                img: activeItem.img,
                                fullDesc: activeItem.desc
                            }} />
                        </div>
                    </div>
                )}

                {/* ── DOWNLOADS ── */}
                <section className="download-section">
                    <h2 className="section-heading">Download Our 3D Designs</h2>
                    <p className="section-sub">
                        Download the STL files for our S.E.E. projects to 3D print and use them in
                        your classrooms, homes, or programs.
                    </p>
                    <div className="download-grid">
                        {[
                            { name: "Top Layer STL", file: "Top layer.stl" },
                            { name: "X4 Board STL", file: "X4board.stl" },
                            { name: "O4 Board STL", file: "O4board.stl" }
                        ].map((dl, i) => (
                            <a
                                key={i}
                                href={`/stl/${dl.file}`}
                                download
                                className="dl-card"
                                style={{ background: cardBg, borderColor: cardBorder, color: textColor }}
                            >
                                <div className="dl-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#FF9626" width="32" height="32">
                                        <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64v-32c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                                    </svg>
                                </div>
                                <h4 className="dl-name">{dl.name}</h4>
                                <span className="button" style={{ marginTop: "auto", width: "auto", padding: "10px 18px", fontSize: "13px" }}>
                                    Download
                                </span>
                            </a>
                        ))}
                    </div>
                </section>

                {/* ── CLOSING ── */}
                <section className="closing-section">
                    <div className="closing-inner" style={{ borderColor: cardBorder, background: cardBg }}>
                        <p>
                            Because of our <Bold>creative</Bold> and <Bold>accessible</Bold> solutions, we have been able to{' '}
                            <Bold>bridge the accessibility gap</Bold> in our local classrooms. As we gather feedback from
                            students and teachers, we are <Bold>actively refining</Bold> our designs and exploring ways to{' '}
                            <Bold>expand our program.</Bold>
                        </p>
                    </div>
                </section>

            </main>
            <Footer dark={dark} />

            <style jsx>{`
                /* ── Global page helpers ── */
                .see-main {
                    display: flex;
                    flex-direction: column;
                }

                /* ── Section headings ── */
                .section-heading {
                    font-size: max(1.667vw, 28px);
                    color: #FF9626;
                    text-align: center;
                    margin: 0 0 12px 0;
                    font-weight: 700;
                    letter-spacing: -0.5px;
                }
                .section-sub {
                    text-align: center;
                    max-width: 680px;
                    margin: 0 auto 40px;
                    font-size: max(0.833vw, 16px);
                    opacity: 0.75;
                    line-height: 1.6;
                }

                /* ── HERO ── */
                .hero-section {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 120px 40px 100px;
                    overflow: hidden;
                    text-align: center;
                }
                .dots-bg {
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(#ff962660 1px, transparent 1px);
                    background-size: 16px 16px;
                    -webkit-mask-image: radial-gradient(ellipse 60% 60% at 50% 50%, #000 55%, transparent 100%);
                    mask-image: radial-gradient(ellipse 60% 60% at 50% 50%, #000 55%, transparent 100%);
                }
                .hero-inner {
                    position: relative;
                    z-index: 1;
                    max-width: 820px;
                }
                .hero-eyebrow {
                    font-size: max(0.7vw, 13px);
                    letter-spacing: 4px;
                    text-transform: uppercase;
                    opacity: 0.5;
                    margin: 0 0 16px;
                    font-weight: 600;
                }
                .hero-title {
                    font-size: max(4vw, 52px);
                    font-weight: 700;
                    line-height: 1.1;
                    margin: 0 0 32px;
                }
                .hero-accent {
                    color: #FF9626;
                }
                .hero-body {
                    font-size: max(0.9vw, 17px);
                    line-height: 1.7;
                    opacity: 0.85;
                    max-width: 680px;
                    margin: 0 auto;
                }

                /* ── STATS ── */
                .stats-section {
                    padding: 0 20px 80px;
                }
                .statsContainer {
                    display: flex;
                    justify-content: center;
                    align-items: stretch;
                    gap: 3rem;
                    max-width: 1100px;
                    width: 100%;
                    margin: 0 auto;
                    flex-wrap: wrap;
                }
                .statsCard {
                    flex: 1 1 0;
                    min-width: 260px;
                    max-width: 340px;
                    padding: 28px 24px;
                    outline: 2px solid rgba(255, 153, 0, 0.171);
                    border-radius: 25px;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    transition: transform 250ms;
                    background: linear-gradient(to left bottom, #000000, #020101, #050202, #070402, #080502, #0a0702, #0c0803, #0e0a03, #110c03, #140e02, #171002, #1a1102);
                }
                .statsCard:hover {
                    transform: scale(1.05);
                }
                .statsCard h3 {
                    font-size: max(2.5vw, 54px);
                    color: #FF9626;
                    margin: 0;
                    font-style: italic;
                    font-weight: 800;
                    line-height: 1;
                    position: relative;
                    z-index: 1;
                }

                /* ── TIMELINE ── */
                .timeline-section {
                    width: 95%;
                    max-width: 1400px;
                    margin: 0 auto 80px;
                    padding: 0 10px;
                }
                /* The SVG rail spans full width and is non-interactive */
                .timeline-rail-wrap {
                    width: 100%;
                    margin-bottom: 0;
                    line-height: 0;
                }
                .timeline-rail-svg {
                    width: 100%;
                    height: auto;
                    /* 80 units tall in viewBox → scale proportionally */
                    display: block;
                    overflow: visible;
                }
                .timeline-grid {
                    display: grid;
                    grid-template-columns: repeat(7, 1fr);
                    gap: 14px;
                    /* No margin-top so cards sit right beneath the stems */
                }
                .t-card {
                    border: 1.5px solid;
                    border-radius: 20px;
                    padding: 16px 10px 18px;
                    text-align: center;
                    cursor: pointer;
                    transition: transform 300ms, box-shadow 300ms, border-color 300ms;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    overflow: hidden;
                    position: relative;
                }
                /* Top accent stripe coloured by phase */
                .t-card::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 3px;
                    background: var(--phase-color, rgba(255,150,38,0.3));
                    border-radius: 20px 20px 0 0;
                    opacity: 0.7;
                    transition: opacity 300ms;
                }
                .t-card:hover::before { opacity: 1; }
                .t-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 14px 30px rgba(255, 150, 38, 0.15);
                    border-color: #FF9626 !important;
                }
                .t-card-img-wrap {
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    border: 2px solid #FF9626;
                    overflow: hidden;
                    margin-bottom: 12px;
                    flex-shrink: 0;
                    background: #111;
                }
                .t-card--past .t-card-img-wrap   { border-color: rgba(255,150,38,0.45); }
                .t-card--future .t-card-img-wrap { border-color: rgba(255,150,38,0.25); }
                .t-card-img-wrap img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .t-card-title {
                    font-size: 12px;
                    font-weight: 600;
                    margin: 0 0 8px;
                    line-height: 1.35;
                    min-height: 32px;
                }
                .t-card-short {
                    font-size: 11px;
                    opacity: 0.5;
                    flex-grow: 1;
                    margin: 0 0 12px;
                    line-height: 1.4;
                }
                .t-card-cta {
                    font-size: 10px;
                    color: #FF9626;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                }

                /* ── POPUP ── */
                .popup-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.82);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                    padding: 20px;
                    backdrop-filter: blur(6px);
                }
                .popup-box {
                    padding: 36px 32px;
                    border-radius: 25px;
                    max-width: 700px;
                    width: 100%;
                    max-height: 85vh;
                    overflow-y: auto;
                    position: relative;
                    border: 1.5px solid;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.6);
                }
                .popup-close {
                    position: absolute;
                    top: 16px;
                    right: 20px;
                    cursor: pointer;
                    font-size: 22px;
                    font-weight: bold;
                    color: #FF9626;
                    background: none;
                    border: none;
                    padding: 0;
                    transition: transform 200ms;
                }
                .popup-close:hover { transform: scale(1.25); }

                /* ── DOWNLOADS ── */
                .download-section {
                    max-width: 1000px;
                    margin: 0 auto 80px;
                    padding: 0 20px;
                    text-align: center;
                }
                .download-grid {
                    display: flex;
                    justify-content: center;
                    gap: 24px;
                    flex-wrap: wrap;
                }
                .dl-card {
                    border: 1.5px solid;
                    border-radius: 25px;
                    padding: 30px 24px 24px;
                    width: 230px;
                    text-decoration: none;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 8px;
                    transition: transform 300ms, box-shadow 300ms, border-color 300ms;
                }
                .dl-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 14px 30px rgba(255, 150, 38, 0.2);
                    border-color: #FF9626 !important;
                }
                .dl-icon {
                    width: 56px;
                    height: 56px;
                    border-radius: 50%;
                    outline: 2px solid rgba(255, 153, 0, 0.25);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 6px;
                }
                .dl-name {
                    margin: 0;
                    font-size: max(0.833vw, 16px);
                    font-weight: 600;
                }

                /* ── CLOSING ── */
                .closing-section {
                    max-width: 860px;
                    margin: 0 auto 100px;
                    padding: 0 20px;
                }
                .closing-inner {
                    border: 1.5px solid;
                    border-radius: 25px;
                    padding: 36px 40px;
                    font-size: max(0.9vw, 17px);
                    line-height: 1.75;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }
                .closing-inner::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(#ff962618 1px, transparent 1px);
                    background-size: 16px 16px;
                    pointer-events: none;
                }

                /* ── RESPONSIVE ── */

                /* Tablet: 3-col grid, hide SVG rail, bump up card text */
                @media (max-width: 1100px) {
                    .timeline-grid { grid-template-columns: repeat(3, 1fr); gap: 12px; }
                    .timeline-rail-wrap { display: none; }
                    .t-card-title { font-size: 14px; min-height: auto; }
                    .t-card-short { font-size: 12px; }
                    .t-card-img-wrap { width: 60px; height: 60px; }
                }

                /* Mobile */
                @media (max-width: 668px) {
                    .hero-section { padding: 80px 20px 60px; }

                    /* Stats: kill min-width, force box-sizing so padding cant blow out */
                    .statsContainer {
                        flex-direction: column;
                        align-items: stretch;
                        gap: 1.25rem;
                        padding: 0 16px;
                    }
                    .statsCard {
                        flex: none;
                        width: 100%;
                        min-width: 0;
                        max-width: 100%;
                        box-sizing: border-box;
                    }

                    /* Timeline: single column, horizontal card layout */
                    .timeline-rail-wrap { display: none; }
                    .timeline-grid {
                        grid-template-columns: 1fr;
                        max-width: 100%;
                        margin: 0;
                        gap: 10px;
                    }
                    .t-card {
                        flex-direction: row;
                        text-align: left;
                        padding: 14px 16px;
                        align-items: center;
                        gap: 14px;
                    }
                    /* Flip the phase accent stripe from top to left side for row layout */
                    .t-card::before {
                        width: 3px;
                        height: 100%;
                        top: 0;
                        left: 0;
                        right: auto;
                        border-radius: 20px 0 0 20px;
                    }
                    .t-card-img-wrap {
                        width: 52px;
                        height: 52px;
                        margin-bottom: 0;
                        flex-shrink: 0;
                    }
                    .t-card-title {
                        font-size: 15px;
                        min-height: auto;
                        margin-bottom: 3px;
                    }
                    .t-card-short {
                        font-size: 13px;
                        flex-grow: 0;
                        margin-bottom: 0;
                        opacity: 0.6;
                    }
                    .t-card-cta { font-size: 12px; margin-top: 5px; }

                    /* Downloads */
                    .download-grid { flex-direction: column; align-items: center; }
                    .dl-card {
                        width: 100%;
                        max-width: 340px;
                        box-sizing: border-box;
                    }

                    /* Closing */
                    .closing-section { padding: 0 16px; }
                    .closing-inner { padding: 28px 20px; }
                }
            `}</style>
        </div>
    );
}
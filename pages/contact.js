import Head from 'next/head'
import styles from '../styles/Contact.module.css'
import { NextSeo } from 'next-seo';
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import {
    faYoutube,
    faInstagram,
    faTwitter,
    faGithub
} from "@fortawesome/free-brands-svg-icons";

import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

export default function Contact(props) {
    const dark = props.dark
    function validateEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return (true)
        }
        return (false)
    }

    function strip(html) {
        let doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    }

    function handleSubmit(e) {
        e.preventDefault();

        // VALIDATE
        if (phone != "" || phone.length != 0) {
            console.error("[EVENT] [BOT DETECTED] Playing: RICKROLLING");
            window.document.body.innerHTML = ""
            window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

            return 0;
        } else if (!validateEmail(email)) {
            // TODO Handle Error

            return 0;
        }

        // STRIP
        const payloadSubject = strip(subject);
        const payloadMessage = strip(message);
        const payloadFullname = strip(fullname);
        const payloadEmail = strip(email);

        // GENERATE PAYLOAD
        const payloadBody = {
            username: payloadFullname,
            content: "",
            embeds: [{
                color: 16682752,
                title: payloadSubject,
                author: {
                    name: payloadFullname,
                    url: `https://siddharthray.com/contact`,
                    icon_url: "https://i.imgur.com/R66g1Pe.jpg"
                },
                footer: {
                    text: `Submitted at ${Date(Date.now()).toString()}`,
                    icon_url: "https://i.imgur.com/fKL31aD.jpg"
                },
                fields: [
                    { name: 'Sender Name', value: payloadFullname, inline: true },
                    { name: 'Sender E-Mail', value: payloadEmail, inline: true },
                    // { name: 'Subject', value: `**${payloadSubject}**` },
                    { name: 'Message', value: payloadMessage }
                ]
            }],
        };

        // SEND
        const webhookUrl = 'https://discord.com/api/webhooks/1272091057781346438/jnrbnXTFcWmdpHuBjFlY_8qwRbD7yVzMA9c7K4B38bV1WfUNvicUX5IBML_eJqnpdAkG';

        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payloadBody),
        }).then((response) => {
            if (response.ok) {
                console.info("sending success message")
                window.document.getElementsByClassName(styles.card)[0].innerHTML = "<h1 style=\"text-align: center;\"><span style=\"color: #fe8f00\">Thank you</span> for Contacting Us!</h1><p style=\"text-align: center;\">We will get back to you soon</p>"
            } else {
                console.error(response)
                alert('There was an error! Try again later!' + response.statusText);
            }
        });
    }

    function handleShowContactInfo() {
        // Decrypt DOM
        const decryptedDOM = `<div>
            <h3><a>ftcteam16236@gmail.com</a></h3>
        </div>`
        // Inject DOM
        window.document.getElementsByClassName(styles.contactInfo)[0].innerHTML = decryptedDOM
    }

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    return <div className={(dark ? styles.dark : styles.light)}>
        <NextSeo title="Contact | Juice 16236" />
        <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <NavBar dark={dark} page="contact" />
        <main className={styles.main}>
            <div className={styles.card}>
                <h1><span style={{ color: "#fe8f00" }}>Contact</span> Us</h1>
                <div className={styles.contactInfo}>
                    <a className={styles.buttonSmol} style={{ cursor: "pointer" }} onClick={handleShowContactInfo}>Show Contact Info</a>
                    <br />
                </div>
                <form
                    onSubmit={(e) => handleSubmit(e)}
                    className={styles.contactForm}
                >
                    <label
                        htmlFor="fullname"
                    >
                        Full name<span className={styles.required}>*</span>
                    </label>
                    <input
                        type="text"
                        value={fullname}
                        onChange={(e) => {
                            setFullname(e.target.value);
                        }}
                        // placeholder="Jooser Abid"
                        name="fullname"
                    />


                    <label
                        htmlFor="email"
                    >
                        E-mail<span className={styles.required}>*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        // placeholder="jooser.abid@juicerobotics.org"
                    />

                    <input
                        type="phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => {
                            console.error("[EVENT] [BOT DETECTED] Playing: RICKROLLING");
                            window.document.body.innerHTML = ""
                            window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
                            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
                            setPhone(e.target.value);
                        }}
                        style={{ display: 'none' }}
                        autoComplete='off'
                        placeholder="DO NOT FILL OUT"
                    />


                    <label
                        htmlFor="subject"
                    >
                        Subject<span className={styles.required}>*</span>
                    </label>
                    <input
                        type="text"
                        name="subject"
                        value={subject}
                        onChange={(e) => {
                            setSubject(e.target.value);
                        }}
                        autoComplete="off"
                        // placeholder="Proposal..."
                    />

                    <label
                        htmlFor="message"
                    >
                        Message<span className={styles.required}>*</span>
                    </label>
                    <textarea
                        name="message"
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                        maxLength={1020}
                        // placeholder="*kicks up ball*, Alliance? -Abid"
                    ></textarea>

                    <p className={styles.learnWhy} style={{ fontSize: 14 }}>Maximum 1020 characters, Markdown Enabled.
                        {/* <a>Learn Why.</a> */}
                    </p>

                    <div>
                        <button
                            type="submit"
                            className={styles.button}
                        // onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </main>
        <Footer dark={dark} />
    </div>
}
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import {NextSeo} from 'next-seo';

export default function Home() {
  var [time, setTime] = React.useState(<>"Its not a <span style={{ color: "#fe8f00", fontWeight: "bold" }}>bug</span>, its a <span
    style={{ color: "#fe8f00", fontWeight: "bold" }}>feature</span>"</>)
  // Set the date we're counting down to
  var countDownDate = new Date("Sep 1, 2022 12:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in an element with id="demo"
    setTime(days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ");

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      setTime("EXPIRED");
    }
  }, 1000);

  return (
    <div className={styles.container}>
      <Head>
        <title>Juice 16236 | Coming Soon!</title>
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>

      <NextSeo
      title="Juice 16236 | Coming Soon!"
      description="Juice 16236 is a FTC Team based in Folsom, CA."
      canonical="https://juicerobotics.org/"
      openGraph={{
        url: 'https://juicerobotics.org',
        title: 'Juice Robotics',
        description: 'Juice 16236 is a FTC Team based in Folsom, CA.',
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

      <main className={styles.main}>
        <div className={styles.bgimg}>
          <div className={styles.topleft}>
            <p><span style={{ color: "#fe8f00" }}>Juice</span> <span style={{ fontWeight: "300" }}>16236</span></p>
          </div>
          <div className={styles.middle}>
            <h1>COMING SOON</h1>
            <h3 style={{marginTop: "0px", fontWeight: 200, fontStyle: "italic"}}>hopefully</h3>
            <hr />
            <p>{time}</p>
          </div>
          <div className={styles.bottomleft}>
            <p><span style={{ color: '#fe8f00', fontWeight: "bold" }}>juice</span>robotics.org</p>
            <ul class={styles.socials}>
              <li><a alt="Juice's YouTube Channel" href="https://www.youtube.com/channel/UCDixouMNi5Kr-GYOzkJOmjg" target="_blank"><i
                class="fa fa-youtube" style={{ fontSize: "24px" }} alt="LinkedIn Logo"></i></a></li>
              <li><a alt="Juice's Instagram" href="https://www.instagram.com/team_16236/" target="_blank"><i
                class="fa fa-instagram" style={{ fontSize: "24px" }} alt="LinkedIn Logo"></i></a></li>
              <li><a alt="Contact Juice" href="mailto:ftcteam16236@gmail.com" target="_blank"><i
                class="fa fa-envelope" style={{ fontSize: "24px" }} alt="LinkedIn Logo"></i></a></li>
              <li><a alt="Juice's GitHub" href="https://github.com/Juice-Robotics" target="_blank"><i
                class="fa fa-github" style={{ fontSize: "24px" }} alt="GitHub Logo"></i></a></li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

import { useEffect, useState } from 'react';
import styles from '../../styles/Redirecting.module.css'

export default function PRRedirect() {
    const [overtime, setOvertime] = useState(false);
    var seconds = 3;

    setInterval(() => {
        if (seconds > 0) {
            seconds -= 1;
        } else if (seconds <= 0) {
            seconds -= 1;
            setOvertime(true);
        }
    }, 1000);

    useEffect(() => {
        window.location.assign('https://juicerobotics.org/assets/press-releases/Juice_Worlds_2026_Press_Release.pdf')
    })
    return (
        <div className={styles.main}>
            <div className={styles.glitch} data-text="REDIRECTING...">
                REDIRECTING...
            </div>
            <p style={{opacity: (overtime == true ? 1.0 : 0.0)}}>
                If it does not redirect, <a href="./assets/press-releases/Juice_Worlds_2026_Press_Release.pdf" style={{fontWeight: "bold"}}>click here</a></p>
        </div>
    )
}
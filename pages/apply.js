import { useEffect, useState } from 'react';
import styles from '../styles/Redirecting.module.css'

export default function ApplicationRedirect() {
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
        window.location.assign('https://forms.gle/Hi8Ug6P5ehWNzSEY7')
    })
    return (
        <div className={styles.main}>
            <div className={styles.glitch} data-text="REDIRECTING...">
                REDIRECTING...
            </div>
            <p style={{opacity: (overtime == true ? 1.0 : 0.0)}}>
                If it does not redirect, <a href="https://forms.gle/Hi8Ug6P5ehWNzSEY7" style={{fontWeight: "bold"}}>click here</a></p>
        </div>
    )
}
import { useEffect, useState } from 'react';
import styles from '../../styles/Redirecting.module.css'
import Head from 'next/head'

export default function BudgetRedirect() {
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
        window.location.assign('https://docs.google.com/spreadsheets/d/1W9wncQPtzsOoaQtkw3FyPaWs08qUzhNPaIpXTzJ3FFQ/edit?gid=1338474358#gid=1338474358')
    })
    return (
        <div className={styles.main}>
            <Head>
                <meta name="robots" content="noindex, nofollow"/>
            </Head>
            <div className={styles.glitch} data-text="REDIRECTING...">
                REDIRECTING...
            </div>
            <p style={{opacity: (overtime == true ? 1.0 : 0.0)}}>
                If it does not redirect, <a href="https://docs.google.com/spreadsheets/d/1W9wncQPtzsOoaQtkw3FyPaWs08qUzhNPaIpXTzJ3FFQ/edit?gid=1338474358#gid=1338474358" style={{fontWeight: "bold"}}>click here</a></p>
        </div>
    )
}
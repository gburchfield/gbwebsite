import React from 'react'
import styles from './Content.module.css'

export default function Content({siteConfig}) {

    return (
        <div className={styles.container}>
            <div className={styles.rightWrap}>
            </div>
            <div className={styles.content}>
                <h1>Content</h1>
            </div>
        </div>
    )
}

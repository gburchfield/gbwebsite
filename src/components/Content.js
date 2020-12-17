import React from 'react'
import styles from './Content.module.css'
import Header from "./Header";
import HeaderButtons from "./HeaderButtons";

export default function Content({siteConfig}) {

    return (
        <div className={styles.container}>
            <div className={styles.rightWrap}>
            </div>
            <div className={styles.content}>
                <Header config={GetSection("Header", siteConfig)}/>
                <HeaderButtons />
            </div>
        </div>
    )
}

function GetSection(name, siteConfig) {
    const {sections} = siteConfig
    const result = sections.filter(x => x.component === name)
    return result[0]
}

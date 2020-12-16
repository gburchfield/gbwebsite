import React, {useEffect, useState} from 'react'
import styles from './DesktopNav.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DesktopNav({children, siteConfig}) {
    const [activeSection, setActiveSection] = useState(0)

    useEffect(() => {
        console.log("pageYOffset",window.pageYOffset)
        console.log("activeSection",activeSection)
    })

    return (
        <div className={styles.container}>
            <div className={styles.leftWrap}></div>
            <header className={styles.header} role={"banner"}>
                {SiteBrand(siteConfig)}
                {MainNavigation(siteConfig, activeSection, setActiveSection)}
                {SocialLinks(siteConfig)}
            </header>
        </div>
    )
}

function SiteBrand(siteConfig) {
    const {siteBrand} = siteConfig
    const siteBrandArr = siteBrand.trim().split(" ")
    return (
        <div className={styles.siteBrand}>
            {
                siteBrandArr.map((word,index) => ( <span key={`sb_word_${index}`}>{word}</span> ))
            }
        </div>
    )
}

function MainNavigation({sections}, active, setActive) {

    return (
        <nav className={styles.mainNavigation} role="navigation" aria-label="Top Menu">
            <ul>
                {
                    sections.map(({name}, section_index) => (
                        <li key={`main_nav_${section_index}`} className={section_index === active ? styles.current : null}>
                            <a href={`#${name.toLowerCase()}`} onClick={() => setActive(section_index)}>{name}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

function GetSections(current, sections) {
    console.log('current',current)
    return sections.map((section, i) => {
        section.current = i === current
        return {...section}
    })
}

function SocialLinks(siteConfig) {
    const {socialLinks} = siteConfig
    return (
        <ul className={styles.socialLinks}>
            {
                socialLinks.map((link, index) => (
                    <li key={`social_link_${index}`}>
                        <a href={link.url}>
                            <FontAwesomeIcon icon={link.type} size={"lg"}/>
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}

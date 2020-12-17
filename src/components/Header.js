import React from 'react'
import styles from './Header.module.css'

export default function Header({config}) {
    const {data: {greeting, person_name, position}} = config
    return (
        <section className={styles.container}>
            <div className={styles.wrap}>
                <div>
                    <div>
                        <p className={styles.greeting}>{greeting}</p>
                    </div>
                    <div>
                        <h1 className={styles.personName}>{person_name}</h1>
                    </div>
                    <div>
                        <div className={styles.line}><span></span></div>
                    </div>
                    <div>
                        <p className={styles.position}>{position}</p>
                    </div>
                </div>
                <div></div>
            </div>
        </section>
    )
}

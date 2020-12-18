import React from "react";
import styles from "./HeaderButtons.module.css";
import {Config, DownloadResume} from "../utils"

export default function HeaderButtons() {
    return (
        <section className={styles.container}>
            <div>
                <a href="#" onClick={() => DownloadResume(Config.download_resume_url)}>Download Resume</a>
                <a href="#">View Portfolio</a>
            </div>
        </section>
    )
}


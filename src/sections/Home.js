import React from "react";
import styles from "./Home.module.css"

export default function Home() {

    return (
        <section id="home" className={styles.home}>

            <div className={`animated fadeIn ${styles.homeCover}`}>

            </div>

            <div className={`${styles.homeContainer}`}>

                <div className={styles.homeContentBox}>

                    <div id="home-content-box-inner" className={styles.homeContentBoxInner}>

                        <div className={`animated zoomIn ${styles.homeHeading}`}>
                            <img id="bg-img" src="img/GB_Logo_Full_Name_Tag_Line.png" alt="GLEN BURCHFIELD" srcSet="" width="60%" height="60%" />
                        </div>

                        <div className={`animated zoomIn ${styles.homeBtn}`}>
                            <a href="#about" className="smooth-scroll btn btn-lg btn-general btn-white" role="button" title="View Glen's About">About Me</a>
                        </div>
                    </div>

                </div>

            </div>


        </section>

)
}

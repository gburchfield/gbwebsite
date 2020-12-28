import React from "react"
import styles from "./GlenLogo.module.css";


export default function GlenLogo({size}) {
	const sizeKeys = {
		sm: "8px",
		md: "12px",
		lg: "16px",
		xl: "32px"
	}

	const fontSize = size && sizeKeys[size] ? sizeKeys[size] : sizeKeys.md

	return (
		<div className={styles.logoContainer} style={{fontSize}}>

			<div className={styles.leftContainer}>

				<p className={styles.firstLetter}>G</p>

			</div>

			<div className={styles.rightContainer}>

				<div>
					<p className={styles.secondLetter}>M</p>
					<span></span>
				</div>

				<div>
					<p className={styles.thirdLetter}>B</p>
				</div>

			</div>

		</div>
	)

}


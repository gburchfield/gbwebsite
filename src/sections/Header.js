import React, {useRef} from "react";
import {useScrollPosition} from "@n8tb1t/use-scroll-position";
import {Container, Nav, Navbar} from "react-bootstrap";
import styles from "./Header.module.css"

export default function Header({navLinks, logoSrc}) {
    const navBarRef = useRef(null)
    const NAV_SCROLL_NOT_TOP = styles.navScrollNotTop

    useScrollPosition(({prevPos, currPos}) => {
        const currentHeight = currPos.y * -1
        const hasNotTopClass = navBarRef.current.classList.contains(NAV_SCROLL_NOT_TOP)
        if(currentHeight > 100 && !hasNotTopClass) {
            navBarRef.current.classList.add(NAV_SCROLL_NOT_TOP)
        } else if (currentHeight <= 100 && hasNotTopClass) {
            navBarRef.current.classList.remove(NAV_SCROLL_NOT_TOP)
        }

    })

    return (
        <header>

                <Navbar collapseOnSelect expand={"lg"} ref={navBarRef} fixed={"top"} className={`${styles.navbar}`}>

                    <Navbar.Brand href={"#home"}>
                        <img src={logoSrc} alt="" width="75px" height="40px" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls={"navigation-menu"}/>

                    <Navbar.Collapse id={"navigation-menu"}>
                        <Nav className={styles.nav}>
                            {
                                navLinks.map(({href, name},i) => {
                                    return (
                                        <Nav.Link key={`nav-link-${i}`} href={href}>{name}</Nav.Link>

                                    )
                                })
                            }
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>

        </header>
    )
}

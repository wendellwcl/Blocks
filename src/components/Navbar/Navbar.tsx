"use client";

import { useEffect, useState } from "react";

import styles from "./Navbar.module.css";

interface NavbarProps {
    brand: { brandImgPath: string; brandUrl: string };
    navLinks?: { text: string; url: string }[];
}

export default function Navbar({ brand, navLinks }: NavbarProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    //Toggles the display or hidden state of the navlist.
    function toggleNav(): void {
        setIsOpen((prev) => !prev);
    }

    //Hide the navlist.
    function closeNav(): void {
        setIsOpen(false);
    }

    //Adding the function to hide the navbar when resizing the screen.
    useEffect(() => {
        window.addEventListener("resize", closeNav);

        return () => {
            window.removeEventListener("resize", closeNav);
        };
    }, []);

    return (
        <div className={styles.navbar}>
            <nav className={styles.navbar__container} role="navigation" aria-label="Main Navigation">
                <a href={brand.brandUrl} className={styles.navbar__brand}>
                    <img src={brand.brandImgPath || "/"} alt={"Logo"} />
                </a>
                {navLinks && navLinks?.length > 0 && (
                    <>
                        <ul
                            className={`${styles.navbar__nav} ${isOpen ? "show" : ""}`}
                            role="menu"
                            aria-hidden={!isOpen}
                        >
                            {navLinks.map((item, index) => (
                                <li key={index} className={styles.navbar__item} onClick={closeNav} role="none">
                                    <a href={item.url} className={styles.navbar__link} role="menuitem">
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <button
                            className={styles.navbar__toggleBtn}
                            onClick={toggleNav}
                            aria-expanded={isOpen}
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                            aria-controls="menu"
                        >
                            <span className={styles.navbar__togglerIcon}></span>
                        </button>
                    </>
                )}
            </nav>
            {isOpen && (
                <div
                    className={styles.navbar__backdrop}
                    onClick={closeNav}
                    role="presentation"
                    aria-hidden="true"
                ></div>
            )}
        </div>
    );
}

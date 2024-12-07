"use client";

import { useEffect, useRef } from "react";

import styles from "./Navbar.module.scss";

interface NavbarProps {
    brand: { brandImgPath: string; brandAltText: string; brandUrl: string };
    navLinks?: { text: string; url: string }[];
}

export default function Navbar({ brand, navLinks }: NavbarProps) {
    const navRef = useRef<HTMLUListElement>(null);

    //Toggles the display or hidden state of the nav by adding or removing the "show" class.
    function toggleNav(): void {
        const nav = navRef.current;
        nav?.classList.toggle("show");

        return;
    }

    //Hide the navbar by removing the "show" class.
    function closeNav(): void {
        const nav = navRef.current;
        nav?.classList.remove("show");

        return;
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
            <nav className={styles.navbar__container}>
                <a href={brand.brandUrl} className={styles.navbar__brand}>
                    <img src={brand.brandImgPath || "/"} alt={brand.brandAltText} />
                </a>
                {navLinks && navLinks?.length > 0 && (
                    <>
                        <ul className={styles.navbar__nav} ref={navRef}>
                            {navLinks.map((item, index) => (
                                <li key={index} className={styles.navbar__item} onClick={closeNav}>
                                    <a href={item.url} className={styles.navbar__link}>
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <button className={styles.navbar__toggleBtn} onClick={toggleNav}>
                            <span className={styles.navbar__togglerIcon}></span>
                        </button>
                    </>
                )}
            </nav>
            <div className={styles.navbar__backdrop} onClick={closeNav}></div>
        </div>
    );
}

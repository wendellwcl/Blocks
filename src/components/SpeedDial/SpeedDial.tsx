"use client";

import { useRef, useState } from "react";

import styles from "./SpeedDial.module.css";

export default function SpeedDial() {
    const speedDialRef = useRef<HTMLDivElement>(null);

    const [isSpeedDialOpen, setIsSpeedDialOpen] = useState<boolean>(false);

    // Toggles the visibility of the speed dial element.
    function toggleSpeedDial(): void {
        setIsSpeedDialOpen((prev) => !prev);
        speedDialRef.current!.classList.toggle("toggle-show");
    }

    // Shows the speedDial element by adding the "show" class.
    function showSpeedDial(): void {
        setIsSpeedDialOpen(true);
        speedDialRef.current!.classList.add("show");
    }

    // Hides the speed dial element by removing the "show" class.
    function hideSpeedDial(): void {
        setIsSpeedDialOpen(false);
        speedDialRef.current!.classList.remove("show");
    }

    return (
        <div
            className={styles.speedDial}
            ref={speedDialRef}
            role="button"
            aria-label="Menu de ações rápidas"
            aria-expanded={isSpeedDialOpen}
            onClick={toggleSpeedDial}
            onMouseEnter={showSpeedDial}
            onMouseLeave={hideSpeedDial}
            tabIndex={0}
        >
            <button className={styles.speedDial__trigger} aria-label="Open menu">
                <span className={styles.speedDial__icon}></span>
            </button>
            <ul className={styles.speedDial__list} role="menu" aria-hidden={!isSpeedDialOpen}>
                <li className={styles.speedDial__item} role="menuitem">
                    <button tabIndex={isSpeedDialOpen ? 0 : -1}>👍🏼</button>
                </li>
                <li className={styles.speedDial__item} role="menuitem">
                    <button tabIndex={isSpeedDialOpen ? 0 : -1}>💎</button>
                </li>
                <li className={styles.speedDial__item} role="menuitem">
                    <button tabIndex={isSpeedDialOpen ? 0 : -1}>❤</button>
                </li>
            </ul>
        </div>
    );
}

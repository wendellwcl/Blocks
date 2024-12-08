"use client";

import { useRef } from "react";

import styles from "./SpeedDial.module.scss";

export default function SpeedDial() {
    const speedDialRef = useRef<HTMLDivElement>(null);

    // Toggles the visibility of the speed dial element.
    function toggleSpeedDial() {
        speedDialRef.current!.classList.toggle("toggle-show");
        return;
    }

    // Shows the speedDial element by adding the "show" class.
    function showSpeedDial() {
        speedDialRef.current!.classList.add("show");
        return;
    }

    // Hides the speed dial element by removing the "show" class.
    function hideSpeedDial() {
        speedDialRef.current!.classList.remove("show");
        return;
    }

    return (
        <div
            className={styles.speedDial}
            ref={speedDialRef}
            onClick={toggleSpeedDial}
            onMouseEnter={showSpeedDial}
            onMouseLeave={hideSpeedDial}
        >
            <button className={styles.speedDial__trigger}>
                <span className={styles.speedDial__icon}></span>
            </button>
            <ul className={styles.speedDial__list}>
                <li className={styles.speedDial__item}>
                    <button>1</button>
                </li>
                <li className={styles.speedDial__item}>
                    <button>2</button>
                </li>
                <li className={styles.speedDial__item}>
                    <button>3</button>
                </li>
            </ul>
        </div>
    );
}

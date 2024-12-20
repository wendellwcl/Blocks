"use client";

import { useState } from "react";

import styles from "./Pagination.module.css";

export default function Pagination() {
    const [counter, setCounter] = useState(1);
    const maxCounter = 10;

    // Go to the previous page.
    function handlePrev(): void {
        counter > 1 && setCounter((prev) => prev - 1);
    }

    // Go to the next page.
    function handleNext() {
        counter < maxCounter && setCounter((prev) => prev + 1);
    }

    return (
        <div className={styles.pagination}>
            <button
                className={`${styles["pagination__arrow"]} ${styles["pagination__arrow--prev"]}`}
                aria-label="Go to previous page"
                onClick={handlePrev}
                disabled={counter === 1}
            ></button>
            <ul className={styles.pagination__list}>
                {counter - 1 > 0 && (
                    <li className={styles.pagination__item}>
                        <button onClick={handlePrev} aria-label={`Go to page ${counter - 1}`}>
                            {counter - 1}
                        </button>
                    </li>
                )}
                <li className={`${styles.pagination__item} current`} aria-current="page">
                    <span>{counter}</span>
                </li>
                {counter < maxCounter && (
                    <li className={styles.pagination__item}>
                        <button onClick={handleNext} aria-label={`Go to page ${counter + 1}`}>
                            {counter + 1}
                        </button>
                    </li>
                )}
            </ul>
            <button
                className={`${styles["pagination__arrow"]} ${styles["pagination__arrow--next"]}`}
                aria-label="Go to next page"
                onClick={handleNext}
                disabled={counter === maxCounter}
            ></button>
        </div>
    );
}

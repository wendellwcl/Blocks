"use client";

import { useState } from "react";

import styles from "./Pagination.module.scss";

export default function Pagination() {
    //!!!The variables and functions are for working example purposes only. This component must be adapted according to the paging logic!!!
    const [counter, setCounter] = useState(2);
    const maxCounter = 5;

    function handlePrev(): void {
        counter > 1 && setCounter((prev) => prev - 1);
        return;
    }

    function handleNext() {
        counter < maxCounter && setCounter((prev) => prev + 1);
        return;
    }

    return (
        <div className={styles.pagination}>
            <a
                href="#"
                className={`${styles["pagination__arrow"]} ${styles["pagination__arrow--prev"]}`}
                aria-label="Previous"
                onClick={handlePrev}
            ></a>
            <ul className={styles.pagination__list}>
                {counter - 1 > 0 && (
                    <li className={styles.pagination__item}>
                        <a href="#" onClick={handlePrev}>
                            {counter - 1}
                        </a>
                    </li>
                )}
                <li className={`${styles.pagination__item} current`}>
                    <a href="#">{counter}</a>
                </li>
                {counter < maxCounter && (
                    <li className={styles.pagination__item}>
                        <a href="#" onClick={handleNext}>
                            {counter + 1}
                        </a>
                    </li>
                )}
            </ul>
            <a
                href="#"
                className={`${styles["pagination__arrow"]} ${styles["pagination__arrow--next"]}`}
                aria-label="Next"
                onClick={handleNext}
            ></a>
        </div>
    );
}

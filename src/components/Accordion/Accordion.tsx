"use client";

import { MouseEvent } from "react";

import styles from "./Accordion.module.scss";

interface AccordionProps {
    title: string;
    contentText: string;
}

export default function Accordion({ title, contentText }: AccordionProps) {
    /**
     * Toggles the open or closed state of an accordion element by adding or removing the "open" class.
     *
     * @param e - click event capture
     */
    function toggleAccordion(e: MouseEvent): void {
        const targetEl: HTMLButtonElement = e.target as HTMLButtonElement; // Cast the event target to an HTMLButtonElement
        const parentEl = targetEl.parentElement; // Get the parent element of the button
        parentEl ? parentEl?.classList.toggle("open") : null; // If the parent element exists, toggle the "open" class on it

        return;
    }

    return (
        <div className={styles.accordion}>
            <button className={styles.accordion__header} onClick={(e) => toggleAccordion(e)}>
                {title}
            </button>
            <div className={styles.accordion__content}>{contentText}</div>
        </div>
    );
}

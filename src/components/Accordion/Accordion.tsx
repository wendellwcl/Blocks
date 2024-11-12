"use client";

import styles from "./Accordion.module.scss";

interface AccordionProps {
    title: string;
    contentText: string;
}

export default function Accordion({ title, contentText }: AccordionProps) {
    /**
     * Toggles the open or closed state of the accordion element.
     * @param e - click event capture
     */
    function toggleAccordion(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        const targetEl: HTMLButtonElement = e.target as HTMLButtonElement;
        const parentEl = targetEl.parentElement;
        parentEl ? parentEl?.classList.toggle("open") : null;
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

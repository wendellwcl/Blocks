"use client";

import { useState } from "react";

import styles from "./Accordion.module.css";

interface AccordionProps {
    id: string;
    title: string;
    content: string;
}

export default function Accordion({ id, title, content }: AccordionProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // Toggles the open or closed state of an accordion element.
    function toggleAccordion(): void {
        setIsOpen((prev) => !prev);
    }

    return (
        <div className={`${styles.accordion}${isOpen ? " open" : ""}`}>
            <button
                className={styles.accordion__header}
                onClick={toggleAccordion}
                aria-expanded={isOpen}
                id={id}
                aria-controls={`${id}-content`}
            >
                {title}
            </button>
            <div className={styles.accordion__content} id={`${id}-content`} aria-hidden={!isOpen}>
                {content}
            </div>
        </div>
    );
}

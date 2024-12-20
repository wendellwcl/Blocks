"use client";

import React, { MouseEvent as ReactMouseEvent, useEffect, useRef } from "react";

import styles from "./Tabs.module.css";

interface TabsProps {
    children: React.ReactNode[];
}

export default function Tabs({ children }: TabsProps) {
    const headerListRef = useRef<HTMLUListElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    /**
     * Handles displaying the corresponding content when a header is clicked.
     * It removes active and show classes from all elements, then adds the relevant ones
     * to the clicked header and its corresponding content.
     * @param e - The mouse event triggered by clicking a header.
     * @param id - The identifier of the content to show.
     */
    function handleShowContent(e: ReactMouseEvent, id: string): void {
        // Get the header elements
        const header = headerListRef.current!;
        const headerElements = header.querySelectorAll("*");
        headerElements.forEach((el) => el.classList.remove("active")); // Remove the 'active' class from all header elements

        // Add the 'active' class to the clicked header element
        const triggerEl = e.target as HTMLElement;
        triggerEl.classList.add("active");

        // Get the content elements
        const content = contentRef.current!;
        const contentElements = content.querySelectorAll("*");
        contentElements.forEach((el) => {
            el.classList.remove("show");
        }); // Remove the 'show' class from all content elements

        // Add the 'show' class to the target content element
        const target = content.querySelector(`[data-target=${id}]`);
        target?.classList.add("show");
    }

    // Effect to validate children components on mount
    useEffect(() => {
        children.forEach((item) => {
            if (React.isValidElement(item)) {
                if (!item.props.id) {
                    // Throw an error if the 'id' property is missing
                    throw Error("Each child inside a 'Tabs' component must have a unique 'id' property.");
                } else if (!item.props["data-header-text"]) {
                    // Throw an error if the 'data-header-text' property is missing
                    throw Error("Each child inside a 'Tabs' component must have a 'data-header-text' property.");
                }
            }
        });
    }, []);

    return (
        <div className={styles.tabs}>
            <div className={styles.tabs__header}>
                <ul className={styles.tabs__list} ref={headerListRef} role="tablist">
                    {children.map(
                        (el, idx) =>
                            React.isValidElement(el) && (
                                <li key={idx} className={styles.tabs__item}>
                                    <button
                                        id={`tab-${idx}`}
                                        className={`${styles.tabs__btn} ${idx === 0 ? "active" : ""}`}
                                        onClick={(e) => handleShowContent(e, el.props.id)}
                                        role="tab"
                                        aria-selected={idx === 0 ? "true" : "false"}
                                        aria-controls={`tabpanel-${idx}`}
                                        tabIndex={idx === 0 ? 0 : -1}
                                    >
                                        {el.props["data-header-text"] || el.props.id}
                                    </button>
                                </li>
                            )
                    )}
                </ul>
            </div>
            <div className={styles.tabs__content} ref={contentRef}>
                {children.map(
                    (item, idx) =>
                        React.isValidElement(item) && (
                            <div
                                key={idx}
                                id={`tabpanel-${idx}`}
                                className={`${styles.tabs__wrapper} ${idx === 0 ? "show" : ""}`}
                                data-target={item.props.id}
                                role="tabpanel"
                                aria-labelledby={`tab-${idx}`}
                                aria-hidden={idx === 0 ? "false" : "true"}
                            >
                                {item}
                            </div>
                        )
                )}
            </div>
        </div>
    );
}

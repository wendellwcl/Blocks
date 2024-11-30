"use client";

import React, { useEffect, useRef, useState } from "react";

import styles from "./ScrollSpy.module.scss";

interface ScrollSpyProps {
    children: React.ReactElement[];
}

interface INavItems {
    id: string;
    navText: string;
}

export default function ScrollSpy({ children }: ScrollSpyProps) {
    // Reference to the DOM elements
    const contentRef = useRef<HTMLDivElement>(null);
    const navListRef = useRef<HTMLUListElement>(null);

    const [navItems, setNavItems] = useState<INavItems[]>([]); // State to store the necessary data from each content section to build the nav list
    const [loading, setLoading] = useState<boolean>(true); // Loading state

    /**
     * Handling the "active" class to highlight the anchor element (<a>) corresponding to the current content of the section.
     * @param targetEl - element (<a>) corresponding to the current content of the section
     */
    function handleActive(targetEl: EventTarget): void {
        // Iterate through all anchor (<a>) elements in the navlist and remove the "active" class from each one
        navListRef.current!.querySelectorAll("a").forEach((el) => el.classList.remove("active"));

        // Adds the "active" class to the corresponding anchor element (target) of the current content in the viewport
        (targetEl as HTMLAnchorElement).classList.add("active");

        return;
    }

    // Check which section is the current content in the viewport.
    function handleScroll(): void {
        // Get content container position measurements
        const contentContainerRect = contentRef.current!.getBoundingClientRect();
        const contentContainerCenter = contentContainerRect.height / 2 + contentContainerRect.top;
        const contentContainerScroll = contentRef.current!.scrollTop + contentRef.current!.clientHeight;
        const contentContainerMaxScroll = contentRef.current!.scrollHeight;

        // If the content container scrolled to the end
        if (contentContainerScroll >= contentContainerMaxScroll) {
            // Get the last item in the nav list, corresponding to the last content in the content section
            const navItems = navListRef.current!.querySelectorAll(`a`);
            const navTarget = navItems[navItems.length - 1];

            handleActive(navTarget as EventTarget); // Add 'active' class

            return;
        }

        // Get all child nodes of the content section
        const sections = contentRef.current!.childNodes;

        // Iterate over each child element (section)
        sections.forEach((section) => {
            // Get section position measurements
            const element = section as HTMLElement;
            const elementRect = element.getBoundingClientRect();

            // If the section is the current content in the viewport
            if (elementRect.top <= contentContainerCenter && elementRect.bottom >= contentContainerCenter) {
                const navTarget = navListRef.current!.querySelector(`[href='#${element.id}']`); // Get the corresponding nav item

                handleActive(navTarget as EventTarget); // Add 'active' class
            }
        });

        return;
    }

    useEffect(() => {
        // Iterate elements to check and obtain information necessary for the nav
        React.Children.forEach(children, (child) => {
            // If the child element is missing information
            if (!child.props.id) {
                throw new Error("Child element must have an 'id' attribute"); // Throw an error if "id" is missing in the child
            } else if (!child.props["data-nav_text"]) {
                throw new Error("Child element must have a 'data-nav_text' attribute"); // Throw an error if "data-nav_text" is missing in the child
            }

            // Create a new item with the necessary data from the child element
            const newItem = {
                id: child.props.id,
                navText: child.props["data-nav_text"],
            };

            setNavItems((prev) => [...prev, newItem]); // Update the state by adding the new item
        });

        setLoading(false); // Set loading to false
    }, []);

    if (loading) return null;

    return (
        <div className={styles.scrollSpy__container}>
            <nav className={styles.scrollSpy__nav}>
                <ul className={styles.scrollSpy__list} ref={navListRef}>
                    {navItems.map((item, index) => (
                        <li className={styles.scrollSpy__item} key={index}>
                            <a className={`${styles.scrollSpy__link} ${index === 0 && "active"}`} href={`#${item.id}`}>
                                {item.navText}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <section className={styles.scrollSpy__content} ref={contentRef} onScroll={handleScroll}>
                {children}
            </section>
        </div>
    );
}

"use client";

import { isValidElement, MouseEvent, ReactElement } from "react";

import styles from "./Dropdown.module.scss";

interface DropdownProps {
    title: string;
    children: ReactElement<HTMLAnchorElement | HTMLButtonElement>[];
}

export default function Dropdown({ title, children }: DropdownProps) {
    /**
     * Toggles the open or closed state of a dropdown element by adding or removing the "open" class.
     * @param e - click event capture
     */
    function toggleDropdown(e: MouseEvent): void {
        let currentEl = e.currentTarget; // Initialize with the element that triggered the event

        // Traverse the DOM tree until it finds an element with the "data-dropdown" attribute, corresponding to the parent element of the element that triggered the event
        while (!currentEl.parentElement?.hasAttribute("data-dropdown")) {
            currentEl = currentEl.parentElement!;
        }

        // Once the parent element with the "data-dropdown" attribute is found, toggle its "open" class
        const targetDropdownEl = currentEl.parentElement!;
        targetDropdownEl.classList.toggle("open"); // Add the "open" class if not present, or remove it if it is

        return;
    }

    return (
        <div className={styles.dropdown} data-dropdown>
            <button className={styles.dropdown__btn} onClick={(e) => toggleDropdown(e)}>
                {title}
            </button>
            <ul className={styles.dropdown__list}>
                {children.map((child, index) => {
                    if (!(isValidElement(child) && (child.type === "a" || child.type === "button"))) {
                        throw new Error(
                            "An invalid HTML element is being used as a children of a 'Dropdown component', make sure to only the following HTML elements: <a hreh=''></a> or <button></button>."
                        );
                    }
                    return (
                        <li key={index} className={styles.dropdown__item} onClick={(e) => toggleDropdown(e)}>
                            {child}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

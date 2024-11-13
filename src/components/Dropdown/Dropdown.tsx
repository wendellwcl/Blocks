"use client";

import { isValidElement, MouseEvent, ReactElement } from "react";

import styles from "./Dropdown.module.scss";

interface DropdownProps {
    title: string;
    children: ReactElement<HTMLAnchorElement | HTMLButtonElement>[];
}

export default function Dropdown({ title, children }: DropdownProps) {
    /**
     * Toggles the open or closed state of the dropdown element.
     * @param e - click event capture
     */
    function toggleDropdown(e: MouseEvent): void {
        let currentEl = e.currentTarget;
        while (!currentEl.parentElement?.hasAttribute("data-dropdown")) {
            currentEl = currentEl.parentElement!;
        }

        const targetDropdownEl = currentEl.parentElement!;
        targetDropdownEl.classList.toggle("open");
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

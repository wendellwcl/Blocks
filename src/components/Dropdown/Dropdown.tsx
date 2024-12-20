"use client";

import { isValidElement, ReactElement, useState } from "react";

import styles from "./Dropdown.module.css";

interface DropdownProps {
    title: string;
    children: ReactElement<HTMLAnchorElement | HTMLButtonElement>[];
}

export default function Dropdown({ title, children }: DropdownProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // Toggles the open or closed state of a dropdown element.
    function toggleDropdown(): void {
        setIsOpen((prev) => !prev);
    }

    //Closes the dropdown element.
    function closeDropdown(): void {
        setIsOpen(false);
    }

    return (
        <div className={`${styles.dropdown} ${isOpen ? "open" : ""}`} onBlur={closeDropdown}>
            <button
                className={styles.dropdown__btn}
                onClick={toggleDropdown}
                aria-haspopup="menu"
                aria-expanded={isOpen}
            >
                {title}
            </button>
            <ul className={styles.dropdown__list} role="menu">
                {children.map((child, index) => {
                    if (!(isValidElement(child) && (child.type === "a" || child.type === "button"))) {
                        throw new Error(
                            "An invalid HTML element is being used as a children of a 'Dropdown component', make sure to only the following HTML elements: <a hreh=''></a> or <button></button>."
                        );
                    }
                    return (
                        <li key={index} className={styles.dropdown__item} onClick={toggleDropdown} role="menuitem">
                            {child}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

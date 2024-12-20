"use client";

import { useEffect } from "react";

import styles from "./Dialog.module.css";

interface DialogProps {
    id: string;
    title: string;
    children: React.ReactNode;
    actionFunction?: () => any;
}

/**
 * Toggles the open or closed state of a dialog component by adding or removing the "open" class.
 * @important - This function is reusable and can be called from anywhere in your code to control dialog components.
 * @param id - the ID of the target dialog component. It can include or omit the "#" prefix.
 */
export function toggleDialog(id: string): void {
    // Ensure the provided ID starts with a "#" prefix for valid CSS selector usage
    const targetId = id.startsWith("#") ? id : `#${id}`;

    // Find the dialog element in the DOM and toggle the "open" class
    document.querySelector(targetId)?.classList.toggle("open");
}

export default function Dialog({ id, title, children, actionFunction = () => null }: DialogProps) {
    /**
     * Adds a keydown event listener to handle accessibility for the dialog.
     * Specifically, it listens for the "Escape" key to allow users to close the dialog
     * using the keyboard. This ensures better usability for users relying on keyboards.
     * The event listener is added when the component mounts and removed when it unmounts
     * to prevent memory leaks and unexpected behavior.
     * @param {KeyboardEvent} event - The keyboard event triggered by the user.
     */
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                toggleDialog(id);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [id, toggleDialog]);

    return (
        <div
            className={styles.dialog}
            id={id}
            role="dialog"
            aria-labelledby={`${id}-title`}
            aria-describedby={`${id}-content`}
            onClick={() => toggleDialog(id)}
        >
            <div className={styles.dialog__body} onClick={(e) => e.stopPropagation()}>
                <div className={styles.dialog__header}>
                    <p className={styles.dialog__title}>{title}</p>
                    <button className={styles.dialog__close} onClick={() => toggleDialog(id)} aria-label="Close dialog">
                        &#10005;
                    </button>
                </div>
                <div className={styles.dialog__content}>{children}</div>
                <div className={styles.dialog__footer}>
                    <button
                        className={`${styles.dialog__button} ${styles["dialog__button--neutral"]}`}
                        onClick={() => toggleDialog(id)}
                    >
                        Close
                    </button>
                    <button
                        className={styles.dialog__button}
                        onClick={() => {
                            actionFunction();
                            toggleDialog(id);
                        }}
                    >
                        Action
                    </button>
                </div>
            </div>
        </div>
    );
}

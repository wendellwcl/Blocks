"use client";

import styles from "./Toast.module.scss";

interface ToastProps {
    id: string;
    title: string;
    message: string;
}

// Variable to store the timeout ID for hiding the toast. Initially set to null.
let hideTimeout: NodeJS.Timeout | null;

// Helper function to get the toast element by its ID.
function getToastEl(id: string): Element | null {
    const toastId = id.startsWith("#") ? id : `#${id}`; // Ensures the ID has a "#" prefix. If not, adds it
    const toastEl = document.querySelector(toastId); // Retrieves the DOM element corresponding to the given ID

    return toastEl;
}

/**
 * @important - This function is reusable and can be called from anywhere in your code to show toast notification.
 *
 * @param id - toast element id
 */
export function showToast(id: string): void {
    const toastEl = getToastEl(id); // Gets the toast element using the helper function

    // If the toast element is not found, it triggers an alert
    if (!toastEl) {
        console.warn(`Toast with ID "${id}" not found`);
        return;
    }

    toastEl.classList.add("show"); // Adds the "show" class to the toast element, making it visible

    // Schedules the removal of the "show" class after 5 seconds (5000ms)
    const hideToast = setTimeout(() => {
        toastEl.classList.remove("show");
    }, 5000);
    hideTimeout = hideToast; // Stores the timeout ID in the global `hideTimeout` variable for potential cancellation

    return;
}

/**
 * @important - This function is reusable and can be called from anywhere in your code to close toast notification.
 *
 * @param id - toast element id
 */
export function closeToast(id: string): void {
    const toastEl = getToastEl(id); // Gets the toast element using the helper function

    // If the toast element is not found, it triggers an alert
    if (!toastEl) {
        console.warn(`Toast with ID "${id}" not found`);
        return;
    }

    toastEl.classList.remove("show"); // Immediately removes the "show" class to hide the toast

    hideTimeout && clearTimeout(hideTimeout); // If a timeout is active, cancels it to prevent automatic hiding after the delay
    hideTimeout = null; // Resets the `hideTimeout` variable to null, as the toast is already hidden

    return;
}

export default function Toast({ id, title, message }: ToastProps) {
    return (
        <div id={id} className={styles.toast}>
            <div className={styles.toast__messageContainer}>
                <div className={styles.toast__title}>{title}</div>
                <div>{message}</div>
            </div>
            <button className={styles.toast__closeBtn} onClick={() => closeToast(id)}>
                &#10005;
            </button>
        </div>
    );
}

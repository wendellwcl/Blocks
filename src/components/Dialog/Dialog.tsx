"use client";

import styles from "./Dialog.module.scss";

interface DialogProps {
    dialogId: string;
    title: string;
    children: React.ReactNode;
    actionFunction?: () => any;
}

/**
 * Toggles the open or closed state of a dialog component by adding or removing the "open" class.
 * @important - This function is reusable and can be called from anywhere in your code to control dialog components.
 *
 * @param dialogId - the ID of the target dialog component. It can include or omit the "#" prefix.
 */
export function toggleDialog(dialogId: string): void {
    // Ensure the provided ID starts with a "#" prefix for valid CSS selector usage
    const targetId = dialogId.startsWith("#") ? dialogId : `#${dialogId}`;

    // Find the dialog element in the DOM and toggle the "open" class
    document.querySelector(targetId)?.classList.toggle("open");

    return;
}

export default function Dialog({ dialogId, title, children, actionFunction = () => null }: DialogProps) {
    return (
        <div className={styles.dialog} id={dialogId} onClick={() => toggleDialog(dialogId)}>
            <div className={styles.dialog__body} onClick={(e) => e.stopPropagation()}>
                <div className={styles.dialog__header}>
                    <h6 className={styles.dialog__title}>{title}</h6>
                    <button className={styles.dialog__close} onClick={() => toggleDialog(dialogId)}>
                        &#10005;
                    </button>
                </div>
                <div className={styles.dialog__content}>{children}</div>
                <div className={styles.dialog__footer}>
                    <button
                        className={`${styles.dialog__button} ${styles["dialog__button--neutral"]}`}
                        onClick={() => toggleDialog(dialogId)}
                    >
                        Close
                    </button>
                    <button
                        className={styles.dialog__button}
                        onClick={() => {
                            actionFunction();
                            toggleDialog(dialogId);
                        }}
                    >
                        Action
                    </button>
                </div>
            </div>
        </div>
    );
}

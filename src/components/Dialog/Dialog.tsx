"use client";

import styles from "./Dialog.module.scss";

interface DialogProps {
    dialogId: string;
    title: string;
    children: React.ReactNode;
    actionFunction?: () => any;
}

/**
 * Toggles the open or closed state of the dialog component.
 * !!! To control a dialog component, import and use this function anywhere in your code !!!
 * @param dialogId - the ID of the target dialog component
 */
export function toggleDialog(dialogId: string): void {
    const targetId = dialogId.startsWith("#") ? dialogId : `#${dialogId}`;
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

"use client";

import { InputHTMLAttributes, FocusEvent as ReactFocusEvent } from "react";

import styles from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
    type: "text" | "email" | "number" | "passworld" | "search" | "tel" | "url";
    placeholder: string;
}

export default function Input({ label, placeholder, type, id, ...props }: InputProps) {
    /**
     * Checks whether the input element is filled and manages the 'filled' class to indicate this state.
     * @param e - input blur event
     */
    function handleFilled(e: ReactFocusEvent<HTMLInputElement>): void {
        // If the input field has a value
        if (e.currentTarget.value) {
            e.currentTarget.classList.add("filled"); // Add 'filled' class
        } else {
            e.currentTarget.classList.remove("filled"); // Else remove 'filled' class
        }
        return;
    }

    return (
        <div className={styles.input}>
            <label htmlFor={id} className={styles.input__label}>
                {label}
            </label>
            <input
                className={styles.input__input}
                id={id}
                type={type}
                placeholder={placeholder}
                {...props}
                onBlur={(e) => handleFilled(e)}
            />
        </div>
    );
}

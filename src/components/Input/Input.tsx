"use client";

import React, { InputHTMLAttributes } from "react";

import styles from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
    type: "text" | "email" | "number" | "passworld" | "search" | "tel" | "url";
    placeholder: string;
}

export default function Input({ label, placeholder, type, id, ...props }: InputProps) {
    /**
     * Checks whether the input element is filled and manages the '.filled' class to indicate this state.
     * @param e - input blur event
     */
    function handleFilled(e: React.FocusEvent<HTMLInputElement>): void {
        if (e.currentTarget.value) {
            e.currentTarget.classList.add("filled");
        } else {
            e.currentTarget.classList.remove("filled");
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

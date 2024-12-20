"use client";

import { InputHTMLAttributes, useRef, useState } from "react";

import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
    type: "text" | "email" | "number" | "passworld" | "search" | "tel" | "url";
    placeholder: string;
}

export default function Input({ label, placeholder, type, id, ...props }: InputProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const [isFilled, setIsFilled] = useState<boolean>(false);

    // Checks whether the input element is filled and manages the 'filled' state.
    function handleFilled(): void {
        const inputEl = inputRef.current!;

        // Check if the input is filled
        inputEl.value ? setIsFilled(true) : setIsFilled(false);
    }

    return (
        <div className={styles.input}>
            <label htmlFor={id} className={styles.input__label}>
                {label}
            </label>
            <input
                className={`${styles.input__input} ${isFilled ? "filled" : ""}`}
                id={id}
                type={type}
                placeholder={placeholder}
                onBlur={handleFilled}
                ref={inputRef}
                aria-required={props.required ? "true" : "false"}
                aria-invalid={props["aria-invalid"] || false}
                aria-describedby={props["aria-describedby"]}
                {...props}
            />
        </div>
    );
}

import { InputHTMLAttributes } from "react";

import styles from "./RadioInput.module.css";

interface RadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
    name: string;
}

export default function RadioInput({ label, id, name, ...props }: RadioInputProps) {
    return (
        <label className={styles.radio} htmlFor={id}>
            <input
                className={styles.radio__input}
                type="radio"
                name={name}
                id={id}
                {...props}
                aria-labelledby={`${id}-label`}
            />
            <span className={styles.radio__checkmark} aria-hidden="true"></span>
            <span id={`${id}-label`}>{label}</span>
        </label>
    );
}

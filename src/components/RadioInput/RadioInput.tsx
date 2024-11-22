import { InputHTMLAttributes } from "react";

import styles from "./RadioInput.module.scss";

interface RadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
    name: string;
}

export default function RadioInput({ label, id, name, ...props }: RadioInputProps) {
    return (
        <label className={styles.radio} htmlFor={id}>
            <input className={styles.radio__input} type="radio" name={name} id={id} {...props} />
            <span className={styles.radio__checkmark}></span>
            {label}
        </label>
    );
}

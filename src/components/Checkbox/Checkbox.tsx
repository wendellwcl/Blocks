"use client";

import { useState } from "react";

import styles from "./Checkbox.module.scss";

interface CheckboxProps {
    label: string;
    name?: string;
    id?: string;
    checked?: boolean;
    disabled?: boolean;
}

export default function Checkbox({
    label,
    name = label,
    id = label,
    checked = false,
    disabled = false,
}: CheckboxProps) {
    const [checkedState, setCheckedState] = useState(checked);

    return (
        <label className={styles.checkbox} htmlFor={id}>
            <input
                type="checkbox"
                name={name}
                id={id}
                checked={checkedState}
                disabled={disabled}
                className={styles.checkbox__input}
                onChange={() => setCheckedState(!checkedState)}
            />
            <span className={styles.checkbox__checkmark}></span>
            {label}
        </label>
    );
}

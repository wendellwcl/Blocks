"use client";

import React, { InputHTMLAttributes, useEffect, useState } from "react";

import styles from "./Checkbox.module.css";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    id: string;
}

export default function Checkbox({ label, name, id, ...props }: CheckboxProps) {
    const [checkedState, setCheckedState] = useState(props.checked ?? props.defaultChecked ?? false);

    // Update the local state and chain the `onChange` event passed in the props.
    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setCheckedState(e.target.checked);

        if (props.onChange) props.onChange(e);
    }

    // Synchronize local state with `checked` prop.
    useEffect(() => {
        if (props.checked !== undefined) setCheckedState(props.checked);
    }, [props.checked]);

    return (
        <label className={styles.checkbox} htmlFor={id}>
            <input
                type="checkbox"
                className={styles.checkbox__input}
                name={name}
                id={id}
                onChange={(e) => handleChange(e)}
                checked={props.checked}
                aria-checked={checkedState}
                {...props}
            />
            <span className={styles.checkbox__checkmark} aria-hidden="true"></span>
            {label}
        </label>
    );
}

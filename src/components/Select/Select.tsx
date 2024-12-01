"use client";

import styles from "./Select.module.scss";

interface SelectProps {
    name: string;
    id: string;
    placeholderText?: string;
    options: string[];
}

export default function Select({ name, id, placeholderText, options }: SelectProps) {
    return (
        <div className={styles.select__wrapper}>
            <select name={name} id={id} className={styles.select__element}>
                {placeholderText && <option value={placeholderText}>{placeholderText}</option>}
                {options.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
}

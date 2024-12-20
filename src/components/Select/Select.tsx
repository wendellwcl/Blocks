"use client";

import styles from "./Select.module.css";

interface SelectProps {
    name: string;
    id: string;
    options: string[];
}

export default function Select({ name, id, options }: SelectProps) {
    return (
        <div className={styles.select}>
            <select name={name} id={id} className={styles.select__element} aria-labelledby={`${id}-label`}>
                {options.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
}

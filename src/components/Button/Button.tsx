"use client";

import { ButtonHTMLAttributes } from "react";

import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

export default function Button({ text, ...props }: ButtonProps) {
    return (
        <button className={styles.button} {...props} aria-disabled={props.disabled || undefined}>
            {text}
        </button>
    );
}

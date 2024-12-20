import { InputHTMLAttributes } from "react";

import styles from "./ToggleSwitch.module.css";

interface ToggleSwitchProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function ToggleSwitch({ ...props }: ToggleSwitchProps) {
    return (
        <label className={styles.toggleSwitch}>
            <input
                className={styles.toggleSwitch__checkbox}
                type="checkbox"
                role="switch"
                aria-checked={props.defaultChecked}
                {...props}
            />
            <span className={styles.toggleSwitch__slider}></span>
        </label>
    );
}

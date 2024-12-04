import styles from "./ToggleSwitch.module.scss";

interface ToggleSwitchProps {
    default_actived?: boolean;
}

export default function ToggleSwitch({ default_actived }: ToggleSwitchProps) {
    return (
        <label className={styles["toggle-switch"]}>
            <input className={styles["toggle-switch__checkbox"]} type="checkbox" defaultChecked={default_actived} />
            <span className={styles["toggle-switch__slider"]}></span>
        </label>
    );
}

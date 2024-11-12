import styles from "./Button.module.scss";

interface ButtonProps {
    text: string;
    onCLickFunction?: () => {};
    disabled?: boolean;
}

export default function Button({ text, onCLickFunction, disabled = false }: ButtonProps) {
    return (
        <button className={styles.button} onClick={onCLickFunction} disabled={disabled}>
            {text}
        </button>
    );
}

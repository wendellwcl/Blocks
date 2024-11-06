import styles from "./Button.module.scss";

interface ButtonProps {
    disabled?: boolean;
}

export default function Button({ disabled = false }: ButtonProps) {
    return (
        <button disabled={disabled} className={styles.button}>
            Button
        </button>
    );
}

import styles from "./PlaceholderText.module.scss";

export default function PlaceholderText() {
    return (
        <span className={styles["placeholder-text"]}>
            <span className={styles["placeholder-text__line"]}></span>
            <span className={styles["placeholder-text__line"]}></span>
            <span className={styles["placeholder-text__line"]}></span>
        </span>
    );
}

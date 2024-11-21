import styles from "./SkeletonText.module.scss";

export default function SkeletonText() {
    return (
        <span className={styles["skeleton-text"]}>
            <span className={styles["skeleton-text__line"]}></span>
            <span className={styles["skeleton-text__line"]}></span>
            <span className={styles["skeleton-text__line"]}></span>
        </span>
    );
}

import styles from "./SkeletonText.module.css";

export default function SkeletonText() {
    return (
        <span className={styles.skeletonText} aria-busy="true" aria-label="Loading text" role="status">
            <span className={styles.skeletonText__line} aria-hidden="true"></span>
            <span className={styles.skeletonText__line} aria-hidden="true"></span>
            <span className={styles.skeletonText__line} aria-hidden="true"></span>
        </span>
    );
}

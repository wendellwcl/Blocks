import styles from "./SkeletonCard.module.css";

export default function SkeletonCard() {
    return (
        <div className={styles.skeletonCard} aria-busy="true" aria-label="Loading card content" role="status">
            <div className={styles.skeletonCard__img} aria-hidden="true"></div>
            <div className={styles.skeletonCard__body}>
                <span className={styles.skeletonCard__title} aria-hidden="true"></span>
                <span className={styles.skeletonCard__text}>
                    <span className={styles.skeletonCard__text__line} aria-hidden="true"></span>
                    <span className={styles.skeletonCard__text__line} aria-hidden="true"></span>
                    <span className={styles.skeletonCard__text__line} aria-hidden="true"></span>
                </span>
            </div>
        </div>
    );
}

import styles from "./SkeletonCard.module.scss";

export default function SkeletonCard() {
    return (
        <div className={styles["skeleton-card"]}>
            <div className={styles["skeleton-card__img"]}></div>
            <div className={styles["skeleton-card__body"]}>
                <span className={styles["skeleton-card__title"]}></span>
                <span className={styles["skeleton-card__text"]}>
                    <span className={styles["skeleton-card__text__line"]}></span>
                    <span className={styles["skeleton-card__text__line"]}></span>
                    <span className={styles["skeleton-card__text__line"]}></span>
                </span>
            </div>
        </div>
    );
}

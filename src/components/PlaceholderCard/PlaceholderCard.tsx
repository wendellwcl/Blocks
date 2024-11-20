import styles from "./PlaceholderCard.module.scss";

export default function PlaceholderCard() {
    return (
        <div className={styles["placeholder-card"]}>
            <div className={styles["placeholder-card__img"]}></div>
            <div className={styles["placeholder-card__body"]}>
                <span className={styles["placeholder-card__title"]}></span>
                <span className={styles["placeholder-card__text"]}>
                    <span className={styles["placeholder-card__text__line"]}></span>
                    <span className={styles["placeholder-card__text__line"]}></span>
                    <span className={styles["placeholder-card__text__line"]}></span>
                </span>
            </div>
        </div>
    );
}

import styles from "./CardV.module.css";

interface CardVProps {
    title: string;
    contentText: string;
    imgSrc: string;
    imgAlt?: string;
}

export default function CardV({ title, contentText, imgSrc, imgAlt }: CardVProps) {
    return (
        <article className={styles.cardV}>
            <img src={imgSrc} alt={imgAlt || ""} className={styles.cardV__img} />
            <div className={styles.cardV__body}>
                <p className={styles.cardV__title}>{title}</p>
                <p>{contentText}</p>
            </div>
        </article>
    );
}

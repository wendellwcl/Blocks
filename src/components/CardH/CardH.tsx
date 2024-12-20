import styles from "./CardH.module.css";

interface CardHProps {
    title: string;
    contentText: string;
    imgSrc: string;
    imgAlt?: string;
}

export default function CardH({ title, contentText, imgSrc, imgAlt }: CardHProps) {
    return (
        <article className={styles.cardH}>
            <img src={imgSrc} alt={imgAlt || ""} className={styles.cardH__img} />
            <div className={styles.cardH__body}>
                <p className={styles.cardH__title}>{title}</p>
                <p>{contentText}</p>
            </div>
        </article>
    );
}

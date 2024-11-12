import Image from "next/image";

import styles from "./CardV.module.scss";

interface CardVProps {
    imgSrc: string;
    imgAlt: string;
    title: string;
    contentText: string;
}

export default function CardV({ imgSrc, imgAlt, title, contentText }: CardVProps) {
    return (
        <div className={styles.cardV}>
            <Image width={720} height={720} src={imgSrc} alt={imgAlt} className={styles.cardV__img} />
            <div className={styles.cardV__body}>
                <h6 className={styles.cardV__title}>{title}</h6>
                <p>{contentText}</p>
            </div>
        </div>
    );
}

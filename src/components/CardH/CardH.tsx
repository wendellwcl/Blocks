import Image from "next/image";

import styles from "./CardH.module.scss";

interface CardHProps {
    imgSrc: string;
    imgAlt: string;
    title: string;
    contentText: string;
}

export default function CardH({ imgSrc, imgAlt, title, contentText }: CardHProps) {
    return (
        <div className={styles.cardH}>
            <Image width={720} height={720} src={imgSrc} alt={imgAlt} className={styles.cardH__img} />
            <div className={styles.cardH__body}>
                <h6 className={styles.cardH__title}>{title}</h6>
                <p>{contentText}</p>
            </div>
        </div>
    );
}

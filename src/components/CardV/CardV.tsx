import Image from "next/image";

import styles from "./CardV.module.scss";

export default function CardV() {
    return (
        <div className={styles.cardV}>
            <Image
                width={720}
                height={720}
                src="https://fakeimg.pl/800x400/7834e5/EEEEF0?text=Image&font=bebas"
                alt="Image placeholder"
                className={styles.cardV__img}
            />
            <div className={styles.cardV__body}>
                <h6 className={styles.cardV__title}>Card Title</h6>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
            </div>
        </div>
    );
}

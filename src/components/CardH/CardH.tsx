import Image from "next/image";

import styles from "./CardH.module.scss";

export default function CardH() {
    return (
        <div className={styles.cardH}>
            <Image
                width={720}
                height={720}
                src="https://fakeimg.pl/600x600/7834e5/EEEEF0?text=Image&font=bebas"
                alt="Image placeholder"
                className={styles.cardH__img}
            />
            <div className={styles.cardH__body}>
                <h6 className={styles.cardH__title}>Card Title</h6>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
            </div>
        </div>
    );
}

"use client";

import styles from "./Accordion.module.scss";

export default function Accordion() {
    function toggleAccordion(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        const targetEl: HTMLButtonElement = e.target as HTMLButtonElement;
        const parentEl = targetEl.parentElement;
        parentEl ? parentEl?.classList.toggle("open") : null;
        return;
    }

    return (
        <div className={styles.accordion}>
            <button className={styles.accordion__header} onClick={(e) => toggleAccordion(e)}>
                Accordion Header
            </button>
            <div className={styles.accordion__content}>
                Lorem ipsum dolor sit amet. Et quod enim et incidunt corrupti At doloribus maiores sed soluta nobis aut
                architecto dolorum quo repellendus iusto. Sed exercitationem molestias qui quisquam excepturi sit
                reprehenderit impedit aut quibusdam reiciendis et rerum laboriosam quo eaque earum qui nostrum dolorem.
                Aut deserunt voluptas aut harum consequatur ut necessitatibus molestiae qui omnis quae.
            </div>
        </div>
    );
}

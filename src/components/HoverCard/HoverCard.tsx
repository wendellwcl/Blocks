"use client";

import styles from "./HoverCard.module.scss";

interface HoverCardProps {
    text: string;
    children: React.ReactNode;
}

export default function HoverCard({ text, children }: HoverCardProps) {
    /**
     * Check the positioning of elements and add the classes for correct display.
     * @param e - mouse enter event
     */
    function showFloatingEl(e: React.MouseEvent<HTMLDivElement>): void {
        //Get trigger element position
        const triggerEl = e.currentTarget;
        const triggerElPosition = triggerEl.getBoundingClientRect();
        const [xAxis, yAxis] = [
            triggerElPosition.x + triggerElPosition.width / 2,
            triggerElPosition.y + triggerElPosition.height / 2,
        ];

        //Get floating element measurements
        const floatingEl = triggerEl.querySelector("[data-floating]");
        const floatingElPosition = floatingEl?.getBoundingClientRect();
        const [floatingElWidth, floatingElHeight] = [floatingElPosition?.width, floatingElPosition?.height];

        //Get screen measurements
        const [screenWidth, screenHeight] = [window.innerWidth, window.innerHeight];

        //Check positioning (relative to X axis), and add classes
        if (xAxis < floatingElWidth! / 2) {
            e.currentTarget.classList.add("left");
        } else if (xAxis + floatingElWidth! / 2 > screenWidth) {
            e.currentTarget.classList.add("right");
        }

        //Check positioning (relative to Y axis), and add classes
        if (yAxis + triggerElPosition.height / 2 + (floatingElHeight! + 4) > screenHeight) {
            e.currentTarget.classList.add("top");
        }

        //Add class to display
        e.currentTarget.classList.add("show");
        return;
    }

    /**
     * Remove all possible display classes.
     * @param e - mouse leave event
     */
    function hiddenFloatingEl(e: React.MouseEvent<HTMLDivElement>): void {
        e.currentTarget.classList.remove("show");
        e.currentTarget.classList.remove("left");
        e.currentTarget.classList.remove("right");
        e.currentTarget.classList.remove("top");
        return;
    }

    return (
        <div
            className={styles.hoverCard}
            onMouseEnter={(e) => showFloatingEl(e)}
            onMouseLeave={(e) => hiddenFloatingEl(e)}
        >
            {text}
            <div className={styles.hoverCard__floating} data-floating>
                {children}
            </div>
        </div>
    );
}

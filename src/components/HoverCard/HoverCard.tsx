"use client";

import styles from "./HoverCard.module.scss";

interface HoverCardProps {
    text: string;
    children: React.ReactNode;
}

export default function HoverCard({ text, children }: HoverCardProps) {
    /**
     * Handles the display of the floating element by checking the trigger element's position
     * and applying the appropriate classes for proper alignment and visibility.
     * @param e - mouse enter event
     */
    function showFloatingEl(e: React.MouseEvent<HTMLDivElement>): void {
        // Get the position and dimensions of the trigger element (the one being hovered over)
        const triggerEl = e.currentTarget;
        const triggerElPosition = triggerEl.getBoundingClientRect();
        const [xAxis, yAxis] = [
            triggerElPosition.x + triggerElPosition.width / 2, // X-axis center of the trigger element
            triggerElPosition.y + triggerElPosition.height / 2, // Y-axis center of the trigger element
        ];

        // Find the floating element and get its dimensions
        const floatingEl = triggerEl.querySelector("[data-floating]");
        const floatingElPosition = floatingEl?.getBoundingClientRect();
        const [floatingElWidth, floatingElHeight] = [floatingElPosition?.width, floatingElPosition?.height];

        // Get the viewport dimensions
        const [screenWidth, screenHeight] = [window.innerWidth, window.innerHeight];

        //Check the position of the floating element relative to the X-axis
        if (xAxis < floatingElWidth! / 2) {
            // If the floating element would go off-screen to the left, add the "left" class
            e.currentTarget.classList.add("left");
        } else if (xAxis + floatingElWidth! / 2 > screenWidth) {
            // If the floating element would go off-screen to the right, add the "right" class
            e.currentTarget.classList.add("right");
        }

        // Check the position of the floating element relative to the Y-axis
        if (yAxis + triggerElPosition.height / 2 + (floatingElHeight! + 4) > screenHeight) {
            // If the floating element would go off-screen at the bottom, add the "top" class
            e.currentTarget.classList.add("top");
        }

        // Add the "show" class to make the floating element visible
        e.currentTarget.classList.add("show");

        return;
    }

    /**
     * Hides the floating element by removing all applied positioning and visibility classes.
     * @param e - mouse leave event
     */
    function hiddenFloatingEl(e: React.MouseEvent<HTMLDivElement>): void {
        e.currentTarget.classList.remove("show"); // Remove the "show" class to hide the floating element

        // Remove all positioning classes
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

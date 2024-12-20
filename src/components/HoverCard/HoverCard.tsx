"use client";

import { useRef, useState } from "react";

import styles from "./HoverCard.module.css";

interface HoverCardProps {
    text: string;
    children: React.ReactNode;
}

export default function HoverCard({ text, children }: HoverCardProps) {
    const triggerRef = useRef<HTMLDivElement>(null);
    const floatingRef = useRef<HTMLDivElement>(null);

    const [isFloatingVisible, setIsFloatingVisible] = useState<boolean>(false);

    /**
     * Handles the display of the floating element by checking the trigger element's position
     * and applying the appropriate classes for proper alignment and visibility.
     * @param e - mouse enter event
     */
    function showFloatingEl(): void {
        // Get the position and dimensions of the trigger element (the one being hovered over)
        const triggerEl = triggerRef.current!;
        const triggerElPosition = triggerEl.getBoundingClientRect();
        const [xAxis, yAxis] = [
            triggerElPosition.x + triggerElPosition.width / 2, // X-axis center of the trigger element
            triggerElPosition.y + triggerElPosition.height / 2, // Y-axis center of the trigger element
        ];

        // Find the floating element and get its dimensions
        const floatingEl = floatingRef.current!;
        const floatingElPosition = floatingEl?.getBoundingClientRect();
        const [floatingElWidth, floatingElHeight] = [floatingElPosition?.width, floatingElPosition?.height];

        // Get the viewport dimensions
        const [screenWidth, screenHeight] = [window.innerWidth, window.innerHeight];

        //Check the position of the floating element relative to the X-axis
        if (xAxis < floatingElWidth! / 2) {
            // If the floating element would go off-screen to the left, add the "left" class
            triggerEl.classList.add("left");
        } else if (xAxis + floatingElWidth! / 2 > screenWidth) {
            // If the floating element would go off-screen to the right, add the "right" class
            triggerEl.classList.add("right");
        }

        // Check the position of the floating element relative to the Y-axis
        if (yAxis + triggerElPosition.height / 2 + (floatingElHeight! + 4) > screenHeight) {
            // If the floating element would go off-screen at the bottom, add the "top" class
            triggerEl.classList.add("bottom");
        }

        // Add the "show" class to make the floating element visible
        triggerEl.classList.add("show");

        // Updates the state regarding the aria-expanded accessibility attribute
        setIsFloatingVisible(true);
    }

    /**
     * Hides the floating element by removing all applied positioning and visibility classes.
     * @param e - mouse leave event
     */
    function hiddenFloatingEl(): void {
        const triggerEl = triggerRef.current!;

        triggerEl.classList.remove("show"); // Remove the "show" class to hide the floating element

        // Remove all positioning classes
        triggerEl.classList.remove("left");
        triggerEl.classList.remove("right");
        triggerEl.classList.remove("bottom");

        // Updates the state regarding the aria-expanded accessibility attribute
        setIsFloatingVisible(false);
    }

    return (
        <div
            className={styles.hoverCard}
            onMouseEnter={showFloatingEl}
            onMouseLeave={hiddenFloatingEl}
            ref={triggerRef}
            onFocus={showFloatingEl}
            onBlur={hiddenFloatingEl}
            tabIndex={0}
            role="button"
            aria-haspopup="true"
            aria-expanded={isFloatingVisible}
        >
            {text}
            <div className={styles.hoverCard__floating} ref={floatingRef} role="tooltip">
                {children}
            </div>
        </div>
    );
}

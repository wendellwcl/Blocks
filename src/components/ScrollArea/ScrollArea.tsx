"use client";

import { MouseEvent as ReactMouseEvent, useLayoutEffect, useRef } from "react";

import styles from "./ScrollArea.module.scss";

interface ScrollAreaProps {
    children: React.ReactNode;
}

export default function ScrollArea({ children }: ScrollAreaProps) {
    // References to DOM elements
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const scrollBarRef = useRef<HTMLDivElement>(null);
    const scrollThumbRef = useRef<HTMLDivElement>(null);

    // Drag control
    const isDrag = useRef<boolean>(false);
    const startY = useRef<number>(0);
    const startScrollTop = useRef<number>(0);

    /**
     * Function to obtain container, content and thumb measurements.
     * @returns containerHeight, contentHeight, thumbHeight
     */
    function getMeasurements() {
        const containerHeight = containerRef.current!.offsetHeight; // Height of the visible container
        const contentHeight = contentRef.current!.scrollHeight; // Total height of the scrollable content
        const thumbHeight = scrollThumbRef.current!.offsetHeight; // Height of the scrollbar "thumb"

        return { containerHeight, contentHeight, thumbHeight };
    }

    // Checks if there is overflow (content larger than the container) and adjusts the scrollbar.
    function checkOverflow(): void {
        const { containerHeight, contentHeight } = getMeasurements();
        const scrollRatio = containerHeight / contentHeight; // Ratio of visible height to total content height

        // If content exceeds the container height
        if (contentHeight > containerHeight) {
            containerRef.current!.classList.add("overflow"); // Add a class indicating overflow

            // Set the "thumb" height, with a minimum value of 30px
            const thumbHeight = Math.max(scrollRatio * containerHeight, 30);
            scrollThumbRef.current!.style.height = `${thumbHeight}px`;
        } else {
            containerRef.current!.classList.remove("overflow"); // Remove the class if there's no overflow
        }

        return;
    }

    /**
     * Enables dragging for the scrollbar "thumb".
     * @param e - mousedown event
     */
    function enableDrag(e: ReactMouseEvent): void {
        isDrag.current = true; // Activate drag state
        startY.current = e.clientY; // Store the initial mouse Y position
        startScrollTop.current = contentRef.current!.scrollTop; // Store the initial scroll position
        document.body.style.userSelect = "none"; // Disable text selection while dragging

        return;
    }

    /**
     * Handles the drag event to scroll the content.
     * @param e - mousemove event
     */
    function handleDrag(e: MouseEvent): void {
        if (!isDrag.current) return; // Return if drag is not active

        const { containerHeight, contentHeight, thumbHeight } = getMeasurements();

        // Calculate scroll ratio based on the "thumb" size
        let scrollRatio;
        if (thumbHeight <= 30) {
            // If the "thumb" has the minimum size
            scrollRatio = contentHeight / (containerHeight - thumbHeight);
        } else {
            scrollRatio = contentHeight / containerHeight;
        }

        const deltaY = e.clientY - startY.current; // Difference between the current and initial mouse position
        contentRef.current!.scrollTop = startScrollTop.current + deltaY * scrollRatio; // Adjust the scroll position

        return;
    }

    // Updates the "thumb" position when scrolling.
    function handleScroll(): void {
        const { containerHeight, contentHeight, thumbHeight } = getMeasurements();
        const scrollTop = contentRef.current!.scrollTop; // Current scroll position of the content

        // Calculate the "thumb" position on the scrollbar
        let thumbTop;
        if (thumbHeight <= 30) {
            // If the "thumb" has the minimum size
            thumbTop = (scrollTop / contentHeight) * (containerHeight - thumbHeight);
        } else {
            thumbTop = Math.min((scrollTop / contentHeight) * containerHeight, containerHeight - thumbHeight);
        }

        scrollThumbRef.current!.style.top = `${thumbTop}px`; // Set the "thumb" position

        return;
    }

    // Disables the drag state.
    function disableDrag() {
        isDrag.current = false; // Deactivate drag state
        document.body.style.userSelect = "auto"; // Re-enable text selection
    }

    // Check overflow and manage global events.
    useLayoutEffect(() => {
        checkOverflow(); // Check for overflow when the component mounts

        // Add listeners for resizing, mouse movement and dragging
        window.addEventListener("resize", checkOverflow);
        window.addEventListener("mousemove", handleDrag);
        window.addEventListener("mouseup", disableDrag);

        // Remove listeners when the component unmounts
        return () => {
            window.removeEventListener("resize", checkOverflow);
            window.removeEventListener("mousemove", handleDrag);
            window.removeEventListener("mouseup", disableDrag);
        };
    }, []);

    return (
        <div className={styles["scrollArea__container"]} ref={containerRef}>
            <div className={styles["scrollArea__content"]} ref={contentRef} onScroll={() => handleScroll()}>
                {children}
            </div>
            <div className={styles["scrollArea__scrollBar"]} ref={scrollBarRef}>
                <div
                    className={styles["scrollArea__scrollThumb"]}
                    ref={scrollThumbRef}
                    onMouseDown={(e) => enableDrag(e)}
                ></div>
            </div>
        </div>
    );
}

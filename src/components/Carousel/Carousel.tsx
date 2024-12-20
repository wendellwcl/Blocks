"use client";

import React, { useLayoutEffect, useRef } from "react";

import styles from "./Carousel.module.css";

interface CarouselProps {
    children: React.ReactNode;
}

export default function Carousel({ children }: CarouselProps) {
    const contentRef = useRef<HTMLDivElement | null>(null);

    /**
     * Returns the items of the carousel from the `contentRef` container.
     * @returns an array of elements.
     */
    function getCarouselItems(): Element[] {
        const itemsCollection: HTMLCollection = contentRef.current!.children; // Access all child elements of the contentRef element
        return Array.from(itemsCollection) as HTMLElement[]; // Return an array of elements
    }

    /**
     * Configures the initial state of the carousel by:
     * - Adding the "current" class to the first item for initial focus.
     * - Prepending the last item to create a seamless looping effect.
     */
    function setCarousel(): void {
        const carouselItems = getCarouselItems();
        const firstItem = carouselItems[0];
        const lastItem = carouselItems[carouselItems.length - 1];

        // Mark the first item as "current"
        firstItem.classList.add("current");
        firstItem.setAttribute("aria-current", "true");
        firstItem.setAttribute("tabIndex", "0");

        contentRef.current!.prepend(lastItem); // Move the last item to the beginning to prepare for looping
    }

    /**
     * Handles carousel navigation by moving items forward (next) or backward (prev).
     * @param action - Specifies the navigation action: "next" or "prev".
     */
    function handleAction(action: "prev" | "next"): void {
        const carouselItems = getCarouselItems();
        const firstItem = carouselItems[0];
        const lastItem = carouselItems[carouselItems.length - 1];

        // Find the currently active, previous and next item
        const currentItem = contentRef.current!.querySelector(".current");
        const prevItem = currentItem!.previousSibling as HTMLElement;
        const nextItem = currentItem!.nextSibling as HTMLElement;

        currentItem?.classList.remove("current"); // Remove the "current" class from the active item

        if (action === "prev") {
            // Move to the previous item
            prevItem.classList.add("current");
            contentRef.current!.prepend(lastItem); // Prepend the last item to maintain the loop
        } else if (action === "next") {
            // Move to the next item
            nextItem.classList.add("current");
            contentRef.current!.append(firstItem); // Append the first item to maintain the loop
        }
    }

    /**
     * Ensures the carousel contains at least three items for proper functionality:
     * - If only one item exists, clones it twice to create three items.
     * - If two items exist, clones each item once to create four items.
     * This guarantees smooth navigation and looping behavior before initializing the carousel.
     */
    useLayoutEffect(() => {
        let carouselItems = getCarouselItems();

        if (carouselItems.length === 1) {
            // Clone the single item twice to create three total items
            const clonedItem1 = carouselItems[0].cloneNode(true) as HTMLElement;
            const clonedItem2 = carouselItems[0].cloneNode(true) as HTMLElement;
            contentRef.current!.appendChild(clonedItem1);
            contentRef.current!.appendChild(clonedItem2);
        } else if (carouselItems.length === 2) {
            // Clone each item once to create four total items
            carouselItems.forEach((item) => {
                const clonedItem = item.cloneNode(true) as HTMLElement;
                contentRef.current!.appendChild(clonedItem);
            });
        }

        // Configure the initial state of the carousel
        setCarousel();
    }, []);

    return (
        <div className={styles["carousel"]} role="region" aria-roledescription="carousel" aria-live="polite">
            <button
                className={`${styles["carousel__btn"]} ${styles["carousel__btn--prev"]}`}
                onClick={() => handleAction("prev")}
                aria-label="Previous item"
            ></button>
            <button
                className={`${styles["carousel__btn"]} ${styles["carousel__btn--next"]}`}
                onClick={() => handleAction("next")}
                aria-label="Next item"
            ></button>
            <div className={styles["carousel__content"]} ref={contentRef}>
                {children}
            </div>
        </div>
    );
}

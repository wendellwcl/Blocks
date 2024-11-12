"use client";

import React, { useLayoutEffect, useRef } from "react";

import styles from "./Carousel.module.scss";

export default function Carousel({ children }: { children: React.ReactNode }) {
    const contentRef = useRef<HTMLDivElement | null>(null);

    /**
     * Returns the items of the carousel element.
     * @returns itemsArray - an array of elements.
     */
    function getCarouselItems(): Element[] {
        const itemsCollection: HTMLCollection = contentRef.current!.children;
        const itemsArray: Element[] = [...itemsCollection];
        return itemsArray;
    }

    /**
     * Configures the initial state of the carousel by applying the necessary classes and setting up the elements for functionality.
     */
    function setCarousel(): void {
        const carouselItems = getCarouselItems();
        const firstItem = carouselItems[0];
        const lastItem = carouselItems[carouselItems.length - 1];
        firstItem.classList.add("current");
        contentRef.current!.prepend(lastItem);
        return;
    }

    /**
     * Performs a specific action in the carousel, such as moving forward or backward between elements.
     * @param action - The action to be performed, which can be "next" for the next element or "prev" for the previous element.
     */
    function handleAction(action: "prev" | "next"): void {
        const carouselItems = getCarouselItems();
        const firstItem = carouselItems[0];
        const lastItem = carouselItems[carouselItems.length - 1];

        const currentItem = contentRef.current!.querySelector(".current");
        const prevItem = currentItem!.previousSibling as HTMLElement;
        const nextItem = currentItem!.nextSibling as HTMLElement;

        currentItem?.classList.remove("current");

        if (action === "prev") {
            prevItem.classList.add("current");
            contentRef.current!.prepend(lastItem);
        } else if (action === "next") {
            nextItem.classList.add("current");
            contentRef.current!.append(firstItem);
        }

        return;
    }

    /**
     * This function checks if the carousel contains at least three items, which are necessary for smooth navigation and looping behavior.
     * If fewer than three items are present, it  clones existing items to meet the required minimum.
     * This ensures the carousel can operate correctly before proceeding to the initial setup configuration.
     */
    useLayoutEffect(() => {
        let carouselItems = getCarouselItems();

        if (carouselItems.length === 1) {
            const clonedItem1 = carouselItems[0].cloneNode(true);
            const clonedItem2 = carouselItems[0].cloneNode(true);
            contentRef.current!.appendChild(clonedItem1);
            contentRef.current!.appendChild(clonedItem2);
        } else if (carouselItems.length === 2) {
            carouselItems.forEach((item) => {
                const clonedItem = item.cloneNode(true);
                contentRef.current!.appendChild(clonedItem);
            });
        }

        setCarousel();
    }, []);

    return (
        <div className={styles.carousel}>
            <button
                className={`${styles.carousel__btn} ${styles["carousel__btn--prev"]}`}
                onClick={() => handleAction("prev")}
            ></button>
            <button
                className={`${styles.carousel__btn} ${styles["carousel__btn--next"]}`}
                onClick={() => handleAction("next")}
            ></button>
            <div className={styles.carousel__content} ref={contentRef}>
                {children}
            </div>
        </div>
    );
}

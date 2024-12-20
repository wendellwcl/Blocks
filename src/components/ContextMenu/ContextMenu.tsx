"use client";

import { MouseEvent as ReactMouseEvent, useEffect, useRef, useState } from "react";

import styles from "./ContextMenu.module.css";

interface ContextMenuProps {
    children: React.ReactNode;
}

export default function ContextMenu({ children }: ContextMenuProps) {
    const triggerAreaRef = useRef<HTMLDivElement>(null);
    const floatingMenuRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState<{ xAxis: number; yAxis: number }>({ xAxis: 0, yAxis: 0 });

    //This function displays a custom context menu when a right-click (or similar event) occurs.
    // It calculates the click position relative to the trigger area and adjusts the menu's position
    // to ensure it fits within the viewport. The menu is made visible and styled dynamically.
    function showContextMenu(e: ReactMouseEvent): void {
        e.preventDefault(); // Prevent the default context menu from appearing

        // Calculate the click coordinates relative to the trigger area
        const boundingRect = triggerAreaRef.current!.getBoundingClientRect();
        const xAxis = e.clientX - boundingRect.left;
        const yAxis = e.clientY - boundingRect.top;
        setPosition({ xAxis, yAxis }); // Update the position state

        // Get dimensions of the floating menu
        const floatingMenuEl = floatingMenuRef.current!;
        const floatingMenuWidth = floatingMenuEl.clientWidth;
        const floatingMenuHeight = floatingMenuEl.clientHeight;

        // Check if the floating menu overflows the viewport horizontally
        if (e.clientX + floatingMenuWidth >= window.innerWidth - 40) {
            floatingMenuEl.classList.add("right"); // Add a class to adjust its position to the left
        } else {
            floatingMenuEl.classList.remove("right"); // Remove the class if no adjustment is needed
        }

        // Check if the floating menu overflows the viewport vertically
        if (e.clientY + floatingMenuHeight >= window.innerHeight - 40) {
            floatingMenuEl.classList.add("bottom"); // Add a class to adjust its position upward
        } else {
            floatingMenuEl.classList.remove("bottom"); // Remove the class if no adjustment is needed
        }

        // Display the floating menu
        floatingMenuEl.classList.add("show");
    }

    // This function hides the custom context menu.
    function closeContextMenu(): void {
        const floatingMenuEl = floatingMenuRef.current!;

        // Remove classes to hide the floating menu and reset its position
        floatingMenuEl.classList.remove("show");
        floatingMenuEl.classList.remove("right");
        floatingMenuEl.classList.remove("bottom");
    }

    useEffect(() => {
        // Add a global click listener to close the context menu
        window.addEventListener("click", closeContextMenu);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("click", closeContextMenu);
        };
    }, []);

    return (
        <div className={styles.contextMenu}>
            <div
                className={styles.contextMenu__triggerArea}
                ref={triggerAreaRef}
                onContextMenu={(e) => showContextMenu(e)}
                tabIndex={0}
                aria-haspopup="menu"
            ></div>
            <div
                className={styles.contextMenu__floatingMenu}
                ref={floatingMenuRef}
                style={{ top: `${position.yAxis}px`, left: `${position.xAxis}px` }}
                role="menu"
                tabIndex={-1}
            >
                {children}
            </div>
        </div>
    );
}

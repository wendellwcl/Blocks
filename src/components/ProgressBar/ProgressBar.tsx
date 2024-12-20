"use client";

import styles from "./ProgressBar.module.css";

interface ProgressBarProps {
    percentage: number;
}

export default function ProgressBar({ percentage }: ProgressBarProps) {
    return (
        <svg
            className={styles.progressBar}
            role="progressbar"
            aria-valuenow={percentage}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Loading progress"
        >
            <rect className={styles.progressBar__bar} x="0" y="0" rx="4" width="0%" height="100%">
                <animate
                    attributeName="width"
                    from="0%"
                    to={`${percentage}%`}
                    dur="1s"
                    fill="freeze"
                    calcMode="spline"
                    keyTimes="0; 1"
                    keySplines="0.25 0 0 1"
                />
            </rect>
        </svg>
    );
}

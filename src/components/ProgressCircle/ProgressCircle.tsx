"use client";

import styles from "./ProgressCircle.module.scss";

interface ProgressCircleProps {
    size: number;
    percentage: number;
}

export default function ProgressCircle({ size, percentage }: ProgressCircleProps) {
    const circlePosition = size / 2;
    const circleR = (size / 2) * 0.9;
    const circlePerimeter = 2 * Math.PI * circleR;
    const strokeWidth = size * 0.1;

    return (
        <svg width={size} height={size} className={styles["progress-circle__container"]}>
            <circle
                className={styles["progress-circle__circle"]}
                cx={circlePosition}
                cy={circlePosition}
                r={circleR}
                strokeWidth={strokeWidth}
            />
            <circle
                className={`${styles["progress-circle__circle"]} ${styles["progress-circle__circle--progress"]}`}
                cx={circlePosition}
                cy={circlePosition}
                r={circleR}
                strokeWidth={strokeWidth}
                strokeDasharray={circlePerimeter}
                strokeDashoffset={circlePerimeter}
            >
                <animate
                    attributeName="stroke-dashoffset"
                    from={circlePerimeter}
                    to={circlePerimeter * (1 - percentage / 100)}
                    dur="1s"
                    fill="freeze"
                    calcMode="spline"
                    keyTimes="0; 1"
                    keySplines="0.25 0 0 1"
                />
            </circle>
        </svg>
    );
}

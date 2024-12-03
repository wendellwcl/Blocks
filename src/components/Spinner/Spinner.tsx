import styles from "./Spinner.module.scss";

interface SpinnerProps {
    size: number;
}

export default function Spinner({ size }: SpinnerProps) {
    const circlePosition = size / 2;
    const circleR = (size / 2) * 0.8;
    const circlePerimeter = 2 * circleR * Math.PI;
    const strokeWidth = (size / 2) * 0.2;

    return (
        <svg className={styles.spinner} width={size} height={size}>
            <circle
                className={styles.spinner__circle}
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
                    to={-circlePerimeter}
                    dur="3s"
                    repeatCount="indefinite"
                />
            </circle>
        </svg>
    );
}

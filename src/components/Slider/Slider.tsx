"use client";

import { useState } from "react";

import styles from "./Slider.module.scss";

interface SliderProps {
    name: string;
    id: string;
    min: number;
    max: number;
    value?: number;
}

export default function Slider({ name, id, min, max, value }: SliderProps) {
    const [inputValue, setInputValue] = useState(value ?? max / 2);

    return (
        <div className={styles["slider__container"]}>
            <span className={styles["slider__fill-bar"]} style={{ width: `${inputValue}%` }}></span>
            <input
                className={styles["slider__input"]}
                type="range"
                id={id}
                name={name}
                min={min}
                max={max}
                value={inputValue}
                onChange={(e) => {
                    setInputValue(Number(e.target.value));
                }}
            />
        </div>
    );
}

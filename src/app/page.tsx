"use client";

import ProgressCircle from "@/components/ProgressCircle/ProgressCircle";
import { useState } from "react";

export default function Home() {
    const [value, setValue] = useState(25);

    return (
        <div className="bg-theme_neutral text-theme_neutral-0 min-h-screen w-screen flex items-center justify-center p-8">
            <ProgressCircle size={100} percentage={value} />
            <input
                type="range"
                value={value}
                min={0}
                max={100}
                step={1}
                onChange={(e) => {
                    setValue(Number(e.target.value));
                }}
            />
        </div>
    );
}

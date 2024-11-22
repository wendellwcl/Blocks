"use client";

import ProgressBar from "@/components/ProgressBar/ProgressBar";
import { useState } from "react";

export default function Home() {
    const [value, setValue] = useState(90);

    return (
        <div className="bg-theme_neutral text-theme_neutral-0 min-h-screen w-screen flex items-center justify-center p-8">
            <ProgressBar percentage={value} />
            <input
                type="range"
                min={0}
                max={100}
                step={1}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
            />
        </div>
    );
}

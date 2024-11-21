"use client";

import SkeletonText from "@/components/SkeletonText/SkeletonText";

export default function Home() {
    return (
        <div className="bg-theme_neutral text-theme_neutral-0 min-h-screen w-screen flex items-center justify-center p-8">
            <SkeletonText />
        </div>
    );
}

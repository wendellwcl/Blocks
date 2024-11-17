"use client";

import HoverCard from "@/components/HoverCard/HoverCard";

export default function Home() {
    return (
        <div className="bg-theme_neutral text-theme_neutral-0 min-h-screen w-screen flex items-center justify-center p-8">
            <HoverCard text="Hover Me">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor explicabo sapiente nemo amet, est
                    praesentium molestiae eligendi, velit natus libero, reprehenderit tempore asperiores odit vero
                    impedit unde magnam soluta fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                    explicabo sapiente nemo amet, est praesentium molestiae eligendi, velit natus libero, reprehenderit
                    tempore asperiores odit vero impedit unde magnam soluta fuga. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Dolor explicabo sapiente nemo amet, est praesentium molestiae eligendi, velit
                    natus libero, reprehenderit tempore asperiores odit vero impedit unde magnam soluta fuga.
                </p>
            </HoverCard>
        </div>
    );
}

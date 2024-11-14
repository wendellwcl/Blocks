"use client";

import Input from "@/components/Input/Input";

export default function Home() {
    return (
        <div className="bg-theme_neutral text-theme_neutral-0 min-h-screen w-screen flex items-center justify-center p-8">
            <Input label="Hello World" placeholder="Type something..." type="text" id="input-1" />
        </div>
    );
}

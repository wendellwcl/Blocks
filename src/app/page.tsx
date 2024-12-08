"use client";

import Toast, { showToast } from "@/components/Toast/Toast";

export default function Home() {
    return (
        <div className="bg-theme_neutral text-theme_neutral-0 min-h-screen w-screen flex items-center justify-center p-8">
            <button className="p-4 bg-theme_brand rounded" onClick={() => showToast("my-toast")}>
                Test Toast
            </button>
            <Toast
                id="my-toast"
                title="Toast"
                message="This is a toast message. This is a toast message. This is a toast message. This is a toast message."
            />
        </div>
    );
}

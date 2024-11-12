"use client";

import Dialog, { toggleDialog } from "@/components/Dialog/Dialog";

export default function Home() {
    return (
        <div className="bg-theme_neutral text-theme_neutral-0 min-h-screen w-screen flex items-center justify-center p-8">
            <Dialog dialogId="my-dialog" title="Title" actionFunction={() => console.log("HELLO WORLD")}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat facilis laboriosam eveniet
                    voluptatum quas modi iusto officiis quis. Qui ex eaque modi. Architecto recusandae aperiam rerum
                    nostrum, impedit fugiat quo!
                </p>
            </Dialog>
            <button
                onClick={() => toggleDialog("my-dialog")}
                className="bg-theme_neutral-0 text-theme_brand p-2 rounded"
            >
                open dialog
            </button>
        </div>
    );
}

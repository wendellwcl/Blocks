"use client";

import Dropdown from "@/components/Dropdown/Dropdown";

export default function Home() {
    return (
        <div className="bg-theme_neutral text-theme_neutral-0 min-h-screen w-screen flex items-center justify-center p-8">
            <Dropdown title={"My Dropdow"}>
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                    Link1
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    Link2
                </a>
                <button>btn1</button>
                <button onClick={() => console.log("HELLO WORLD")}>btn2</button>
            </Dropdown>
        </div>
    );
}

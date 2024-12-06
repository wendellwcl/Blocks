import Tooltip from "@/components/Tooltip/Tooltip";

export default function Home() {
    return (
        <div className="bg-theme_neutral text-theme_neutral-0 min-h-screen w-screen flex items-center justify-center p-8">
            <div className="absolute top-1/2 left-1/2">
                <Tooltip tip_text="Hello world">
                    <div className="underline">Hover me</div>
                </Tooltip>
            </div>
        </div>
    );
}

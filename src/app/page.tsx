import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch";

export default function Home() {
    return (
        <div className="bg-theme_neutral text-theme_neutral-0 min-h-screen w-screen flex  items-center justify-center p-8">
            <ToggleSwitch default_actived />
        </div>
    );
}

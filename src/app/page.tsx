import Checkbox from "@/components/Checkbox/Checkbox";

export default function Home() {
    return (
        <div className="bg-theme_neutral text-theme_neutral-0 min-h-screen w-screen flex items-center justify-center p-8">
            <Checkbox label="Checkbox 1" />
            <Checkbox label="Checkbox 2" checked />
            <Checkbox label="Checkbox 3" disabled />
        </div>
    );
}

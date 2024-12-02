import Slider from "@/components/Slider/Slider";

export default function Home() {
    return (
        <div className="bg-theme_neutral text-theme_neutral-0 min-h-screen w-screen flex  items-center justify-center p-8">
            <Slider name="lorem" id="ipsum" min={1} max={100} value={19} />
        </div>
    );
}

import RadioInput from "@/components/RadioInput/RadioInput";

export default function Home() {
    return (
        <div className="bg-theme_neutral text-theme_neutral-0 min-h-screen w-screen flex items-center justify-center p-8">
            <RadioInput id="radio_1" name="hello_world" label="Hello" />
            <RadioInput id="radio_2" name="hello_world" label="World" />
        </div>
    );
}

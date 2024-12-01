import Select from "@/components/Select/Select";

export default function Home() {
    return (
        <div className="bg-theme_neutral text-theme_neutral-0 min-h-screen w-screen flex  items-center justify-center p-8">
            <Select
                name="Hello"
                id="World"
                placeholderText="Select ..."
                options={["lorem", "ipsum", "dolor", "sit", "amet"]}
            />
        </div>
    );
}

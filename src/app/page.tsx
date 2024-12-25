import AsideBar from "@/components/AsideBar/AsideBar";
import ComponentsSection from "@/components/ComponentsSection/ComponentsSection";
import MainHeader from "@/components/MainHeader/MainHeader";
import Providers from "./providers";

export default function Home() {
    return (
        <Providers>
            <div className="w-full h-full">
                <MainHeader />
                <main className="container grid grid-cols-1 md:grid-cols-4">
                    <AsideBar />
                    <ComponentsSection />
                </main>
            </div>
        </Providers>
    );
}

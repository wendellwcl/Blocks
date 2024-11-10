import Carousel from "@/components/Carousel/Carousel";

export default function Home() {
    return (
        <div className="bg-theme_neutral text-theme_neutral-0 min-h-screen w-screen flex items-center justify-center p-8">
            <Carousel>
                <img src="https://fakeimg.pl/900x900/7834e5/EEEEF0?text=Image1&font=bebas" />
                <img src="https://fakeimg.pl/900x900/7834e5/EEEEF0?text=Image2&font=bebas" />
                <img src="https://fakeimg.pl/900x900/7834e5/EEEEF0?text=Image3&font=bebas" />
            </Carousel>
        </div>
    );
}

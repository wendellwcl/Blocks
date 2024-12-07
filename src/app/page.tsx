import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
    return (
        <>
            {/* <div className="bg-theme_neutral text-theme_neutral-0 min-h-screen w-screen flex items-center justify-center p-8"> */}
            {/* </div> */}
            <Navbar
                brand={{ brandImgPath: "#", brandAltText: "<Brand/>", brandUrl: "/" }}
                navLinks={[
                    { text: "link 1", url: "/" },
                    { text: "link 2", url: "/" },
                    { text: "link 3", url: "/" },
                ]}
            />
            <div className="pb-[1000px]"></div>
        </>
    );
}

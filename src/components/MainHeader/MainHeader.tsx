import Link from "next/link";

export default function MainHeader() {
    return (
        <header className="w-full h-20 md:h-32 bg-cover-img bg-center bg-cover relative mb-52 sm:mb-48 md:mb-52">
            <div className="container w-full absolute left-1/2 top-full -translate-x-1/2 -translate-y-12 md:-translate-y-16">
                <Link
                    href={"/"}
                    className="block w-24 md:w-32 aspect-square bg-logo-svg bg-center bg-cover shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                >
                    <span className="hidden">Blocks</span>
                </Link>
                <div className="w-full mt-6">
                    <h1 className="text-3xl md:text-4xl font-[600] inline-block">
                        <Link href={"/"}>
                            <h1>&lt;Blocks /&gt;</h1>
                        </Link>
                    </h1>
                    <p className="mt-2 p-2 text-sm text-theme_neutral-50 text-center sm:text-left border border-theme_neutral-500 rounded">
                        <span className="text-lg">👾</span> Uma coleção diversificada de componentes.
                    </p>
                </div>
            </div>
        </header>
    );
}

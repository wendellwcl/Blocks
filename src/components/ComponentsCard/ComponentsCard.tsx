import Image from "next/image";
import Link from "next/link";

interface ComponentsCardProps {
    imgSrc: string;
    imgAlt: string;
    title: string;
}

export default function ComponentsCard({ imgSrc, imgAlt, title }: ComponentsCardProps) {
    return (
        <Link
            href={"/"}
            className="group w-full self-start bg-theme_neutral-600 rounded overflow-hidden transition-all hover:text-theme_brand"
        >
            <div
                className="w-full aspect-[2/1] bg-theme_brand overflow-hidden relative before:content-[attr(data-title)] before:absolute before:inset-0 before:flex before:items-center before:justify-center before:text-2xl before:text-center before:text-theme_neutral-0 before:capitalize before:font-[800] before:z-10 before:transition-all before:duration-500 group-hover:before:tracking-widest"
                data-title={title}
            >
                <Image
                    src={imgSrc}
                    alt={imgAlt}
                    width={600}
                    height={600}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-300 mix-blend-plus-darker group-hover:scale-110"
                />
            </div>
            <p
                className="w-full relative flex items-center pl-3 py-2 ml-2 capitalize text-lg font-[600] before:content-[attr(data-icon)] before:absolute before:left-0 before:rotate-45 before:text-[0.3rem]"
                data-icon="🟪"
            >
                {title}
            </p>
        </Link>
    );
}

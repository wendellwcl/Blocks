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
            href={`/component/${encodeURIComponent(title)}`}
            className="group w-full self-start bg-theme_neutral-800 rounded overflow-hidden transition-all hover:text-theme_brand"
        >
            <div className="w-full aspect-[2/1] bg-theme_neutral-900 overflow-hidden relative" data-title={title}>
                <Image
                    src={imgSrc}
                    alt={imgAlt}
                    width={600}
                    height={600}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-300 mix-blend-screen group-hover:scale-110"
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

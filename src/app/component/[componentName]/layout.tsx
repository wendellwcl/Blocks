import Link from "next/link";
import React from "react";

export default async function ComponentLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <header className="container p-4 text-xl font-bold">
                <Link
                    href="/"
                    className="relative pl-6 hover:text-theme_brand-hover transition-all before:content-[''] before:absolute before:top-1/2 before:left-2 before:-translate-y-1/2 before:rotate-45 before:border-4 before:w-3 before:h-3 before:border-t-0 before:border-r-0 hover:before:border-theme_brand-hover before:transition-all"
                >
                    Voltar
                </Link>
            </header>
            <div>{children}</div>
        </div>
    );
}

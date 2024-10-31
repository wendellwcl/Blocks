import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body className="antialiased bg-theme_neutral text-theme_brand">{children}</body>
        </html>
    );
}

//Styles
import { Fira_Sans } from "next/font/google";
import "./globals.css";
const fira_sans = Fira_Sans({ weight: ["400", "600", "800"], subsets: ["latin"] });

//Metadata
import type { Metadata } from "next";
import ReduxProvider from "./ReduxProvider";
export const metadata: Metadata = {
    title: "<Blocks />",
    description: "Uma coleção diversificada de componentes React.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body className={`${fira_sans.className} antialiased`}>
                <ReduxProvider>{children}</ReduxProvider>
            </body>
        </html>
    );
}

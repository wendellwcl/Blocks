import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                theme_brand: {
                    DEFAULT: "#7834E5",
                    hover: "#6B1DD4",
                    border: "#714CC3",
                },
                theme_neutral: {
                    DEFAULT: "#111113",
                    900: "#19191B",
                    800: "#222325",
                    700: "#292A2E",
                    600: "#303136",
                    500: "#393A40",
                    400: "#46484F",
                    300: "#5F606A",
                    200: "#6C6E79",
                    100: "#797B86",
                    50: "#B2B3BD",
                    0: "#EEEEF0",
                },
            },
        },
    },
    plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto"],
        // sans: ['Sarabun', ...defaultTheme.fontFamily.sans],
        // thai: ['IBM Plex Sans Thai', 'sans-serif'],
      },
      colors: {
        "purple-underline": "#603EBE",
        "purple-background": "#5E3DB3",
        "purple-text-underline": "#8F6BE8",
        "dark-purple-background": "#090C35",
        "light-gray-background": "#F5F4F9",
        "header-gray": "#E7E7E7",
        "title-gray": "#C2C2C2",
      },
    },
  },
  plugins: [],
};
export default config;

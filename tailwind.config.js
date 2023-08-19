import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "burnt-maroon": {
                    50: "#f5ebf0",
                    100: "#edd8e2",
                    200: "#d1a3b7",
                    300: "#b5748c",
                    400: "#7d2e41",
                    500: "#2e0000",
                    600: "#3d060b",
                    700: "#330408",
                    800: "#290206",
                    900: "#1f0103",
                    950: "#140102",
                },
                surface: {
                    0: "#ffffff",
                    50: "#f1f4f6",
                    100: "#e2e8ee",
                    200: "#c6d1dd",
                    300: "#a9bbcb",
                    400: "#8da4ba",
                    500: "#708da9",
                    600: "#5a7187",
                    700: "#435565",
                    800: "#2d3844",
                    900: "#161c22",
                },
            },
        },
    },

    daisyui: {
        themes: [
            "dark",

            {
                gjg: {
                    primary: "#DE3B38",
                    secondary: "#8FA6B5",
                    accent: "#1B75BC",
                    neutral: "#3d4451",
                    "base-100": "#ffffff",
                    "base-200": "#f9fafb",
                    "base-300": "#d1d5db",
                    "base-400": "#9ca3af",
                    info: "#ffffff",

                    "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
                    "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
                    "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
                    "--animation-btn": "0.25s", // duration of animation when you click on button
                    "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
                    "--btn-text-case": "uppercase", // set default text transform for buttons
                    "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
                    "--border-btn": "1px", // border width of buttons
                    "--tab-border": "1px", // border width of tabs
                    "--tab-radius": "0.5rem", // border radius of tabs

                    "--navbar-padding": "1rem", // padding of navbar

                    "--in": "#ffffff", // keyframe for fade-in animation
                },
            },
        ],
    },

    plugins: [require("daisyui")],
};

/** @type {import("prettier").Config} */
export default {
    plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
    useTabs: false,
    tabWidth: 4,
    trailingComma: "es5",
    semi: true,
    singleQuote: false,
    printWidth: 80,
};

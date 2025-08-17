/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  $schema: "https://json.schemastore.org/prettierrc",

  plugins: ["@prettier/plugin-oxc", "prettier-plugin-tailwindcss"],

  printWidth: 80,
};

export default config;

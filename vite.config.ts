import { defineConfig } from "vite";

import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import oxlintPlugin from "vite-plugin-oxlint";

export default defineConfig({
  plugins: [viteReact(), tailwindcss(), oxlintPlugin()],
});

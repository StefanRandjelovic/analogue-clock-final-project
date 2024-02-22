import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@helpers", replacement: "/src/helper/" },
      { find: "@audio", replacement: "/src/audio/" },
      { find: "@styles", replacement: "/src/style/" },
      { find: "@images", replacement: "/src/images/" },
      { find: "@components", replacement: "/src/components" },
    ],
  },
});

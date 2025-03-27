import { defineConfig, PluginOption } from "vite";
import tailwindcss from "@tailwindcss/vite";
import type { Connect } from "vite";

export default defineConfig({
  server: {
    port: 3000,
    host: "localhost",
    open: true,
    hmr: true,
    middlewareMode: false,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: "./index.html",
    },
  },
  plugins: [
    tailwindcss(),
    {
      name: "rewrite-language-prefix",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const incomingReq = req as Connect.IncomingMessage & { url: string };

          if (incomingReq.url) {
            const langPrefixMatch = incomingReq.url.match(/^\/(en|vn)\/(.+)/);
            if (langPrefixMatch) {
              incomingReq.url = `/${langPrefixMatch[2]}`;
            }
          }

          next();
        });
      },
    } as PluginOption,
  ],
});
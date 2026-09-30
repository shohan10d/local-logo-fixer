// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// `bun run build:static` sets STATIC_EXPORT=1 and produces a fully static site in
// dist/client (plain HTML per page + assets) that can be uploaded to cPanel.
const STATIC_EXPORT = process.env["STATIC_EXPORT"] === "1";

export default defineConfig({
  ...(STATIC_EXPORT ? { nitro: false as const } : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    ...(STATIC_EXPORT ? {} : { server: { entry: "server" } }),
    ...(STATIC_EXPORT
      ? {
          prerender: { enabled: true, crawlLinks: true },
          pages: [
            { path: "/" },
            { path: "/services" },
            { path: "/about" },
            { path: "/events" },
            { path: "/contact" },
          ],
        }
      : {}),
  },
});

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/setUpTests.ts",
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
  },
});

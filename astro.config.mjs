// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      SERVICE_ID: envField.string({
        context: "client",
        access: "public",
      }),
      TEMPLATE_ID: envField.string({
        context: "client",
        access: "public",
      }),
      PUBLIC_KEY: envField.string({
        context: "client",
        access: "public",
      }),
    },
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [tailwind(), react()],
});

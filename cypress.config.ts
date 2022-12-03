import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config({
  path: ".env.development",
});

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:8000",
    setupNodeEvents(_, config) {
      const { parsed: parsedEnvVars } =
        dotenv.config({
          path: ".env.development",
        }) || {};

      if (parsedEnvVars === undefined) {
        return config;
      }

      const newConfig = {
        ...config,
        env: {
          ...config.env,
          ...parsedEnvVars,
        },
      };

      return newConfig;
    },
  },
});

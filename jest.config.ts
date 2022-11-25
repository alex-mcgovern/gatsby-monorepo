/** -----------------------------------------------------------------------------
 * Base jest config
 * ------------------------------------------------------------------------------- */

const BASE_CONFIG = {
  // moduleNameMapper: {
  //   ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/__mocks__/file-mock.js",
  // },
  preset: "ts-jest",

  setupFilesAfterEnv: ["<rootDir>/test/setup_test_env.ts"],
  testEnvironmentOptions: {
    url: "http://localhost",
  },
  testPathIgnorePatterns: [
    "node_modules",
    "\\.cache",
    "<rootDir>.*/public",
    "cypress",
  ],
  transform: {
    "\\.css\\.ts$": "@vanilla-extract/jest-transform",
    ".(ts|tsx)$": [
      "ts-jest",
      {
        babelConfig: "<rootDir>/.babelrc",
      },
    ],
  },
};

/** -----------------------------------------------------------------------------
 * Main Jest config
 * ------------------------------------------------------------------------------- */

const jestConfig = {
  projects: [
    /** ---------------------------------------------
     * 🔩 Boondoggle design component library
     * ----------------------------------------------- */
    {
      ...BASE_CONFIG,
      displayName: "boondoggle.design",
      testMatch: [
        "<rootDir>/packages/boondoggle.design/**/?(*.)+(spec|test).[jt]s?(x)",
      ],
    },
    /** ---------------------------------------------
     * 🏚 Main gatsby site
     *
     * ----------------------------------------------- */
    {
      ...BASE_CONFIG,
      displayName: "gatsby-site",
      testMatch: [
        "<rootDir>/packages/gatsby-site/**/?(*.)+(spec|test).[jt]s?(x)",
      ],
    },
    /** ---------------------------------------------
     * 💬 Feedback form
     * ----------------------------------------------- */
    // {
    //   preset: "ts-jest/presets/js-with-ts",
    //   testEnvironment: "jsdom",
    //   setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
    //   displayName: "Feedback form",
    //   testMatch: [
    //     "<rootDir>/packages/demo-feedback-form/**/?(*.)+(spec|test).[jt]s?(x)",
    //   ],
    // transform: BASE_TRANSFORM,

    // },
  ],
};

export default jestConfig;

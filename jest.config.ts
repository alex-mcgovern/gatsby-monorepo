const BASE_CONFIG = {
  moduleNameMapper: {
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/test/__mocks__/file-mock.ts",
    /** Prevent parsing external CSS with Vanilla Extract */
    ".*node_modules+.*.css$": "<rootDir>/__mocks__/styleMock.js",
  },
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

const jestConfig = {
  projects: [
    {
      displayName: "boondoggle.design",
      ...BASE_CONFIG,
      testMatch: [
        "<rootDir>/packages/boondoggle.design/**/?(*.)+(spec|test).[jt]s?(x)",
      ],
    },
    {
      displayName: "gatsby-site",
      ...BASE_CONFIG,
      testMatch: [
        "<rootDir>/packages/gatsby-site/**/?(*.)+(spec|test).[jt]s?(x)",
      ],
    },
    {
      displayName: "demo-feedback-form",
      ...BASE_CONFIG,
      testMatch: [
        "<rootDir>/packages/demo-feedback-form/**/?(*.)+(spec|test).[jt]s?(x)",
      ],
    },
  ],
};

export default jestConfig;

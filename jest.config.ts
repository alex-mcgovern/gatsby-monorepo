/** -----------------------------------------------------------------------------
 * Base jest config
 * ------------------------------------------------------------------------------- */

const BASE_CONFIG = {
  moduleNameMapper: {
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/test/__mocks__/file-mock.js`,
  },
  preset: "ts-jest",
  reporters: ["default", "jest-junit"],
  resetMocks: false,
  setupFiles: [
    // `<rootDir>/test/loadershim.js`, // "<rootDir>/test/register-context.js",
    // "jest-localstorage-mock",
  ],
  setupFilesAfterEnv: ["<rootDir>/test/setup_test_env.ts"],
  testEnvironmentOptions: {
    url: `http://localhost`,
  },
  testPathIgnorePatterns: [
    `node_modules`,
    `\\.cache`,
    `<rootDir>.*/public`,
    `cypress`,
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
  transformIgnorePatterns: [`node_modules/(?!(gatsby|gatsby-script)/)`],
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
      displayName: "Boondoggle design",
      testMatch: [
        "<rootDir>/packages/boondoggle.design/**/?(*.)+(spec|test).[jt]s?(x)",
      ],

      // resolver: "jest-node-exports-resolver",
    },
    /** ---------------------------------------------
     * 🏚 Main gatsby site
     *
     * ----------------------------------------------- */
    {
      ...BASE_CONFIG,
      displayName: "Main site",
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

  // transformIgnorePatterns: ["node_modules/(?!(firebase/app|@firebase))"],

  // globalSetup: "./global-setup.js",
  // moduleNameMapper: {
  //   ...packages.reduce((acc, name) => {
  //     return {
  //       ...acc,
  //       [`@alexmcgovern/${name}(.*)$`]: `<rootDir>/packages/./${name}/$1`,
  //     };
  //   }, {}),
  // },
};

export default jestConfig;

// import { lstatSync, readdirSync } from "fs";

// import path from "path";

/** -----------------------------------------------------------------------------
 * Get listing of packages in the mono repo
 * Adapted from:
 * https://blog.ah.technology/a-guide-through-the-wild-wild-west-of-setting-up-a-mono-repo-part-2-adding-jest-with-a-breeze-16e08596f0de
 * ------------------------------------------------------------------------------- */

// const basePath = path.resolve(__dirname, "packages");
// const packages = readdirSync(basePath).filter((name) => {
//   return lstatSync(path.join(basePath, name)).isDirectory();
// });

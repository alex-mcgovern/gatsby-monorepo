const jestConfig = {
  // globalSetup: "./global-setup.js",
  /**
   * RESOLVE ALIASED IMPORTS
   *
   * These aliases allow a quicker developer experience
   * and speed up refactoring by resolving  import aliases against an absolute URL.
   *
   * *Note*: Any new aliases will also need to be reflected in
   * `gatsby-node.ts`, `tsconfig.json` and `.eslintrc`
   *
   * ToDo: Abstract mapping for webpack/ts/jest aliases and create a
   * function to populate all 3 from a common datasource
   */
  moduleNameMapper: {
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/test/__mocks__/file-mock.js`,
    "^~components(.*)$": "<rootDir>/src/components$1",
    "^~context(.*)$": "<rootDir>/src/context$1",
    "^~hooks(.*)$": "<rootDir>/src/hooks$1",
    "^~styles(.*)$": "<rootDir>/src/styles$1",
    "^~test(.*)$": "<rootDir>/test$1",
    "^~utils(.*)$": "<rootDir>/src/utils$1",
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

export default jestConfig;
